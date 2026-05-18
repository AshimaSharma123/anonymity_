import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;


    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

    // =========================
    // 1. SCHOOL DETAILS
    // =========================
    const { data: school, error: schoolError } = await supabase
      .from("schools")
      .select("*")
      .eq("id", id)
      .single();

    if (schoolError || !school) {
      return NextResponse.json(
        { success: false, message: "School not found" },
        { status: 404 }
      );
    }

    // =========================
    // 2. STATS (VIEW - SINGLE QUERY)
    // =========================
    const { data: stats } = await supabase
      .from("school_report_stats")
      .select("*")
      .eq("school_id", id)
      .single();

    const safeStats = stats || {
      this_month: 0,
      last_month: 0,
      school_yes: 0,
      school_no: 0,
      school_maybe: 0,
      teacher_yes: 0,
      teacher_no: 0,
      teacher_maybe: 0,
    };

    // =========================
    // 3. REPORTS (PAGINATION ONLY)
    // =========================
    const { data: reportsData, count: totalReports, error: reportsError } =
      await supabase
        .from("reports")
        .select("*", { count: "exact" })
        .eq("school_id", id)
        .order("created_at", { ascending: false })
        .range(offset, offset + limit - 1);

    if (reportsError) {
      return NextResponse.json(
        { success: false, message: reportsError.message },
        { status: 500 }
      );
    }

    const reports = (reportsData || []).map((row: any) => ({
      ...row,
      tags: row.tags || [],
    }));

    // =========================
    // RESPONSE
    // =========================
    return NextResponse.json({
      success: true,

      school: {
        ...school,

        reports_this_month: safeStats.this_month,
        reports_last_month: safeStats.last_month,

        return_to_school_yes_percentage:
          safeStats.school_yes + safeStats.school_no + safeStats.school_maybe > 0
            ? Number(
                (
                  (safeStats.school_yes * 100) /
                  (safeStats.school_yes +
                    safeStats.school_no +
                    safeStats.school_maybe)
                ).toFixed(1)
              )
            : 0,

        return_to_school_no_percentage:
          safeStats.school_yes + safeStats.school_no + safeStats.school_maybe > 0
            ? Number(
                (
                  (safeStats.school_no * 100) /
                  (safeStats.school_yes +
                    safeStats.school_no +
                    safeStats.school_maybe)
                ).toFixed(1)
              )
            : 0,

        return_to_school_maybe_percentage:
          safeStats.school_yes + safeStats.school_no + safeStats.school_maybe > 0
            ? Number(
                (
                  (safeStats.school_maybe * 100) /
                  (safeStats.school_yes +
                    safeStats.school_no +
                    safeStats.school_maybe)
                ).toFixed(1)
              )
            : 0,

        return_to_teacher_yes_percentage:
          safeStats.teacher_yes + safeStats.teacher_no + safeStats.teacher_maybe > 0
            ? Number(
                (
                  (safeStats.teacher_yes * 100) /
                  (safeStats.teacher_yes +
                    safeStats.teacher_no +
                    safeStats.teacher_maybe)
                ).toFixed(1)
              )
            : 0,

        return_to_teacher_no_percentage:
          safeStats.teacher_yes + safeStats.teacher_no + safeStats.teacher_maybe > 0
            ? Number(
                (
                  (safeStats.teacher_no * 100) /
                  (safeStats.teacher_yes +
                    safeStats.teacher_no +
                    safeStats.teacher_maybe)
                ).toFixed(1)
              )
            : 0,

        return_to_teacher_maybe_percentage:
          safeStats.teacher_yes + safeStats.teacher_no + safeStats.teacher_maybe > 0
            ? Number(
                (
                  (safeStats.teacher_maybe * 100) /
                  (safeStats.teacher_yes +
                    safeStats.teacher_no +
                    safeStats.teacher_maybe)
                ).toFixed(1)
              )
            : 0,
      },

      reports,

      pagination: {
        page,
        limit,
        total: totalReports || 0,
        totalPages: Math.ceil((totalReports || 0) / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch school details",
      },
      { status: 500 }
    );
  }
}