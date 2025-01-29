export const formattedDate = (date: string) => {
  const formatted = new Date(date);

  const result = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(formatted);

  return result;
};
