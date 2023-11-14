import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "checkoutForm",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    form_1_Ready: false,
  },
  reducers: {
    formReady: (state, { payload }: { payload: CheckoutFormProps }) => {
      let _temp = 0;

      //   check for form_1_Ready
      payload.firstName.length > 3 ? (_temp += _temp) : _temp;
      payload.lastName.length >= 0 ? (_temp += _temp) : _temp;
      payload.email ? (_temp += _temp) : _temp;
      String(payload.phone).length >= 9 ? (_temp += _temp) : _temp;

      //   set form_1_Ready
      if (_temp > 3) {
        state.form_1_Ready = true;
      }

      //   set state data
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.phone = String(payload.phone);

      return state;
    },
  },
});

export const { formReady } = slice.actions;

export const CheckoutForm = slice.reducer;

//
export interface CheckoutFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  form_1_Ready: boolean;
}
