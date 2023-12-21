import { useEffect, useState } from "react";
import "./index.scss";
import moment from "moment";

import {
  // FormBookingData,
  PayloadStateBookingFormDetail,
  handleChangeBooking,
} from "@/redux/DetailBookingForm";

import { useSelector, useDispatch } from "react-redux";

export default function InputNumber({
  prefix,
  suffix,
  min = 1,
  max = 1,
  placeholder,
  className,
}: InputDateProps) {
  //
  const dispatch = useDispatch();

  const BookingPayload = useSelector(
    (state: any) => state.BookingForm
  ) as PayloadStateBookingFormDetail;

  const [displayInput, setDisplayInput] = useState(
    `${prefix}${BookingPayload.duration}${suffix}`
  );

  const changeDisplayInput = (value: number, type: "plus" | "minus") => {
    let valuePure = String(value);

    // set prefix and suffix
    if (prefix) valuePure = valuePure.replace(prefix, "");
    if (suffix) valuePure = valuePure.replace(suffix, "");

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(valuePure);

    if (isNumeric && Number(valuePure) <= max && Number(valuePure) >= min) {
      // set display input data to show user
      setDisplayInput(
        `${prefix}${valuePure}${suffix}${Number(valuePure) > 1 ? "s" : ""}`
      );
      // change global value duration and date match type button

      // change value global
      const dateEndString = Number(
        BookingPayload.bookingDateEnd.toString().split(" ")[0]
      );

      switch (type) {
        case "plus":
          dispatch(
            handleChangeBooking({
              ...BookingPayload,
              duration: Number(valuePure),
              bookingDateEnd: moment(
                new Date().setDate(dateEndString + 1)
              ).toDate(),
            })
          );
          break;
        case "minus":
          dispatch(
            handleChangeBooking({
              ...BookingPayload,
              duration: Number(valuePure),
              bookingDateEnd: moment(
                new Date().setDate(dateEndString - 1)
              ).toDate(),
            })
          );
      }

      // dispatch(
      //   handleChangeBooking({
      //     ...BookingPayload,
      //     duration: Number(valuePure),
      //     // bookingDateEnd: new Date(BookingPayload.bookingDateEnd.getDate() + 1),
      //   })
      // );
    }
  };

  //
  const handlePlus = (value: number) => {
    if (value < max) {
      // set display
      changeDisplayInput(value + 1, "plus");
    }
  };
  const handleMinus = (value: number) => {
    if (value > min) {
      // const start = moment(BookingPayload.bookingDateStart)
      //   .format("DD MM YYYY")
      //   .split(" ");
      // const end = moment(BookingPayload.bookingDateEnd)
      //   .format("DD MM YYYY")
      //   .split(" ");

      // console.log({ startMinus: start });
      // console.log({ endMinus: end });

      // if (
      //   end[0] == "01" &&
      //   end[1] == "01" &&
      //   start[1] == "12" &&
      //   31 - Number(start[0]) > Number(end[0])
      // ) {
      //   // changeDisplayInput(value - 1, "minus");
      //   changeDisplayInput(31 - Number(start[0]) - 1, "minus");
      //   console.log("sudah masuk includes end nya");
      // } else {
      changeDisplayInput(value - 1, "minus");
      // }
    }
  };

  //
  useEffect(() => {
    setDisplayInput(
      `${prefix}${BookingPayload.duration}${suffix}${
        Number(BookingPayload.duration) > 1 ? "s" : ""
      }`
    );
  }, [BookingPayload.duration, prefix, suffix]);

  return (
    <div className={["input-number mb-3", className].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            className="input-group-text minus"
            onClick={() => handleMinus(BookingPayload.duration)}
          >
            -
          </span>
        </div>

        <input
          type="text"
          readOnly
          placeholder={placeholder}
          pattern="[0-9]*"
          min={min}
          max={max}
          value={String(displayInput)}
          // value={BookingPayload.duration}
          className="form-control"
        />

        <div className="input-group-append">
          <span
            className="input-group-text plus"
            onClick={() => handlePlus(BookingPayload.duration)}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
}

interface InputDateProps {
  min: number;
  max: number;
  placeholder: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  handleChangeValue: (e?: any) => void;
}
