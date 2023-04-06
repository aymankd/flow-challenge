export const toCompleteFrenchDateformat = (date: Date) =>
  date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
