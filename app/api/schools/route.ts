import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const db = getConnection();

    const search = req.nextUrl.searchParams.get("search") || "";
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");

    const risk = req.nextUrl.searchParams.get("risk");
    const state = req.nextUrl.searchParams.get("state");

    const offset = (page - 1) * limit;

    let whereConditions: string[] = [];
    let havingConditions: string[] = [];

    let whereValues: any[] = [];
    let havingValues: any[] = [];

    // SEARCH
    if (search.trim()) {
      whereConditions.push(`
        (
          schools.school_name LIKE ?
          OR schools.city LIKE ?
          OR schools.state LIKE ?
        )
      `);

      const searchTerm = `%${search.trim()}%`;

      whereValues.push(searchTerm, searchTerm, searchTerm);
    }

    // STATE FILTER
    if (state && state !== "All") {
      whereConditions.push(`schools.state = ?`);
      whereValues.push(state);
    }

    // RISK FILTER
    if (risk && risk !== "All") {
      havingConditions.push(`calculated_risk = ?`);
      havingValues.push(risk);
    }

    // MAIN QUERY
    let query = `
      SELECT 
        schools.*,

        COUNT(DISTINCT teachers.id) AS teacher_count,

        COUNT(DISTINCT reports.id) AS report_count,

        ROUND(
          AVG(
            (
              COALESCE(reports.classroom_behavior, 0) +
              COALESCE(reports.lesson_preparedness, 0) +
              COALESCE(reports.staff_friendliness, 0) +
              COALESCE(reports.school_cleanliness, 0) +
              COALESCE(reports.support_level, 0)
            ) / 5
          ),
          1
        ) AS avg_rating,

        CASE
          WHEN AVG(
            (
              COALESCE(reports.classroom_behavior, 0) +
              COALESCE(reports.lesson_preparedness, 0) +
              COALESCE(reports.staff_friendliness, 0) +
              COALESCE(reports.school_cleanliness, 0) +
              COALESCE(reports.support_level, 0)
            ) / 5
          ) >= 4 THEN 'Low'

          WHEN AVG(
            (
              COALESCE(reports.classroom_behavior, 0) +
              COALESCE(reports.lesson_preparedness, 0) +
              COALESCE(reports.staff_friendliness, 0) +
              COALESCE(reports.school_cleanliness, 0) +
              COALESCE(reports.support_level, 0)
            ) / 5
          ) > 2.5 THEN 'Medium'
WHEN AVG(
            (
              COALESCE(reports.classroom_behavior, 0) +
              COALESCE(reports.lesson_preparedness, 0) +
              COALESCE(reports.staff_friendliness, 0) +
              COALESCE(reports.school_cleanliness, 0) +
              COALESCE(reports.support_level, 0)
            ) / 5
          ) >= 1 THEN 'High'
          ELSE 'N/A'
        END AS calculated_risk

      FROM schools

      LEFT JOIN teachers
        ON teachers.school_id = schools.id

      LEFT JOIN reports
        ON reports.school_id = schools.id
    `;

    // COUNT QUERY
    let countQuery = `
      SELECT COUNT(DISTINCT schools.id) as total

      FROM schools

      LEFT JOIN teachers
        ON teachers.school_id = schools.id

      LEFT JOIN reports
        ON reports.school_id = schools.id
    `;

    // WHERE CONDITIONS
    if (whereConditions.length > 0) {
      const whereClause = ` WHERE ${whereConditions.join(" AND ")}`;

      query += whereClause;
      countQuery += whereClause;
    }

    // GROUP BY
    query += ` GROUP BY schools.id `;

    // HAVING CONDITIONS
    if (havingConditions.length > 0) {
      query += ` HAVING ${havingConditions.join(" AND ")}`;
    }

    // ORDER + PAGINATION
    query += `
      ORDER BY schools.created_at DESC
      LIMIT ? OFFSET ?
    `;

    // TOTAL COUNT
    const [countResult]: any = await db.query(
      countQuery,
      whereValues
    );

    const total = countResult[0].total;

    // FINAL QUERY
    const [rows]: any = await db.query(query, [
      ...whereValues,
      ...havingValues,
      limit,
      offset,
    ]);

    // GET ALL STATES
    const [stateRows]: any = await db.query(`
      SELECT DISTINCT state
      FROM schools
      WHERE state IS NOT NULL
        AND state != ''
      ORDER BY state ASC
    `);

    const states = stateRows.map((row: any) => row.state);

    return NextResponse.json({
      success: true,
      schools: rows,
      states,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });

  } catch (error) {
    console.error("Error fetching schools:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch schools",
        error,
      },
      { status: 500 }
    );
  }
}