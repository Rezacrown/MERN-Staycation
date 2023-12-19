import { config } from "@/config";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Activities({ data }: { data?: ActivitiesProps[] }) {
  if (data?.length === 0) return null;

  return (
    <section className="container">
      <Fade direction="down" triggerOnce>
        <h4 className="mb-3 fw-medium" style={{ color: "#152C5B" }}>
          Treasure to Choose
        </h4>
        <div className="container-grid gap-3">
          {data?.map((item: any, index2: number) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-item-${index2}`}
              >
                <Fade direction="down" triggerOnce delay={300 * index2}>
                  <div className="card border-0">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={`${config.ApiUrl}/uploads/activity/${item.imageUrl}`}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Link
                        type="link"
                        // to={`/properties/${item._id}`}
                        to={"#"}
                        className="stretched-link d-block text-gray-800 text-decoration-none"
                      >
                        <h5 className="h4" style={{ color: "#152C5B" }}>
                          {item.name}
                        </h5>
                      </Link>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}

interface ActivitiesProps {
  //   data?: [];
  _id: string;
  name: string;
  type: string;
  imageUrl: string;
}
