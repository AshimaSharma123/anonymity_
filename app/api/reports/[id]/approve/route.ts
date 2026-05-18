import { supabase } from "@/lib/supabase";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params
    const { id } = await params;

    console.log("id", id);

    // Update report status to Approved (2)
    const { error } = await supabase
      .from("reports")
      .update({
        status: 2,
      })
      .eq("id", id);

    if (error) {
      console.error(
        "Supabase Update Error:",
        error
      );

      return Response.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Report approved",
    });
  } catch (error) {
    console.error(
      "Approve report error:",
      error
    );

    return Response.json(
      {
        error: "Failed to approve report",
      },
      {
        status: 500,
      }
    );
  }
}