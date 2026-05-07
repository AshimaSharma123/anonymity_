import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const db = getConnection();

    const search = req.nextUrl.searchParams.get("search") || "";

    let query = `
      SELECT *
      FROM teachers
    `;

    let values: any[] = [];

    // 🔍 Search by teacher name
    if (search.trim()) {
      query += ` WHERE name LIKE ?`;
      values.push(`%${search}%`);
    }

    query += ` ORDER BY created_at DESC LIMIT 10`;

    const [rows]: any = await db.query(query, values);

    return NextResponse.json({
      success: true,
      teachers: rows,
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