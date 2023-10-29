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

  const [number, setNumber] = useState(1)
  

  useEffect(() => {
    
  }, [])

  return (
    <div>
      <InputNumber
        value={number}
        max={5}
        min={1}
        name="input"
        prefix=""
        suffix=" night"
        placeholder="select Duration"
        handleChangeValue={setNumber}
      />
      {/* <Inputdate name="" placeholder="select" value={''} /> */}
    </div>
  );
}
