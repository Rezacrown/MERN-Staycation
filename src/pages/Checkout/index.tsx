import Brandicon from "@/components/BrandIcon";
import Stepper from "@/components/Stepper";
import Title_checkout from "./title";
import { Fade } from "react-awesome-reveal";

import Form_BookingInformation from "./form-bookingInformation";
import Form_BookingPayment from "./form-bookingPayment";
import Properties_Information from "./properties-information";
import Payment_Information from "./payment-information";

import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  handleStepOne,
  CheckoutFormData,
  handleStepTwo,
} from "@/redux/CheckoutForm";
import SuccesscheckoutPage from "../Success/checkout";
("../../redux/CheckoutForm/index");

export default function CheckoutPage() {
  const navigate = useNavigate();
  const FormState = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    accountHolder: "",
    bankFrom: "",
    proofPayment: "",
  });

  const dispatch = useDispatch();
  const dataCheckout = useSelector(
    (state: any) => state.CheckoutForm as CheckoutFormData
  );

  const handleSubmit = async () => {
    switch (dataCheckout.currentStepCheckout) {
      case 1:
        dispatch(
          handleStepOne({
            ...dataCheckout,
            firstName: FormState[0].firstName,
            lastName: FormState[0].lastName,
            email: FormState[0].email,
            phone: Number(FormState[0].phone),
          })
        );
        break;
      case 2:
        try {
          dispatch(
            handleStepTwo({
              ...dataCheckout,
              bankFrom: String(FormState[0].bankFrom),
              accountHolder: String(FormState[0].accountHolder),
              proofPayment: String(FormState[0].proofPayment),
            })
          );
          // navigate("/checkout-success");
        } catch (error) {
          console.log(error);
        }
    }
  };

  // check data from localstorage
  useEffect(() => {
    if (!localStorage.getItem("properties-book")) {
      navigate("/");
    }
    window.scroll(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const step: CheckoutFormData = localStorage.getItem("checkout-data-step")
  //     ? JSON.parse(localStorage.getItem("checkout-data-step")!)
  //     : {};

  //   if (step.currentStepCheckout == 2) {
  //     FormState[1]({
  //       ...FormState[0],
  //       //   firstName
  //     });
  //   }
  // }, [dataCheckout, dispatch]);

  // succes page
  if (
    dataCheckout.currentStepCheckout >= 99 &&
    dataCheckout.succesStepCheckout >= 2
  ) {
    //
    return (
      <>
        <Fade triggerOnce direction="down">
          <SuccesscheckoutPage />
        </Fade>
      </>
    );
  }

  return (
    <section>
      <Brandicon isCenter />
      <Stepper
        step={[1, 2]}
        successStep={dataCheckout.succesStepCheckout}
        currentStep={dataCheckout.currentStepCheckout}
      />
      <Title_checkout type="booking" />
      {/* form & info detail section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* side left book information */}
          <Fade className="col-4" triggerOnce direction="left">
            <div className="">
              {/* step 1 */}
              {dataCheckout.currentStepCheckout == 1 && (
                <Properties_Information />
              )}
              {/* step 2 */}
              {dataCheckout.currentStepCheckout == 2 && <Payment_Information />}
            </div>
          </Fade>
          {/*  */}
          <div className="col-1" style={{ marginLeft: "120px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="434"
              viewBox="0 0 2 434"
              fill="none"
            >
              <path d="M1 1V433" stroke="#E5E5E5" stroke-linecap="round" />
            </svg>
          </div>
          {/* side right | form input */}
          <Fade className="col-4" direction="right" triggerOnce>
            <div className="">
              {/* step 1 */}
              {dataCheckout.currentStepCheckout === 1 && (
                <Form_BookingInformation
                  // FormState={FormState}
                  CheckoutInfo={FormState[0]}
                  setCheckoutInfo={FormState[1]}
                />
              )}
              {/* step 2 */}
              {dataCheckout.currentStepCheckout === 2 && (
                <Form_BookingPayment
                  CheckoutInfo={FormState[0]}
                  setCheckoutInfo={FormState[1]}
                />
              )}
            </div>
          </Fade>
        </div>
      </div>
      {/* button section */}
      <div className="mt-5 text-center mb-5" style={{ marginLeft: 60 }}>
        {/* continue btn */}
        {dataCheckout.currentStepCheckout == 1 &&
          dataCheckout.succesStepCheckout == 0 && (
            <div
              className={
                FormState[0].firstName.length >= 3 &&
                FormState[0].lastName.length >= 3 &&
                FormState[0].email.length &&
                FormState[0].phone.length
                  ? ""
                  : "d-none"
              }
            >
              <Button
                isPrimary
                isBlock
                style={{ width: "260px", height: "40px" }}
                handleClick={handleSubmit}
              >
                Continue To Book
              </Button>
            </div>
          )}
        {dataCheckout.currentStepCheckout == 2 &&
          dataCheckout.succesStepCheckout == 1 && (
            <div
              className={
                FormState[0].proofPayment &&
                FormState[0].bankFrom &&
                FormState[0].accountHolder
                  ? ""
                  : "d-none"
              }
            >
              <Button
                isPrimary
                isBlock
                style={{ width: "260px", height: "40px" }}
                handleClick={handleSubmit}
              >
                Continue To Book
              </Button>
            </div>
          )}

        {/* cancel btn */}
        <div>
          <Button
            className="text-secondary mt-2"
            style={{
              width: "260px",
              height: "40px",
              backgroundColor: "#F5F6F8",
            }}
            isBlock
          >
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
}
