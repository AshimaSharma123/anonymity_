import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getConnection();
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Teacher ID is required" },
        { status: 400 }
      );
    }

    const deleteQuery = `DELETE FROM teachers WHERE id = ?`;
    await db.query(deleteQuery, [id]);

    return NextResponse.json(
      { success: true, message: "Teacher deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting teacher:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete teacher", error },
      { status: 500 }
    );
  }
}


export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getConnection();

    const { id } = await params;

    const body = await req.json();

    const { name, status } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Teacher ID is required",
        },
        { status: 400 }
      );
    }

    if (!name || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and status are required",
        },
        { status: 400 }
      );
    }

    const statusValue =
      status === "Active" ? 1 : 0;

    const updateQuery = `
      UPDATE teachers
      SET name = ?, status = ?
      WHERE id = ?
    `;

    await db.query(updateQuery, [
      name,
      statusValue,
      id,
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Teacher updated successfully",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error updating teacher:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update teacher",
      },
      { status: 500 }
    );
  }
}
