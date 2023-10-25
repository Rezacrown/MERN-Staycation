import { CategoriesProps } from "@/dto/landing.dto";
import { Link } from "react-router-dom";

interface CustomCategoriesProps {
  data: CategoriesProps[];
}

export default function Categories({ data }: CustomCategoriesProps) {
  return (
    <>
      {data.map((categories) => (
        <div key={`categories-${Math.random()}`} className="container">
          <h4 className="mb-3 fw-medium">{categories.name}</h4>
          <div
            className="container-grid gap-3"
            style={{ marginBottom: "80px" }}
          >
            {categories.items.length > 0 ? (
              categories.items.map((item) => (
                <div key={`items-${item._id}`} className="item column-3 row-1">
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular <span className="fw-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: "180px" }}>
                      <img
                        src={item.imageUrl!}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wraper mt-3">
                      <Link
                        to={`/properties/${item._id}`}
                        className="text-gray-800 stretched-link d-block"
                        style={{ textDecoration: "none" }}
                      >
                        {item.name}
                      </Link>
                      <span className="text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
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
        </div>
      ))}
    </>
  );
}
