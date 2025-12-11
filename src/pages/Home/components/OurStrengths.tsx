import { cn } from "@/lib/utils";

const strengths = [
  {
    icon: "/assets/certified.svg",
    title: "Certified Organic Expertise",
    description: "We maintain the highest standards for organic rooftop farming.",
  },
  {
    icon: "/assets/india.svg",
    title: "Pan India Reach",
    description: "From metropolitan cities to tier-2 towns, we deliver consistent and timely installation and support.",
  },
  {
    icon: "/assets/quality.svg",
    title: "Quality Inputs",
    description:
      "We produce our own grow bags, vermicompost, and bio-enzymes to ensure premium quality and cost efficiency.",
  },
];

function OurStrengths() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden -mt-40 md:-mt-68">
      {/* Decorative Leaves - Single Image Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/leaves.png"
          alt="Decorative leaves"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "rotate(8deg)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Banner */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="bg-brand-primary rounded-full px-12 md:px-20 py-4 md:py-5 shadow-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Our Strengths</h2>
          </div>
        </div>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {strengths.map((strength, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "relative bg-white rounded-xl p-6 md:p-8 shadow-md border-2 transition-all duration-300 border-brand-primary"
                )}
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="bg-brand-primary rounded-full p-4 md:p-5 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                    <img src={strength.icon} alt={strength.title} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 text-center mb-4">
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">{strength.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurStrengths;
