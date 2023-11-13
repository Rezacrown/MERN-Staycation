import { useEffect, useState } from "react";
import { DateRange, RangeFocus, RangeKeyDict } from "react-date-range";
import formatDate from "@/utils/formatDate";

// style
import "./index.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import IconCalendar from "../../assets/icons/ic_calendar.svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeBooking,
  // FormBookingData,
  PayloadStateBookingFormDetail,
} from "@/redux/DetailBookingForm";
import moment from "moment";

//
export default function InputDate({
  //   name,
  className,
  placeholder,
  value,
}: // setPayload,
InputDateProps) {
  const dispatch = useDispatch();
  const BookingPayload = useSelector(
    (state: any) => state.BookingForm
  ) as PayloadStateBookingFormDetail;

  // state
  const [isShow, setIsShow] = useState(false);
  const [displayDate, setDisplayDate] = useState(
    `${
      BookingPayload.bookingDateStart
        ? formatDate(moment(new Date().setDate(new Date().getDate())).toDate())
        : ""
    }${
      BookingPayload.bookingDateEnd
        ? " - " +
          formatDate(
            moment(new Date().setDate(new Date().getDate() + 1)).toDate()
          )
        : ""
    }` ?? ""
  );

  const datePickerChange = (value: RangeKeyDict) => {
    // set value of global state
    dispatch(
      handleChangeBooking({
        ...BookingPayload,
        bookingDateStart: value.selection.startDate!,
        bookingDateEnd: value.selection.endDate!,
        duration:
          value.selection.endDate!.getDate()! -
          value.selection.startDate!.getDate() +
          1,
      })
    );

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

  useEffect(() => {
    setDisplayDate(
      `${
        BookingPayload.bookingDateStart
          ? formatDate(BookingPayload.bookingDateStart)
          : ""
      }${
        BookingPayload.bookingDateEnd
          ? " - " + formatDate(BookingPayload.bookingDateEnd)
          : ""
      }`
    );
  }, [BookingPayload.bookingDateStart, BookingPayload.bookingDateEnd]);

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
              onChange={(e: RangeKeyDict) => datePickerChange(e)}
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

// interface
interface InputDateProps {
  value: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
  placeholder: string;
  className?: string;
  // setPayload: (e: { bookingDateStart: Date; bookingDateEnd: Date }) => void;
  // setPayload: (e?: PayloadStateBookingFormDetail) => void;
}
