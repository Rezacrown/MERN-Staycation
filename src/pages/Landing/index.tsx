import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MostPicked from "@/components/MostPicked";
import Categories from "@/components/Categories";
import Testimonial from "@/components/Testimonial";

// mock
// import landingMock from "@/mock/landingPage.json";
import { LandingPageProps } from "@/dto/landing.dto";

import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { getData } from "@/utils/fetch";

import { resetBookingData } from "@/redux/DetailBookingForm";
import { useDispatch } from "react-redux";

export default function LandingPage({ props }: { props?: LandingPageProps }) {
  const dispatch = useDispatch();

  const [data, setData] = useState<LandingPageProps>({
    hero: {
      cities: 0,
      travelers: 0,
      treasures: 0,
    },
    categories: [],
    mostPicked: [],
    testimonial: {},
  });

  useEffect(() => {
    dispatch(resetBookingData());

    getData("/landing").then((res: any) => {
      setData({
        categories: res?.category,
        hero: {
          cities: res.hero.city,
          travelers: res.hero.traveler,
          treasures: res.hero.treasure,
        },
        mostPicked: res?.mostPicked,
        testimonial: res?.testimonial,
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Landing Page</title>
      </Helmet>
      {/* body */}
      <Header pathname="/" {...props} />
      <Hero data={data!.hero} />
      <MostPicked data={data.mostPicked} />
      <Categories data={data.categories} />
      <Testimonial data={data.testimonial} />
      <Footer />
    </>
  );
}
