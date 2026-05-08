import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const db = getConnection();

    const search = req.nextUrl.searchParams.get("search") || "";
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
    const risk = req.nextUrl.searchParams.get("risk");
    const status = req.nextUrl.searchParams.get("status");

    const offset = (page - 1) * limit;

    let query = "SELECT * FROM schools WHERE 1=1";
    let countQuery = "SELECT COUNT(*) as total FROM schools WHERE 1=1";
    let values: any[] = [];

    // Search by school name or location
    if (search.trim()) {
      query += ` AND (school_name LIKE ? OR city LIKE ? OR location LIKE ?)`;
      countQuery += ` AND (school_name LIKE ? OR city LIKE ? OR location LIKE ?)`;
      const searchTerm = `%${search}%`;
      values.push(searchTerm, searchTerm, searchTerm);
    }

    // Filter by risk level
    if (risk && risk !== "All") {
      query += ` AND risk_level = ?`;
      countQuery += ` AND risk_level = ?`;
      values.push(risk);
    }

    // Filter by status
    if (status && status !== "All") {
      query += ` AND status = ?`;
      countQuery += ` AND status = ?`;
      values.push(status);
    }

    // Get total count
    const [countResult]: any = await db.query(countQuery, values);
    const total = countResult[0].total;

    // Get paginated results
    query += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`;
    const [rows]: any = await db.query(query, [...values, limit, offset]);

    return NextResponse.json({
      success: true,
      schools: rows,
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
      },
      { status: 500 }
    );
  }
}
