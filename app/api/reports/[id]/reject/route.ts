import { getConnection } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const db = getConnection();

  try {
    //  await params
    const { id } = await params;

    const query = `UPDATE reports SET status = 3 WHERE id = ?`;

    await db.query(query, [id]);

    return Response.json({
      success: true,
      message: "Report rejected",
    });
  } catch (error) {
    console.error("reject report error:", error);

    return Response.json(
      {
        error: "Failed to reject report",
      },
      { status: 500 }
    );
  }
}