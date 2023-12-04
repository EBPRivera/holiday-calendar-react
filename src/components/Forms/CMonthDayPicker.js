import classNames from "classnames";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CMonthDayPicker = ({ className, selected, onSelect }) => {
  const formatCaption = (month, options) => {
    return format(month, "LLLL", { locale: options?.locale });
  };

  return (
    <DayPicker
      className={classNames(className)}
      mode="single"
      selected={selected}
      onSelect={onSelect}
      formatters={{ formatCaption }}
    />
  );
};

export default CMonthDayPicker;
