import Stars from "../Stars";

import { TestimonialProps } from "@/dto/landing.dto";

import testimonialsFrame from "@/assets/image/img-hero-frame.jpg";
import Button from "../Button";

import { Fade } from "react-awesome-reveal";

export default function Testimonial({ data }: { data: TestimonialProps }) {
  return (
    <Fade triggerOnce direction="down">
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: "70px" }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt={data.name}
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={testimonialsFrame}
                alt="testimonial-frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          <div className="col-4">
            <h4 style={{ marginBottom: "40px" }}>{data.name}</h4>
            <Stars
              rating={data.rate}
              maxRating={5}
              height={35}
              width={35}
              spacing={4}
            />
            <h2 className="h5 fw-light lh-lg my-3">{data.content}</h2>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div className="">
              <Button
                className="px-5 mt-4 py-2"
                hasShandow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
