import { useState } from "react";
import "./index.scss";

interface InputDateProps {
  value: number;
  min: number;
  max: number;
  placeholder: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  handleChangeValue: (e?: any) => void;
}

export default function InputNumber({
  value,
  prefix,
  suffix,
  min = 1,
  max = 1,
  placeholder,
  handleChangeValue,
  className,
}: InputDateProps): JSX.Element {
  const [displayInput, setDisplayInput] = useState(
    `${prefix}${value}${suffix}`
  );

  //
  const changeDisplayInput = (e?: any) => {
    let valuePure = String(e.target.value);
    if (prefix) valuePure = valuePure.replace(prefix, "");
    if (suffix) valuePure = valuePure.replace(suffix, "");

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(valuePure);

    if (isNumeric && Number(valuePure) <= max && Number(valuePure) >= min) {
      setDisplayInput(
        `${prefix}${valuePure}${suffix}${Number(valuePure) > 1 ? "s" : ""}`
      );
      handleChangeValue(Number(valuePure));
    }
  };

  //
  const handlePlus = (value: number) => {
    if (value < max) {
      changeDisplayInput({
        target: {
          value: value + 1,
        },
      });
    }
  };
  const handleMinus = (value: number) => {
    if (value > min) {
      changeDisplayInput({
        target: {
          value: value - 1,
        },
      });
    }
  };

  return (

    <div className={["input-number mb-3", className].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            className="input-group-text minus"
            onClick={() => handleMinus(value)}
          >
            -
          </span>
        </div>

        <input
          type="text"
          placeholder={placeholder}
          pattern="[0-9]*"
          min={min}
          max={max}
          value={String(displayInput)}
          className="form-control"
        />

        <div className="input-group-append">
          <span
            className="input-group-text plus"
            onClick={() => handlePlus(value)}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
}
