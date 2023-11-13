import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MostPicked from "@/components/MostPicked";
import Categories from "@/components/Categories";
import Testimonial from "@/components/Testimonial";

// mock
import landingMock from "@/mock/landingPage.json";
import { LandingPageProps } from "@/dto/landing.dto";
import Footer from "@/components/Footer";

export default function LandingPage({ props }: { props?: LandingPageProps }) {
  return (
    <>
      <Helmet>
        <title>Landing Page</title>
      </Helmet>
      {/* body */}
      <Header pathname="/" {...props} />
      <Hero data={landingMock.hero} />
      <MostPicked data={landingMock.mostPicked} />
      <Categories data={landingMock.categories} />
      <Testimonial data={landingMock.testimonial} />
      <Footer />
    </>
  );
}
