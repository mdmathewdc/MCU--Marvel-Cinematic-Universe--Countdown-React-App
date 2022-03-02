export const formatDate = (date) => {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var t = new Date(date);
  return t.getDate() + "-" + monthNames[t.getMonth()] + "-" + t.getFullYear();
};