import { getConnection } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const db = getConnection();
  
  try {
    const id = params.id;
    
    const query = `UPDATE reports SET status = 2 WHERE id = ?`;
    await db.query(query, [id]);

    return Response.json({ success: true, message: "Report approved" });
  } catch (error) {
    console.error("Approve report error:", error);
    return Response.json(
      { error: "Failed to approve report" },
      { status: 500 }
    );
  }
}
