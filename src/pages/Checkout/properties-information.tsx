import { useEffect, useState } from "react";

export default function Properties_Information() {
  const [information, setInformation] = useState({
    name: "",
    country: "",
    city: "",
    duration: "",
    price: "",
  });

  useEffect(() => {
    const propertiesInformation: PropertiesInformation_localStorage =
      localStorage.getItem("properties-book")
        ? JSON.parse(localStorage.getItem("properties-book")!)
        : {};
    // setdata for show users
    setInformation({
      ...information,
      name: propertiesInformation.name,
      country: propertiesInformation.country,
      city: propertiesInformation.city,
      duration: String(propertiesInformation.duration),
      price: String(propertiesInformation.price),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-id="properties-information" className="">
      <img src="/image/img-categories-1.jpg" width={420} height={270} alt="" />
      <div className="mt-3 d-flex justify-content-between">
        <div className="">
          <h4 style={{ fontSize: 20, color: "#152C5B" }}>{information.name}</h4>
          <p
            style={{ color: "#B0B0B0", fontSize: "15px" }}
            className="fw-light"
          >
            {information.city}, {information.country}
          </p>
        </div>
        <div className="">
          <h5 style={{ color: "#152C5B", fontSize: "16px" }}>
            ${information.price} USD{" "}
            <span
              style={{
                color: "#B0B0B0",
                lineHeight: "170%",
                fontWeight: 300,
              }}
            >
              per
            </span>{" "}
            {information.duration} nights
          </h5>
        </div>
      </div>
    </div>
  );
}

interface PropertiesInformation_localStorage {
  name: string;
  country: string;
  city: string;
  price: number;
  duration: number;
}
