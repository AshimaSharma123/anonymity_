import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const db = getConnection();
    const { name, status, school_id } = await req.json();

    if (!name || !status || !school_id) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: name, status, school_id" },
        { status: 400 }
      );
    }

    const statusValue = status === "Active" ? 1 : 0;

    const insertQuery = `
      INSERT INTO teachers (name, school_id, status, created_at)
      VALUES (?, ?, ?, NOW())
    `;

    await db.query(insertQuery, [name, school_id, statusValue]);

    return NextResponse.json(
      { success: true, message: "Teacher added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding teacher:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add teacher", error },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const db = getConnection();

    const search = req.nextUrl.searchParams.get("search") || "";
    const school_id = req.nextUrl.searchParams.get("school_id") || "";
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
    const riskFilter = req.nextUrl.searchParams.get("risk") || "";
    const statusFilter = req.nextUrl.searchParams.get("status") || "";
    const offset = (page - 1) * limit;

    let query = `
  SELECT
    t.id,
    t.name,
    t.school_id,
    t.created_at,
    COUNT(DISTINCT r.id) AS reports,

    ROUND(
      AVG(
        CASE
          WHEN r.return_to_teacher = 1 THEN 5
          WHEN r.return_to_teacher = 3 THEN 3
          WHEN r.return_to_teacher = 2 THEN 1
          ELSE NULL
        END
      ),
      1
    ) AS avgRating,

    CASE
      WHEN COUNT(r.id) = 0 THEN 'Medium'
      WHEN SUM(CASE WHEN r.return_to_teacher = 2 THEN 1 ELSE 0 END) > COUNT(r.id) * 0.5 THEN 'High'
      WHEN SUM(CASE WHEN r.return_to_teacher = 1 THEN 1 ELSE 0 END) > COUNT(r.id) * 0.6 THEN 'Low'
      ELSE 'Medium'
    END AS risk,

    CASE WHEN t.status = 1 THEN 'Active' ELSE 'Inactive' END AS status

  FROM teachers t
  LEFT JOIN reports r
    ON r.teacher_id = t.id
    AND r.school_id = t.school_id

  WHERE t.school_id = ?
`;

    let values: any[] = [school_id];

    if (search.trim()) {
      query += ` AND t.name LIKE ?`;
      values.push(`%${search}%`);
    }

    query += ` GROUP BY t.id`;

    if (riskFilter && riskFilter !== "All") {
      query += ` HAVING risk = ?`;
      values.push(riskFilter);
    }

    const countQuery = query
      .replace(
        /SELECT[\s\S]*?FROM/i,
        "SELECT COUNT(DISTINCT t.id) as total FROM"
      )
      .replace(/GROUP BY[\s\S]*$/i, "");

    const [countResult]: any = await db.query(countQuery, values);
    console.log("countResult", countResult);
    const totalTeachers = countResult[0].total || 0;

    query += ` ORDER BY t.created_at DESC LIMIT ? OFFSET ?`;
    values.push(limit, offset);

    const [rows]: any = await db.query(query, values);

    const teachers = rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      reports: row.reports || 0,
      avgRating: row.avgRating || 0,
      risk: row.risk || "Medium",
      status: row.status || "Inactive",
    }));

    const filteredByStatus = statusFilter && statusFilter !== "All"
      ? teachers.filter((t: any) => t.status === statusFilter)
      : teachers;

    return NextResponse.json({
      success: true,
      teachers: filteredByStatus,
      pagination: {
        page,
        limit,
        total: totalTeachers,
        totalPages: Math.ceil(totalTeachers / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching teachers:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch teachers",
      },
      { status: 500 }
    );
  }
}
