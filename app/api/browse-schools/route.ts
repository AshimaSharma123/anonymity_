import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    // =========================
    // QUERY PARAMS
    // =========================
    const searchParams = req.nextUrl.searchParams;

    const search = searchParams.get("search")?.trim() || "";

    const page = Math.max(
      parseInt(searchParams.get("page") || "1", 10),
      1
    );

    const limit = Math.min(
      Math.max(
        parseInt(searchParams.get("limit") || "10", 10),
        1
      ),
      50 // prevent huge requests
    );

    const risk = searchParams.get("risk");
    const state = searchParams.get("state");

    const offset = (page - 1) * limit;

    // =========================
    // BASE QUERY
    // =========================
    let query = supabase
      .from("schools")
      .select(
        `
        id,
        school_name,
        city,
        state,
        avg_rating,
        total_reports,
        calculated_risk,
        return_to_school_percentage,
        sentiment,
        created_at
      `,
        { count: "exact" }
      );

    // =========================
    // SEARCH
    // =========================
    if (search) {
      query = query.or(
        `
        school_name.ilike.%${search}%,
        city.ilike.%${search}%,
        state.ilike.%${search}%
      `
      );
    }

    // =========================
    // STATE FILTER
    // =========================
    if (state && state !== "All") {
      query = query.eq("state", state);
    }

    // =========================
    // RISK FILTER
    // =========================
    if (risk && risk !== "All") {
      query = query.eq("calculated_risk", risk);
    }

    // =========================
    // SORTING
    // =========================
    query = query
      .order("avg_rating", { ascending: false }) // best schools first
      .order("total_reports", { ascending: false })
      .order("id", { ascending: false });

    // =========================
    // PAGINATION
    // =========================
    query = query.range(
      offset,
      offset + limit - 1
    );

    // =========================
    // EXECUTE
    // =========================
    const {
      data: schools,
      error,
      count,
    } = await query;

    // =========================
    // ERROR HANDLING
    // =========================
    if (error) {
      console.error(
        "Error fetching schools:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Failed to fetch schools data",
        },
        { status: 500 }
      );
    }

    // =========================
    // RESPONSE
    // =========================
    return NextResponse.json({
      success: true,
      schools: schools || [],
      pagination: {
        total: count || 0,
        page,
        limit,
        totalPages: Math.ceil(
          (count || 0) / limit
        ),
      },
    });
  } catch (error) {
    console.error(
      "Unexpected server error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}