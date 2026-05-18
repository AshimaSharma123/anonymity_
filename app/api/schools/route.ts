import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const search =
      req.nextUrl.searchParams.get("search") || "";

    const page = parseInt(
      req.nextUrl.searchParams.get("page") || "1"
    );

    const limit = parseInt(
      req.nextUrl.searchParams.get("limit") || "10"
    );

    const risk =
      req.nextUrl.searchParams.get("risk");

    const state =
      req.nextUrl.searchParams.get("state");

    const offset = (page - 1) * limit;

    // Base query
    let query = supabase
      .from("schools")
      .select("*", {
        count: "exact",
      });

    // Search filter
    if (search.trim()) {
      query = query.or(
        [
          `school_name.ilike.%${search}%`,
          `city.ilike.%${search}%`,
          `state.ilike.%${search}%`,
        ].join(",")
      );
    }

    // State filter
    if (state && state !== "All") {
      query = query.eq("state", state);
    }

    // Risk filter
    if (risk && risk !== "All") {
      query = query.eq(
        "calculated_risk",
        risk
      );
    }

    // Pagination + Order
    query = query
  .order("created_at", { ascending: false })
  .order("id", { ascending: false }) // tie-breaker
  .range(offset, offset + limit - 1);

    const {
      data: schools,
      error,
      count,
    } = await query;

    if (error) {
      console.error(
        "Supabase Error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    // Fetch all states
    const { data: statesData } =
      await supabase
        .from("schools")
        .select("state");

    const states = [
      ...new Set(
        (statesData || [])
          .map((s: any) => s.state)
          .filter(Boolean)
      ),
    ].sort();

    return NextResponse.json({
      success: true,

      schools,

      states,

      total: count || 0,

      page,

      limit,

      totalPages: Math.ceil(
        (count || 0) / limit
      ),
    });
  } catch (error) {
    console.error(
      "Error fetching schools:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch schools",
      },
      {
        status: 500,
      }
    );
  }
}