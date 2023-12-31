import { createSlice } from "@reduxjs/toolkit";

import { PayloadStateBookingFormDetail } from "../DetailBookingForm";
// import { postData } from "@/utils/fetch";

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
    proofPayment: "" as string | File,

    // from localstorage
    itemId: "",
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
      state.itemId = data.itemId;

      // set for next step
      state.currentStepCheckout = 2;
      state.succesStepCheckout = 1;

      // set data from payload step 1
      localStorage.setItem(
        "checkout-data-step",
        JSON.stringify({
          ...state,
          firstName: payload.firstName,
          lastName: payload.lastName,
          emailAddress: payload.email,
          phoneNumber: String(payload.phone),
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

      // set state
      state.accountHolder = payload.accountHolder;
      state.bankFrom = payload.bankFrom;
      state.proofPayment = payload.proofPayment;

      console.log({ proofPayment: payload.proofPayment });

      // set finish step
      state.currentStepCheckout = 99;
      state.succesStepCheckout = 2;

      localStorage.setItem(
        "checkout-data-step",
        JSON.stringify({
          ...state,
          ...data,
          currentStepCheckout: 99,
          succesStepCheckout: 2,
          accountHolder: payload.accountHolder,
          bankFrom: payload.bankFrom,
          proofPayment: payload.proofPayment,
        })
      );

      return state;
    },

    getDataForPostCheckout: (state) => {
      return state;
    },
  },

  // extraReducers({ addCase }) {
  //   const postCheckout = async () => {
  //     return "";
  //   };
  // },
});

export const { handleStepOne, handleStepTwo, getDataForPostCheckout } =
  slice.actions;

export const CheckoutForm = slice.reducer;

//
export type CheckoutFormProps_stepOne = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
};

export type CheckoutFormProps_stepTwo = {
  accountHolder: string;
  bankFrom: string;
  proofPayment: string | File;
};

export interface CheckoutFormData
  extends CheckoutFormProps_stepOne,
    CheckoutFormProps_stepTwo {
  currentStepCheckout: 1 | 2 | 99;
  succesStepCheckout: 0 | 1 | 2 | 99;
  duration: string;
  price: string;
  bookingDateStart: string;
  bookingDateEnd: string;
  itemId: string;

  imageUrl?: string;
}
