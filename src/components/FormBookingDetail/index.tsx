// import { useState } from "react";
import InputNumber from "../InputNumber";
import InputDate from "../InputDate";
import Button from "../Button";
import "./index.scss";
// import { useNavigate } from "react-router-dom";

// redux
import {
  handleChangeBooking,
  // PayloadStateBookingFormDetail as PayloadForm,
} from "@/redux/DetailBookingForm";
// import { useDispatch, useSelector } from "react-redux";

export default function FormDetail({ price }: { price: number }) {
  // const dispatch = useDispatch();
  // const payload = useSelector((state: any) => state.BookingForm as PayloadForm);

  // for default values keys Input Date
  const valDate = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <div className="booking-form mt-3">
      {/* title */}
      <div className="title-booking">
        <h5>Start Booking</h5>
        <h2>
          <span>$280</span> per night{" "}
        </h2>
      </div>
      {/* number input */}
      <div className="mt-3">
        <h5 className="mb-3" style={{ color: "#152C5B" }}>
          How long you will stay?
        </h5>
        <InputNumber
          max={10}
          min={1}
          prefix=""
          suffix={` Night`}
          placeholder="select Duration"
          handleChangeValue={handleChangeBooking}
          className=""
        />
      </div>
      {/* date picker */}
      <div className="mt-3">
        <h5 className="my-3" style={{ color: "#152C5B" }}>
          Pick a Date
        </h5>
        <InputDate
          placeholder="Pick Date"
          value={valDate}
          // setPayload={handleChangeBooking}
          className=""
        />
      </div>
      {/* total payment */}
      <div className="total-booking">
        <p>
          You will pay <span>$ {price}</span> USD per <span>2 nights</span>
        </p>
      </div>
      <Button
        // handleClick={handleSetData}
        isPrimary
        isBlock
        hasShandow
        className="w-100"
      >
        Continue to Book
      </Button>
    </div>
  );
}

export interface PayloadStateBookingFormDetail {
  // name: string;
  duration: string; // in per night
  price: string; // in us Dollars
  bookingDateStart: string;
  bookingDateEnd: string;
}