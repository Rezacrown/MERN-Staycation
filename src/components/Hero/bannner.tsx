import heroImage from "@/assets/image/img-hero.jpg";
import heroImageFrame from "@/assets/image/img-hero-frame.jpg";

export default function BannerHero() {
  return (
    <>
      <div className="col-6 pl-5 mt-5">
        <div style={{ width: 540, height: 370 }}>
          <img
            src={heroImage}
            alt=""
            className="img-fluid position-absolute"
            style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
          />
          <img
            src={heroImageFrame}
            alt=""
            className="img-fluid position-absolute"
            style={{ margin: "0 -15px -15px 0" }}
          />
        </div>
      </div>
    </>
  );
}
