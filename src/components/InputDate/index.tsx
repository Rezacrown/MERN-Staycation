import { useState } from "react";
import { DateRange, RangeFocus } from "react-date-range";
import formatDate from "@/utils/formatDate";


// style
import "./index.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import IconCalendar from "../../assets/icons/ic_calendar.svg";

// interface
interface InputDateProps {
  value: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
  placeholder: string;
  className?: string;
  setPayload: (e: { bookingDateStart: Date; bookingDateEnd: Date }) => void;
}

export default function InputDate({
  className,
  //   name,
  placeholder,
  value,
  setPayload,
}: InputDateProps) {
  // state
  const [isShow, setIsShow] = useState(false);
  const [displayDate, setDisplayDate] = useState("");

  const datePickerChange = (value: any) => {
    //   set data for payload
    setPayload({
      bookingDateStart: value.selection.startDate,
      bookingDateEnd: value.selection.endDate,
    });

    //   set display date with date formated
    setDisplayDate(
      `${
        value.selection.startDate ? formatDate(value.selection.startDate) : ""
      }${
        value.selection.endDate
          ? " - " + formatDate(value.selection.endDate)
          : ""
      }`
    );
  };

  const check = (focus: RangeFocus) => {
    focus.indexOf(1) < 0 && setIsShow(false);
  };

  return (
    <div ref={null} className={["input-date mb-3", className].join(" ")}>
      <div className="input-group">
        {/* icon */}
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={IconCalendar} alt="icon calendar" />
          </span>
        </div>

        {/* input */}
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShow(!isShow)}
        />

        {/* date picker */}
        {isShow && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
