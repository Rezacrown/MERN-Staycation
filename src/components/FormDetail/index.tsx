import { useEffect, useState } from "react";
import InputNumber from "../InputNumber";

export interface PayloadStateFormDetail {
  name: string;
  duration: number;
  price: number;
  bookingDateStart: Date;
  bookingDateEnd: Date;
}

export default function FormDetail() {
  // const [payload, setPayload] = useState<PayloadStateFormDetail>({
  //   name: "",
  //   price: props.price,
  //   duration: 1,
  //   bookingDateStart: new Date(),
  //   bookingDateEnd: new Date(),
  // });

  const [numberData, setNumberData] = useState(1);

  useEffect(() => {}, []);

  return (
    <div>
      <InputNumber
        value={numberData}
        max={3}
        min={1}
        prefix=""
        suffix={` Night`}
        placeholder="select Duration"
        handleChangeValue={setNumberData}
        className="w-25"
      />
    </div>
  );
}
