import Brandicon from "@/components/BrandIcon";
import Button from "@/components/Button";
import Stepper from "@/components/Stepper";

import { Fade } from "react-awesome-reveal";

export default function SuccesscheckoutPage() {
  return (
    <Fade triggerOnce direction="down">
      <div className="">
        <Brandicon isCenter />
        <div className=" text-center">
          <Stepper currentStep={99} step={[1, 2]} successStep={2} />
          <h3 className="fw-bold mt-5" style={{ color: "#152C5B" }}>
            Yay! Completed
          </h3>
          <img
            src="/image/ilustrations/succes-checkout-ilustration.jpg"
            alt="success-checkout"
            width={360}
            height={330}
            className="mt-3"
          />
          <p
            className="fw-light mx-auto"
            style={{ color: "#B0B0B0", width: "390px" }}
          >
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
        <div className="text-center my-5">
          <Button isPrimary hasShandow isLarge isBlock type="link" href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </Fade>
  );
}
