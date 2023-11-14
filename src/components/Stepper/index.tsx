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
            if (successStep <= step.length || successStep >= 99) {
              //
              if (successStep <= step.length && successStep >= _) {
                return (
                  <>
                    <div
                      className={`${
                        currentStep === index + 1 &&
                        successStep <= 99 &&
                        "stepper-current-border"
                      }`}
                    >
                      <span
                        className={`stepper-content stepper-success  
                        ${
                          currentStep === index + 1 &&
                          successStep !== currentStep &&
                          "stepper-active"
                        } `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="20"
                          viewBox="0 0 30 20"
                          fill="none"
                        >
                          <path
                            d="M2.62961 7.52668L7.82252 16.2306C8.46805 17.3126 9.94113 17.5354 10.8778 16.6927L27.1842 2.02177"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                    {step.length - 1 !== index && (
                      <div className="stepper-line"></div>
                    )}
                  </>
                );
              }
              // gray step nested
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
