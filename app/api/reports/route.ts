import { getConnection } from "@/lib/db";

export async function GET() {
 const db = getConnection();
  try {
    const query = `
      SELECT *
      FROM reports
      ORDER BY created_at DESC
    `;

    const [rows] = await db.query(query);

    // parse JSON field (tags)
    const reports = (rows as any[]).map((row) => ({
        ...row,
        tags: (() => {
            try {
            if (!row.tags) return [];
            return typeof row.tags === "string"
                ? JSON.parse(row.tags)
                : row.tags;
            } catch {
            return [];
            }
        })(),
        }));

    return Response.json(reports);

  } catch (error) {
    console.error("Fetch reports error:", error);

    return Response.json(
      { error: "Failed to fetch reports" },
      { status: 500 }
    );
  }
}