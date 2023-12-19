// import React from "react";

interface DetailDescriptionProps {
  description: string;
  features: FeatuedItem[];
}

type FeatuedItem = {
  _id: string;
  name: string;
  imageUrl: string;
  qty: string;
};

import { config } from "@/config";
import ReactHtmlParser from "react-html-parser";
export default function DetailDescription({
  description,
  features,
}: DetailDescriptionProps) {
  return (
    <main>
      <h4 className="fw-medium" style={{ color: "#152C5B" }}>
        About the place
      </h4>
      {ReactHtmlParser(description)}
      <div className="row" style={{ marginTop: 30 }}>
        {features.length === 0
          ? "Tidak Ada Feature"
          : features.map((feature, index: number) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={`${config.ApiUrl}/uploads/feature/${feature.imageUrl}`}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
