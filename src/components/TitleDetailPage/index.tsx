import { Fade } from "react-awesome-reveal";
import Breadcrumb from "../Breadcrumb";

interface Title_detailProps {
  title: string;
  city: string;
  country: string;
}

export default function Title_detail({
  city,
  country,
  title,
}: Title_detailProps) {
  // list for this breadcrumb page
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "House Details", pageHref: "/detail" },
  ];

  return (
    <section className="container spacing-sm mt-5">
      <Fade direction="down" triggerOnce>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumbList} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2 fw-bold" style={{ color: "#152C5B" }}>
              {title}
            </h1>
            <span className="fw-lighter" style={{ color: "#B0B0B0" }}>
              {city}, {country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
