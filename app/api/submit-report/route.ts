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
    } = body;

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