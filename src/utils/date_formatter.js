function format_date(d) {
  let dt = d.length != 2 ? "0" + d : d;
  return dt;
}
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default (d) => {
  let dt = new Date(d);
  return (
    format_date(String(dt.getDate())) +
    "-" +
    monthNames[dt.getMonth()].substring(0, 3) +
    "-" +
    dt.getFullYear()
  );
};

// console.log(format_dt("2000-1-9"));
