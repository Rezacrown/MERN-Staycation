import { useState } from "react";
import InputNumber from "../InputNumber";
import InputDate from "../InputDate";

export interface PayloadStateFormDetail {
  name: string;
  duration: number;
  price: number;
  bookingDateStart: Date;
  bookingDateEnd: Date;
}

export default function FormDetail() {
  // state
  const [numberData, setNumberData] = useState(1);
  const [dateData, setDateData] = useState({
    bookingDateStart: new Date(),
    bookingDateEnd: new Date(),
  });



  // for Input Date
  let valDate = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

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
      <InputDate
        placeholder="Pick Date"
        value={valDate}
        setPayload={setDateData}
      />
    </div>
  );
}
