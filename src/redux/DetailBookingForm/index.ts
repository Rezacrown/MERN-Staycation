// import formatDate from "@/utils/formatDate";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const slice = createSlice({
  name: "Booking detail",
  initialState: {
    duration: 1,
    price: 0,
    bookingDateStart: moment(new Date()).format("DD MMMM YYYY, h:mm:ss a"),
    bookingDateEnd: moment(getTomorow()).format("DD MMMM YYYY, h:mm:ss a"),
  },
  reducers: {
    handleChangeBooking: (
      state,
      { payload }: { payload: PayloadStateBookingFormDetail }
    ) => {
      const { duration, price, bookingDateStart, bookingDateEnd } = payload;

      state.price = price * Number(duration);

      // state.duration = duration;
      // state.duration = bookingDateEnd.getDate() - bookingDateStart.getDate() + 1; // +1 karena dihitung per night
      state.duration =
        moment(bookingDateEnd).date() - moment(bookingDateStart).date();

      // console.log(bookingDateStart);
      // console.log(bookingDateEnd);
      // state.bookingDateStart = formatDate(bookingDateStart);
      // state.bookingDateEnd = formatDate(bookingDateEnd);
      (state.bookingDateStart = moment(bookingDateStart).format(
        "DD MMMM YYYY, h:mm:ss a"
      )),
        (state.bookingDateEnd = moment(bookingDateEnd).format(
          "DD MMMM YYYY, h:mm:ss a"
        ));

      return state;
    },
  },
});

export const { handleChangeBooking } = slice.actions;

export const FormBookingData = slice.reducer;

// types
export interface PayloadStateBookingFormDetail {
  duration: number; // in per night
  price: number; // in us Dollars
  bookingDateStart: Date;
  bookingDateEnd: Date;
}

// funct
function getTomorow() {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
}
