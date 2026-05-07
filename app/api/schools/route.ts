import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const db = getConnection();

    const search = req.nextUrl.searchParams.get("search") || "";

    let query = `
      SELECT *
      FROM schools
    `;

    let values: any[] = [];

    //  Search by school name
    if (search.trim()) {
      query += ` WHERE school_name LIKE ?`;
      values.push(`%${search}%`);
    }

    query += ` ORDER BY created_at DESC LIMIT 10`;

    const [rows]: any = await db.query(query, values);

    return NextResponse.json({
      success: true,
      schools: rows,
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