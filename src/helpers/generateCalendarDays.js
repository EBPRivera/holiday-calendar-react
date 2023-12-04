import _ from "lodash";

const DAYS_IN_WEEK = 7;

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const generateCalendarWeekDays2DArray = (date) => {
  const firstDayOfMonth = new Date(date);
  firstDayOfMonth.setDate(1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth());

  const daysOfMonth = _.range(1, daysInMonth + 1);
  const startOfCalendar = _.map(_.range(weekdayOfFirstDay), () => 0);

  const finalDaysOfMonth = [...startOfCalendar, ...daysOfMonth];
  return _.chunk(finalDaysOfMonth, DAYS_IN_WEEK);
};

export default generateCalendarWeekDays2DArray;
