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
import { useEffect, useState } from "react";
// import DetailMock from "@/mock/itemDetails.json";
import { useParams } from "react-router-dom";
import { getData } from "@/utils/fetch";
import { DetailPageProps } from "@/dto/detail.dto";

export default function DetailPage() {
  const { id } = useParams();

  // console.log({ id });

  const [data, setData] = useState<DetailPageProps>({
    _id: "",
    imageId: [
      {
        _id: "",
        imageUrl: "",
      },
    ],
    activities: [],
    categories: [],
    city: "",
    country: "",
    description: "",
    features: [],
    hasBackyard: false,
    isPopular: false,
    name: "",
    price: "",
    testimonial: {
      _id: "",
      content: "",
      familyName: "",
      familyOccupation: "",
      imageUrl: "",
      name: "",
      rate: 0,
    },
    type: "",
    unit: "night",
  });

  useEffect(() => {
    getData(`/landing/${id}`).then((res: any) => {
      // console.log({ res: res.imageId[0].imageUrl });

      setData({
        _id: res._id,
        name: res.title,
        city: res.city,
        country: res.country,
        price: res.price,
        isPopular: res.isPopular,
        unit: res.unit,
        description: res.description,
        categories: [],
        activities: res.activityId,
        features: res.featureId,
        imageId: res.imageId,
        hasBackyard: false,
        testimonial: res.testimonial,
        type: res.type,
      });
    });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      {/* body */}
      <Header />
      <Title_detail
        city={data!.city}
        country={data!.country}
        title={data!.name}
      />
      <FeaturedImages imageUrls={data!.imageId} />
      {/* form booking */}
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade direction="down" triggerOnce>
              <DetailDescription
                description={data!.description}
                features={data!.features}
              />
            </Fade>
          </div>
          <div className="col-5">
            <Fade direction="down" triggerOnce>
              <FormBookingDetail
                itemId={data._id}
                imageUrl={data.imageId[0].imageUrl}
                name={data!.name}
                country={data!.country}
                city={data!.city}
                price={Number(data!.price)}
                unit={data!.unit}
                // itemDetails={page[match.params.id]}
                // startBooking={this.props.checkoutBooking}
              />
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={data!.activities} />
      {/* <Categories data={data!.categories} /> */}
      <Testimonial data={data!.testimonial} />
      <Footer />
    </>
  );
}
