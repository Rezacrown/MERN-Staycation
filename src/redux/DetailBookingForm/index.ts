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

      let _bookingStartDate = moment(bookingDateStart).format(
        "DD MMMM YYYY, h:mm:ss a"
      );
      let _bookingEndDate = moment(bookingDateEnd).format(
        "DD MMMM YYYY, h:mm:ss a"
      );

      // check calcutaion duration date if have minus calculation
      let __duration =
        moment(bookingDateEnd).date() - moment(bookingDateStart).date();

      //
      if (String(__duration)[0] === "-") {
        // get full years
        const start = moment(bookingDateStart).format("DD MM YYYY").split(" ");
        const end = moment(bookingDateEnd).format("DD MM YYYY").split(" ");
        // get date
        let startDate = Number(start[0]);
        let endDate = Number(end[0]);
        // get month
        let startMonth = Number(start[1]);
        let endMonth = Number(end[1]);

        // calculate date in month
        let Xstart = 28 - startDate; // deafult for febuari

        if (endMonth == 4 || endMonth == 6 || endMonth == 9 || endMonth == 11) {
          Xstart = 30 - startDate;
        } // for 30 days in month

        if (
          endMonth == 1 ||
          endMonth == 3 ||
          endMonth == 5 ||
          endMonth == 7 ||
          endMonth == 8 ||
          endMonth == 10 ||
          endMonth == 12
        ) {
          Xstart = 31 - startDate;
        } // for 31 days in month

        if (startMonth == 12 && endMonth == 1 && endDate == 1) {
          // _bookingStartDate =
          // _bookingEndDate =
          console.log("data masuk", { _bookingEndDate });
        }

        __duration = Xstart + endDate;
        console.log({ _newDur: __duration });
      }

      // set data
      state.duration = __duration;

      state.price = price * Number(duration);

      state.bookingDateStart = _bookingStartDate;
      state.bookingDateEnd = _bookingEndDate;

      return state;
    },
    resetBookingData: (state) => {
      state = {
        duration: 1,
        price: 0,
        bookingDateStart: moment(new Date()).format("DD MMMM YYYY, h:mm:ss a"),
        bookingDateEnd: moment(getTomorow()).format("DD MMMM YYYY, h:mm:ss a"),
      };
      localStorage.clear();

      return state;
    },
  },
});

export const { handleChangeBooking, resetBookingData } = slice.actions;

export const FormBookingData = slice.reducer;

// types
export interface PayloadStateBookingFormDetail {
  duration: number; // in per night
  price: number; // in us Dollars
  bookingDateStart: Date;
  bookingDateEnd: Date;

  itemId: string;
}

// funct
function getTomorow() {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
}
