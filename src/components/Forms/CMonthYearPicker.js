import classNames from "classnames";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CMonthYearPicker = ({ className, selected, onChange }) => {
  const handleChangeMonth = (date) => {
    onChange(date);
  };

  return (
    <DayPicker
      className={classNames(className, "month-year-picker")}
      mode="single"
      selected={selected}
      onMonthChange={handleChangeMonth}
    />
  );
};

export default CMonthYearPicker;
