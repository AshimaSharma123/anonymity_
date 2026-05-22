import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      schoolName,
      schoolId,
      teacherId,
      teacherName,
      date,
      gradeLevel,
      ratings,
      feedback,
      selectedTags,
      returnToSchool,
      returnToTeacher,
      schoolComment,
      teacherComment,
      postAs,
      yourName,
      schoolAssociation,
      sentiments,
      newIdentity,
      existingIdentity
    } = body;

    const identity = newIdentity || existingIdentity;


    // =========================
    // VALIDATE IDENTITY
    // =========================

    if (newIdentity) {
      // Check if new identity already exists
      const { data: existingCode, error: checkError } = await supabase
        .from("reports")
        .select("id")
        .eq("yourIdentity", newIdentity)
        .limit(1);

      if (checkError) {
        return NextResponse.json(
          { message: checkError.message },
          { status: 500 }
        );
      }

      if (existingCode && existingCode.length > 0) {
        return NextResponse.json(
          {
            message:
              "This Identity Code already exists. Please choose another code.",
          },
          { status: 500 }
        );
      }
    }

    if (existingIdentity) {
      // Check if existing identity exists
      const { data: existingCode, error: checkError } = await supabase
        .from("reports")
        .select("id")
        .eq("yourIdentity", existingIdentity)
        .limit(1);

      if (checkError) {
        return NextResponse.json(
          { message: checkError.message },
          { status: 500 }
        );
      }

      if (!existingCode || existingCode.length === 0) {
        return NextResponse.json(
          {
            message:
              "Identity Code not found. Please enter a valid code or a new one.",
          },
          { status: 500 }
        );
      }
    }



    // Insert into Supabase
    const { data, error } = await supabase
      .from("reports")
      .insert([
        {
          school_name: schoolName,

          school_id: schoolId || null,

          teacher_id: teacherId || null,

          teacher_name: teacherName,

          date_of_assignment: date,

          grade_level: gradeLevel,

          classroom_behavior:
            ratings?.classroomBehavior ?? null,

          lesson_preparedness:
            ratings?.lessonPreparedness ?? null,

          staff_friendliness:
            ratings?.staffFriendliness ?? null,

          school_cleanliness:
            ratings?.schoolCleanliness ?? null,

          support_level:
            ratings?.supportLevel ?? null,

          feedback,

          // JSONB column
          tags: selectedTags || [],

          // 1 = Yes
          // 2 = No
          // 3 = Maybe/Not Sure
          return_to_school:
            returnToSchool === "yes"
              ? 1
              : returnToSchool === "no"
              ? 2
              : 3,

          return_to_teacher:
            returnToTeacher === "yes"
              ? 1
              : returnToTeacher === "no"
              ? 2
              : 3,

          school_comment: schoolComment,

          teacher_comment: teacherComment,

          // 1 = Anonymous
          // 2 = Public
          post_as:
            postAs === "anonymous"
              ? 1
              : 2,

          your_name:
            postAs !== "anonymous"
              ? yourName
              : "anonymous",

          school_association: schoolAssociation,

          sentiments,
          yourIdentity: identity
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Server Error:", error);

    return NextResponse.json(
      {
        error: "Insert failed",
      },
      {
        status: 500,
      }
    );
  }
}