import { getConnection } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const db = getConnection();
  
  try {
    const id = params.id;
    
    const query = `UPDATE reports SET status = 3 WHERE id = ?`;
    await db.query(query, [id]);

    return Response.json({ success: true, message: "Report rejected" });
  } catch (error) {
    console.error("Reject report error:", error);
    return Response.json(
      { error: "Failed to reject report" },
      { status: 500 }
    );
  }
}
