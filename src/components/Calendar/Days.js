import _ from "lodash";

const Days = ({ calendarDays, holidays }) => {
  const checkHoliday = (day) => {
    return !_.isUndefined(_.find(holidays, (holiday) => day === holiday.day));
  };

  return _.map(calendarDays, (week, index) => {
    return (
      <tr key={index}>
        {_.map(week, (day, index) => {
          return (
            <td key={index} className={checkHoliday(day) ? "holiday" : ""}>
              {day !== 0 && day}
            </td>
          );
        })}
      </tr>
    );
  });
};

export default Days;
