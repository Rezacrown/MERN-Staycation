import Brandicon from "@/components/BrandIcon";
import Stepper from "@/components/Stepper";
import Title_checkout from "./title";
import Form_BookingInformation from "./form-bookingInformation";

export default function CheckoutPage() {
  return (
    <div>
      <Brandicon isCenter />
      <Stepper step={[1, 2]} currentStep={1} successStep={2} />
      <Title_checkout type="booking" />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Form_BookingInformation />
          </div>
        </div>
      </div>
    </div>
  );
}
