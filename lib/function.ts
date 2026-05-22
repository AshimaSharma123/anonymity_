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