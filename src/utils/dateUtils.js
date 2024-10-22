export const parseDate = (dateString) => {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? new Date(0) : date;
};
