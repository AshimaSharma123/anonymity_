import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: schoolId } = await params;

    const body = await req.json();

    const db = getConnection();

    const {
      name,
      association,
      districtName,
      schoolYear,
      gradeLevels,
      streetAddress,
      city,
      state,
      zip,
    } = body;

    await db.query(
      `
      UPDATE schools
      SET
        school_name = ?,
        school_association = ?,
        school_district_name = ?,
        school_year = ?,
        grade_level = ?,
        street_address = ?,
        city = ?,
        state = ?,
        zipcode = ?
      WHERE id = ?
      `,
      [
        name,
        association,
        districtName,
        schoolYear,
        JSON.stringify(gradeLevels),
        streetAddress,
        city,
        state,
        zip,
        schoolId,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "School updated successfully",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update school",
      },
      { status: 500 }
    );
  }
}