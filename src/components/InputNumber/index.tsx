import { useState } from "react";
import "./index.scss";

interface InputDateProps {
  name: string;
  value: number;
  min: number;
  max: number;
  placeholder: string;
  prefix?: string;
  suffix?: string;
  handleChangeValue: (e?: any) => void;
}



export default function InputNumber({
  name,
  value,
  prefix,
  suffix,
  min = 1,
  max = 1,
  placeholder,
  handleChangeValue,
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
        `${prefix}${valuePure}${suffix}`
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
          name: name,
        },
      });
    }
  };
  const handleMinus = (value: number) => {
    if (value > min) {
      changeDisplayInput({
        target: {
          value: value - 1,
          name: name,
        },
      });
    }
  };

  return (
    <div className="d-flex justify-content-end mx-5 mt-3">
      <div
        className="btn btn-danger"
        style={{ width: 40, height: 40 }}
        onClick={() => handleMinus(value)}
      >
        -
      </div>
      {/*  */}

      <input
        type="text"
        placeholder={placeholder}
        pattern="[0-9]*"
        min={min}
        max={max}
        value={displayInput}
        className="form-control"
      />

      {/*  */}
      <div
        className="btn btn-success text-center"
        style={{ width: 40, height: 40 }}
        onClick={() => handlePlus(value)}
      >
        +
      </div>
    </div>
  );
}
