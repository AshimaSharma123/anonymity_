import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getConnection();
    const { id } = await params;

    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

    // Get school details
    const schoolQuery = `
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
          ) >= 2.5 THEN 'Medium'
          ELSE 'High'
        END AS calculated_risk
      FROM schools
      LEFT JOIN teachers ON teachers.school_id = schools.id
      LEFT JOIN reports ON reports.school_id = schools.id
      WHERE schools.id = ?
      GROUP BY schools.id
    `;

    const [schoolRows]: any = await db.query(schoolQuery, [id]);

    if (!schoolRows || schoolRows.length === 0) {
      return NextResponse.json(
        { success: false, message: "School not found" },
        { status: 404 }
      );
    }

    const school = schoolRows[0];

    // Get total reports count for this school
    const countQuery = `
      SELECT COUNT(*) as total
      FROM reports
      WHERE school_id = ?
    `;

    const [countResult]: any = await db.query(countQuery, [id]);
    const totalReports = countResult[0].total;

    // Get reports for this school with pagination
    const reportsQuery = `
      SELECT *
      FROM reports
      WHERE school_id = ?
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;

    const [reportRows]: any = await db.query(reportsQuery, [id, limit, offset]);

    const reports = reportRows.map((row: any) => ({
      ...row,
      tags: (() => {
        try {
          if (!row.tags) return [];
          return typeof row.tags === "string" ? JSON.parse(row.tags) : row.tags;
        } catch {
          return [];
        }
      })(),
    }));

    return NextResponse.json({
      success: true,
      school,
      reports,
      pagination: {
        page,
        limit,
        total: totalReports,
        totalPages: Math.ceil(totalReports / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching school details:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch school details", error },
      { status: 500 }
    );
  }
}
