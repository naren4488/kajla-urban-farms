import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import OurStrengths from "./components/OurStrengths";
import OurServices from "./components/OurServices";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <OurStrengths />
      <OurServices />
    </div>
  );
}

export default Home;

