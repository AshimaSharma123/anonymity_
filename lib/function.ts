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