import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
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
      INSERT INTO schools (
        school_name,
        school_association,
        school_district_name,
        school_year,
        grade_level,
        street_address,
        city,
        state,
        zipcode
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      ]
    );

    return Response.json({
      success: true,
      message: "School created successfully",
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to create school",
      },
      { status: 500 }
    );
  }
}