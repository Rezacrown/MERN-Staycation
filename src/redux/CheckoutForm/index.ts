import { createSlice } from "@reduxjs/toolkit";

import { PayloadStateBookingFormDetail } from "../DetailBookingForm";

const slice = createSlice({
  name: "checkoutForm",
  initialState: {
    // step 1
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",

    // step 2
    accountHolder: "",
    bankFrom: "",
    proofPayment: "",

    // from localstorage
    duration: "",
    price: "",
    bookingDateStart: "",
    bookingDateEnd: "",

    currentStepCheckout: 1 as 1 | 2 | 99,
    succesStepCheckout: 0 as 0 | 1 | 2 | 99,
  },
  reducers: {
    handleStepOne: (
      state,
      { payload }: { payload: CheckoutFormProps_stepOne }
    ) => {
      //
      const data: PayloadStateBookingFormDetail = localStorage.getItem(
        "properties-book"
      )
        ? JSON.parse(localStorage.getItem("properties-book")!)
        : {};

      // check data localstorage is valid
      if (Object.keys(data).length < 4 || Object.values(data).length < 4) {
        throw new Error("properties data not found");
      }

      // set data properties from local storage
      state.duration = String(data.duration);
      state.price = String(data.price);
      state.bookingDateStart = String(data.bookingDateStart);
      state.bookingDateEnd = String(data.bookingDateEnd);

      // set for next step
      state.currentStepCheckout = 2;
      state.succesStepCheckout = 1;

      // set data from payload step 1
      localStorage.setItem(
        "checkout-data-step",
        JSON.stringify({
          ...state,
          firstName:
            payload.firstName.length > 2 ? String(payload.firstName) : "",
          lastName: payload.lastName.length > 2 ? String(payload.lastName) : "",
          emailAddress: payload.email ? String(payload.email) : "",
          phoneNumber:
            String(payload.phone).length >= 9 &&
            String(payload.phone).length <= 16
              ? String(payload.phone)
              : "",
        })
      );

      return state;
    },
    handleStepTwo: (
      state,
      { payload }: { payload: CheckoutFormProps_stepTwo }
    ) => {
      // get data from previus steps
      const data: CheckoutFormProps_stepOne = localStorage.getItem(
        "checkout-data-step"
      )
        ? JSON.parse(localStorage.getItem("checkout-data-step")!)
        : {};

      // check data localstorage is valid
      if (
        Object.keys(data).length < 4 ||
        Object.values(data).length < 4 ||
        Object.values(data).includes(null || "")
      ) {
        throw new Error("properties data not found");
      }

      // check previus step data
      Object.values(data).forEach((val) => {
        if (val == "") throw new Error("some data missing");
      });

      // set state
      state.accountHolder = payload.accountHolder;
      state.bankFrom = payload.bankFrom;
      state.proofPayment = payload.proofPayment;

      // set finish step
      state.currentStepCheckout = 99;
      state.succesStepCheckout = 2;

      localStorage.setItem(
        "checkout-data-step",
        JSON.stringify({
          ...state,
        })
      );

      return state;
    },
  },
});

export const { handleStepOne, handleStepTwo } = slice.actions;

export const CheckoutForm = slice.reducer;

//
interface CheckoutFormProps_stepOne {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}
interface CheckoutFormProps_stepTwo {
  accountHolder: string;
  bankFrom: string;
  proofPayment: string;
}

export interface CheckoutFormData
  extends CheckoutFormProps_stepOne,
    CheckoutFormProps_stepTwo {
  currentStepCheckout: 1 | 2 | 99;
  succesStepCheckout: 0 | 1 | 2 | 99;
  duration: string;
  price: string;
  bookingDateStart: string;
  bookingDateEnd: string;
}
