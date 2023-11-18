// components
import FormBookingDetail from "@/components/FormBookingDetail";
import Header from "@/components/Header";
import Title_detail from "../../components/TitleDetailPage";
import FeaturedImages from "@/pages/Detail/FeaturedImages";
import DetailDescription from "./DetailDescription";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Activities from "./Activities";
// import Categories from "@/components/Categories";

// 3rd lib
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
//
// import { DetailPageProps } from "@/dto/detail.dto";
import { useEffect } from "react";
import DetailMock from "@/mock/itemDetails.json";

export default function DetailPage() {
  useEffect(() => {}, []);

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      {/* body */}
      <Header />
      <Title_detail
        city={DetailMock.city}
        country={DetailMock.country}
        title={DetailMock.name}
      />
      <FeaturedImages imageUrls={DetailMock.imageUrls} />
      {/* form booking */}
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade direction="down" triggerOnce>
              <DetailDescription
                description={DetailMock.description}
                features={DetailMock.features}
              />
            </Fade>
          </div>
          <div className="col-5">
            <Fade direction="down" triggerOnce>
              <FormBookingDetail
                name={DetailMock.name}
                country={DetailMock.country}
                city={DetailMock.city}
                price={Number(DetailMock.price)}
                unit={DetailMock.unit}
                // itemDetails={page[match.params.id]}
                // startBooking={this.props.checkoutBooking}
              />
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={DetailMock.activities} />
      {/* <Categories data={DetailMock.categories} /> */}
      <Testimonial data={DetailMock.testimonial} />
      <Footer />
    </>
  );
}
