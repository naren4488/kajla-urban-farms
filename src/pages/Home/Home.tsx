import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import OurStrengths from "./components/OurStrengths";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <OurStrengths />
    </div>
  );
}

export default Home;

