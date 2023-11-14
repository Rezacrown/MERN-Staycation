import Brandicon from "@/components/BrandIcon";
import Stepper from "@/components/Stepper";
import Title_checkout from "./title";
import Form_BookingInformation from "./form-bookingInformation";
import Button from "@/components/Button";
import { useState } from "react";

export default function CheckoutPage() {
  const FormState = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  // const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <Brandicon isCenter />
      <Stepper step={[1, 2]} successStep={2} currentStep={2} />
      <Title_checkout type="booking" />
      {/* form & info detail section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/*  */}
          <div className="col-4">
            <div className="">
              <img
                src="/image/img-categories-1.jpg"
                width={420}
                height={270}
                alt=""
              />
              <div className="mt-3 d-flex justify-content-between">
                <div className="">
                  <h4 style={{ fontSize: 20, color: "#152C5B" }}>Podo Wae</h4>
                  <p
                    style={{ color: "#B0B0B0", fontSize: "15px" }}
                    className="fw-light"
                  >
                    Madiun, Indonesia
                  </p>
                </div>
                <div className="">
                  <h5 style={{ color: "#152C5B", fontSize: "16px" }}>
                    $480 USD{" "}
                    <span
                      style={{
                        color: "#B0B0B0",
                        lineHeight: "170%",
                        fontWeight: 300,
                      }}
                    >
                      per
                    </span>{" "}
                    2 nights
                  </h5>
                </div>
              </div>
            </div>
          </div>
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
          {/*  */}
          <div className="col-4">
            <Form_BookingInformation FormState={FormState} />
          </div>
        </div>
      </div>
      {/* button section */}
      <div className="mt-5 text-center mb-5" style={{ marginLeft: 60 }}>
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
          <Button isPrimary isBlock style={{ width: "260px", height: "40px" }}>
            Continue To Book
          </Button>
        </div>
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
    </div>
  );
}
