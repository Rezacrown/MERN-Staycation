import Header from "@/components/Header";
import Hero from "@/components/Hero";

// mock
import landingMock from "@/mock/landingPage.json";

export default function LandingPage(props: any) {
  return (
    <>
      <Header pathname="/" {...props} />
      <Hero data={landingMock.hero} />
    </>
  );
}
