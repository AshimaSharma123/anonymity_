// import { openai } from "@/lib/openai";

export const scrollToError = (errors: Record<string, string>) => {
  const firstErrorKey = Object.keys(errors)[0];
  if (!firstErrorKey) return;

  const el = document.getElementById(firstErrorKey);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      el.focus();
    }, 300);
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const AvgRatings = (val: any) => {
  type Ratings = {
    classroom_behavior: number;
    lesson_preparedness: number;
    school_cleanliness: number;
    staff_friendliness: number;
    support_level: number;
  };

  const ratings: Ratings = val;

  const values = Object.values(ratings);

  const total = values.reduce(
    (sum: number, value: number) => sum + value,
    0
  );


  let average = total / values.length;

  // If greater than 0 but less than 1
  if (average > 0 && average < 1) {
    average = 1;
  }
  return average.toFixed(1); // 0.6

}


export type ObjectType = {
  [key: string]: any;
};

// export async function generateAISummary(
//   school: any
// ) {
//   const prompt = `
// Generate a short natural sounding school summary
// for guest teachers.

// Keep it under 35 words.

// School analytics:
// - Overall rating: ${school.avg_rating}/5
// - Classroom management: ${school.avg_classroom_behavior}/5
// - Staff friendliness: ${school.avg_staff_friendliness}/5
// - Lesson preparedness: ${school.avg_lesson_preparedness}/5
// - Support level: ${school.avg_support_level}/5
// - Cleanliness: ${school.avg_school_cleanliness}/5
// - Reviews: ${school.total_reports}

// Requirements:
// - Sound human and trustworthy
// - Mention strengths and weaknesses naturally
// - Avoid robotic wording
// - No bullet points
// - No quotes
// `;

//   const response =
//     await openai.chat.completions.create({
//       model: "gpt-4.1-mini",

//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],

//       temperature: 0.8,
//     });

//   return response.choices[0].message.content;
// }