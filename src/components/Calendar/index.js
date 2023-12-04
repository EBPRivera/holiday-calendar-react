import _ from "lodash";
import { Card, Table } from "react-bootstrap";

import Days from "./Days";

const MONTHS = [
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
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ date = Date.now(), calendarDays, holidays }) => {
  const filteredHolidays = () => {
    const filteredData = _.filter(holidays, ({ month, year }) => {
      return (
        month === date.getMonth() + 1 &&
        (year === date.getFullYear() || _.isNull(year))
      );
    });

    return filteredData;
  };

  const renderWeekdays = () => {
    return (
      <thead>
        <tr>
          {_.map(WEEKDAYS, (weekday, index) => {
            return <th key={index}>{weekday}</th>;
          })}
        </tr>
      </thead>
    );
  };

  return (
    <Card className="calendar">
      <Card.Body className="p-0">
        <Card.Title className="p-3 m-0">
          <h3>
            {MONTHS[date.getMonth()]} {date.getFullYear()}
          </h3>
        </Card.Title>
        <div className="calendar-body">
          <Table bordered className="m-0">
            {renderWeekdays()}
            <tbody className="calendar-table-body">
              <Days calendarDays={calendarDays} holidays={filteredHolidays()} />
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Calendar;
