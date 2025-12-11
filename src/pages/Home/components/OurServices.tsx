import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: "/images/service1.png",
    icon: "/assets/self-service.svg",
    title: "Installation + Self-Maintenance",
    subtitle: "We install everything, you maintain:",
    features: [
      "Complete professional installation (grow bags, drainage, framework)",
      "Composting system setup (2-stage bin + waste decomposer)",
      "Seasonal vegetable saplings planted",
      "Natural inputs (bio-enzymes, neem oil, vermicompost)",
      "Gardening tools + detailed guidebook + training",
    ],
    bottomText: "We setup perfectly you enjoy harvests with our guidance.",
  },
  {
    image: "/images/service2.png",
    icon: "/assets/our-service.svg",
    title: "Installation + Full Maintenance",
    subtitle: "We install everything AND take complete care:",
    features: [
      "Everything in Option 1 + ongoing maintenance by our team",
      "Regular visits for watering, pest control, harvesting guidance",
      "Seasonal replanting and soil refresh",
      "Troubleshooting and optimization",
      "Monthly/seasonal care - you just eat fresh produce!",
    ],
    bottomText: "We setup AND maintain you get zero-effort farming.",
  },
];

function OurServices() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Panel - Description */}
          <div className="flex-1 bg-brand-primary rounded-xl p-8 md:p-10 lg:p-12 flex flex-col">
            {/* Icon */}
            <div className="mb-6">
              <img
                src="/assets/services.svg"
                alt="Our Services"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white leading-relaxed">
              Urban Agro offers one complete product: Rooftop Kitchen Garden Setup with
              Compost Bins, we install everything (grow bags, drainage, framework, saplings) for
              fresh, chemical-free vegetables while converting household waste into compost. Choose
              your post-installation support:
            </p>
          </div>

          {/* Right Side - Service Panels */}
          <div className="flex-1 lg:flex-2 flex flex-col lg:flex-row gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 flex flex-col"
              >
                {/* Service Image */}
                <div className="relative w-full h-48 md:h-56 lg:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Header Bar */}
                <div className="bg-brand-primary-dark px-6 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                    <h3 className="text-lg md:text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-white/90">{service.subtitle}</p>
                </div>

                {/* Features List */}
                <div className="flex-1 px-6 py-6 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 bg-brand-primary-light/20 rounded-lg p-3"
                    >
                      <Check className="w-5 h-5 text-brand-primary-dark flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Text */}
                <div className="px-6 pb-4">
                  <p className="text-sm md:text-base text-gray-600 italic text-center">
                    {service.bottomText}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-6 rounded-lg text-base md:text-lg">
                    GET QUOTATION
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;

