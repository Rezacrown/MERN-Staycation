import { CategoriesProps } from "@/dto/landing.dto";
import { Link } from "react-router-dom";

import { Fade } from "react-awesome-reveal";
import { config } from "@/config";

interface CustomCategoriesProps {
  data: CategoriesProps[];
}

export default function Categories({ data }: CustomCategoriesProps) {
  return (
    <>
      {data.map((categories) => (
        <section key={`categories-${Math.random()}`} className="container">
          <Fade triggerOnce direction="down">
            <h4 className="mb-3 fw-medium">{categories.name}</h4>
            <div
              className="container-grid gap-3"
              style={{ marginBottom: "80px" }}
            >
              {categories.itemId.length > 0 ? (
                categories.itemId.map((item, i2) => (
                  <div key={`items-${i2}`} className="item column-3 row-1">
                    <Fade triggerOnce direction="up" delay={300 * i2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular <span className="fw-light">Choice</span>
                          </div>
                        )}
                        <figure
                          className="img-wrapper"
                          style={{ height: "180px" }}
                        >
                          <img
                            src={`${config.ApiUrl}/uploads/item/${item.imageId[0].imageUrl}`}
                            alt={item.title}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wraper mt-3">
                          <Link
                            to={`/properties/${item._id}`}
                            className="text-gray-800 stretched-link d-block"
                            style={{ textDecoration: "none" }}
                          >
                            {item.title}
                          </Link>
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                ))
              ) : (
                <div className="row">
                  <div className="col-auto align-items-center">
                    There is no property at this category
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </section>
      ))}
    </>
  );
}
