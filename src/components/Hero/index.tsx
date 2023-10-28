import iconCities from "@/assets/icons/ic_cities.svg";
import iconTraveler from "@/assets/icons/ic_traveler.svg";
import iconTreasure from "@/assets/icons/ic_treasure.svg";

// component
import Button from "../Button";
import BannerHero from "./bannner";
import { NumericFormat } from "react-number-format";

import { Fade } from "react-awesome-reveal";

interface HeroProps {
  data: any;
}

export default function Hero({ data }: HeroProps) {
  const handleClick = () => {
    window.scrollTo({
      top: window.screenTop + 150,
      behavior: "smooth",
    });
  };

  return (
    <section className="container pt-4">
      <Fade direction="up" triggerOnce>
        <div className="row align-items-center">
          {/*  */}
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="fw-bold mb-3" style={{ color: "#152C5B" }}>
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-3 fw-light light text-gray-500 w-50"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              isPrimary
              hasShandow
              className="px-5"
              handleClick={handleClick}
            >
              Show Me Now
            </Button>
            <div className="row gap-3" style={{ marginTop: "80px" }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={iconTraveler}
                  alt={`${data.travelers} Travelers`}
                  height={36}
                  width={36}
                />
                <h6 className="mt-3">
                  <NumericFormat
                    value={data.travelers}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                  {"   "}
                  <span className="text-gray-500 font-weight-light ">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={iconTreasure}
                  alt={`${data.treasures} Treasures`}
                  height={36}
                  width={36}
                />
                <h6 className="mt-3">
                  <NumericFormat
                    value={data.treasures}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                  />{" "}
                  {"  "}
                  <span className="text-gray-500 font-weight-light ">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={iconCities}
                  alt={`${data.cities} Cities`}
                  height={36}
                  width={36}
                />
                <h6 className="mt-3">
                  <NumericFormat
                    value={data.cities}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                  {"  "}
                  <span className="text-gray-500 font-weight-light ">
                    Cities
                  </span>
                </h6>{" "}
              </div>
            </div>
          </div>
          {/*  */}
          <BannerHero />
        </div>
      </Fade>
    </section>
  );
}
