import { useState } from "react";
import InputNumber from "../InputNumber";
import InputDate from "../InputDate";
import Breadcrumb from "../Breadcrumb";

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
  const [, setDateData] = useState({
    bookingDateStart: new Date(),
    bookingDateEnd: new Date(),
  });



  // for Input Date
  const valDate = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

   const breadcrumbList = [
     { pageTitle: "Home", pageHref: "/" },
     { pageTitle: "House Details", pageHref: "/detail" },
   ];



  return (
    <div className="" >
      <Breadcrumb data={breadcrumbList} />
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
        className="w-25"
      />
    </div>
  );
}
