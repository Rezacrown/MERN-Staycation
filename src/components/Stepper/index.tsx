import "./index.scss";

export default function Stepper({
  step,
  currentStep,
  successStep,
}: StepperProps) {
  return (
    <>
      <div className="stepper mt-5">
        {/* all step loop */}

        {step.length &&
          step.map((_, index) => {
            // success step
            if (
              successStep === index + 1 &&
              successStep !== currentStep &&
              successStep <= step.length
            ) {
              return (
                <>
                  <div
                    className={`${
                      currentStep === index + 1 && "stepper-current-border"
                    }`}
                  >
                    <span
                      className={`stepper-content stepper-success  ${
                        currentStep === index + 1 && "stepper-active"
                      } `}
                    >
                      {index + 1}
                    </span>
                  </div>
                  {step.length - 1 !== index && (
                    <div className="stepper-line"></div>
                  )}
                </>
              );
            }
            // gray step
            else {
              return (
                <>
                  <div
                    className={`${
                      currentStep === index + 1 && "stepper-current-border"
                    }`}
                  >
                    <span
                      className={`stepper-content  ${
                        currentStep === index + 1 && "stepper-active"
                      } `}
                    >
                      {index + 1}
                    </span>
                  </div>
                  {step.length - 1 !== index && (
                    <div className="stepper-line"></div>
                  )}
                </>
              );
            }
          })}
      </div>
    </>
  );
}

interface StepperProps {
  step: number[];
  currentStep: number;
  successStep: number;
}
