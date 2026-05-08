import { getConnection } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const db = getConnection();

  try {
    //  await params
    const { id } = await params;

    console.log("id", id);

    const query = `UPDATE reports SET status = 2 WHERE id = ?`;

    await db.query(query, [id]);

    return Response.json({
      success: true,
      message: "Report approved",
    });
  } catch (error) {
    console.error("Approve report error:", error);

    return Response.json(
      {
        error: "Failed to approve report",
      },
      { status: 500 }
    );
  }
}