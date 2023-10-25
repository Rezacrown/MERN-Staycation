import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MostPicked from "@/components/MostPicked";

// mock
import landingMock from "@/mock/landingPage.json";
import { LandingPageProps } from "@/dto/landing.dto";
import Categories from "@/components/Categories";
import Testimonial from "@/components/Testimonial";

export default function LandingPage(props: LandingPageProps) {
  return (
    <>
      <Header pathname="/" {...props} />
      <Hero data={landingMock.hero} />
      <MostPicked data={landingMock.mostPicked} />
      <Categories data={landingMock.categories} />
      <Testimonial/>
    </>
  );
}
