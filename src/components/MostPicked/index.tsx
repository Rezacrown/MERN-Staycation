import { MostPickedprops } from "@/dto/landing.dto";
import Button from "../Button";

import { Fade } from "react-awesome-reveal";

interface CustomMostPickedProps {
  data: MostPickedprops[];
}

export default function MostPicked({ data }: CustomMostPickedProps) {
  return (
    <Fade direction="up" triggerOnce>
      <section className="container" style={{ marginTop: "150px" }}>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid gap-5">
          {data.map((item, i: number) => (
            <div
              key={i}
              className={`item column-4 ${i === 0 ? "row-2" : "row-1"}`}
            >
              <Fade delay={500 * i} direction="up" triggerOnce className="card">
                <div className="card card-feature">
                  <div className="tag">
                    {item.price}{" "}
                    <span className="fw-light">Per {item.unit}</span>
                  </div>
                  {/*  */}
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  {/*  */}
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}
                      className="streched-link d-block text-white"
                    >
                      <h5>{item.name}</h5>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
