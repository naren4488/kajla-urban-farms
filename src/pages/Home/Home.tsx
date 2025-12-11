import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import OurStrengths from "./components/OurStrengths";
import OurServices from "./components/OurServices";
import OurProjects from "./components/OurProjects";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <OurStrengths />
      <OurServices />
      <OurProjects />
    </div>
  );
}

export default Home;

