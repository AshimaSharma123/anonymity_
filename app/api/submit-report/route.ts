import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      schoolName,
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
      postAs, yourName, schoolAssociation
    } = body;
    
    const db = getConnection();
    const query = `
      INSERT INTO reports (
        school_name,
        teacher_name,
        date_of_assignment,
        grade_level,
        classroom_behavior,
        lesson_preparedness,
        staff_friendliness,
        school_cleanliness,
        support_level,
        feedback,
        tags,
        return_to_school,
        return_to_teacher,
        school_comment,
        teacher_comment,
        post_as,
        your_name,
        school_association
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(query, [
      schoolName,
      teacherName,
      date,
      gradeLevel,

      ratings?.classroomBehavior ?? null,
      ratings?.lessonPreparedness ?? null,
      ratings?.staffFriendliness ?? null,
      ratings?.schoolCleanliness ?? null,
      ratings?.supportLevel ?? null,

      feedback,
      JSON.stringify(selectedTags),

      returnToSchool === "yes" ? 1 : returnToSchool === "no" ? 2 : 3,
      returnToTeacher === "yes" ? 1 : returnToSchool === "no" ? 2 : 3,

      schoolComment,
      teacherComment,

      postAs === "anonymous" ? 1 : 2,
      postAs != "anonymous" ? yourName : "",
      schoolAssociation
    ]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json(
      { error: "Insert failed" },
      { status: 500 }
    );
  }
}