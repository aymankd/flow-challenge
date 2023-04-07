export const toCompleteFrenchDateformat = (date: Date) =>
  date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const toFrenchDateformat = (date: Date) =>
  date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
