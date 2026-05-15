import { getConnection } from "@/lib/db";

export async function GET(request: Request) {
  const db = getConnection();
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const sentiment = searchParams.get("sentiment") || "All";
    const status = searchParams.get("status") || "All";

    const offset = (page - 1) * limit;

    let whereConditions: string[] = [];
    let params: any[] = [];

    if (search) {
      whereConditions.push(
        `(id LIKE ? OR school_name LIKE ? OR teacher_name LIKE ? OR your_name LIKE ?)`
      );
      params.push(`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`);
    }

    if (sentiment !== "All") {
      whereConditions.push(`sentiments = ?`);
      params.push(sentiment);
    }

    if (status !== "All") {
      let statusValue = 1;
      if (status === "Approved") statusValue = 2;
      if (status === "Rejected") statusValue = 3;
      whereConditions.push(`status = ?`);
      params.push(statusValue);
    }

    const whereClause =
      whereConditions.length > 0 ? `WHERE ${whereConditions.join(" AND ")}` : "";

    const countQuery = `SELECT COUNT(*) as total FROM reports ${whereClause}`;
    const [countResult] = await db.query(countQuery, params);
    const total = (countResult as any[])[0].total;

    const query = `
      SELECT *
      FROM reports
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await db.query(query, [...params, limit, offset]);

    const reports = (rows as any[]).map((row) => ({
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

    return Response.json({
      data: reports,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Fetch reports error:", error);

    return Response.json(
      { error: "Failed to fetch reports" },
      { status: 500 }
    );
  }
}
