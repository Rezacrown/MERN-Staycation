import { config } from "@/config";
import { Fade } from "react-awesome-reveal";

interface FeaturedImagesProps {
  imageUrls: itemProps[];
}

type itemProps = {
  _id: string;
  imageUrl: string;
};

export default function FeaturedImages({ imageUrls }: FeaturedImagesProps) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {imageUrls.map((item, index: number) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <Fade triggerOnce direction="down" delay={300 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={`${config.ApiUrl}/uploads/item/${item.imageUrl}`}
                      alt={item._id}
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
