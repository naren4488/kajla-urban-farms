const aboutSections = [
  {
    title: "Who we are",
    image: "/images/service1.png", // Placeholder - will be updated with actual image
    content: `Urban Agro is an urban sustainability initiative by Kajla Naturals, dedicated to helping city families reclaim their rooftops for organic food production and waste management. We design, install, and support complete rooftop kitchen garden systems that turn unused terrace space into thriving vegetable gardens while converting kitchen waste into nutrient-rich compost.

With a focus on practical, scalable solutions, we've completed over 100 installations across India, helping urban households grow 40-50 kg of fresh produce monthly while diverting 200-300 kg of wet waste from landfills each year. Our approach combines proven organic farming techniques with modern infrastructure designed specifically for Indian rooftops and climates.`,
  },
  {
    title: "Our Vision",
    image: "/images/about-us2.png", // Placeholder - will be updated with actual image
    content: `To transform urban homes and communities into sustainable, self-sufficient ecosystems where every rooftop produces fresh food, manages its own waste, and contributes to cooler, cleaner cities. We envision a future where urban families are food-secure, waste-independent, and actively participating in the green transformation of their neighborhoods.`,
  },
  {
    title: "Our Mission",
    image: "/images/about-us3.png", // Placeholder - will be updated with actual image
    content: `Making urban living sustainable and self-sufficient through rooftop gardening, wet-waste composting, and comprehensive support systems, one home, one building, one community at a time. We provide everything needed for successful organic rooftop farming, from professional installation and climate-adapted desi seeds to ongoing guidance and natural inputs.`,
  },
];

function AboutUs() {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-dark mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-brand-primary max-w-3xl mx-auto">
            Transforming unused rooftops into self-sufficient, organic kitchen gardens that feed families, cool homes,
            and solve the wet waste problem.
          </p>
        </div>

        {/* Decorative Vegetable Banner */}
        <div className="mb-12 md:mb-16 -mt-40 md:-mt-[600px]">
          <img src="/images/about-us.png" alt="Decorative vegetables banner" className="w-full h-auto object-contain" />
        </div>

        {/* Content Sections */}
        <div className="px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          {aboutSections.map((section, index) => (
            <section key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Image - Left Side */}
              <div className="w-full md:w-1/3">
                <div className="relative  overflow-hidden shadow-lg aspect-4/3">
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-dark mb-6">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* The Problem We Solve Section */}
        <div className="px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-dark">
                The Problem We Solve:
              </h2>
              <p className="text-base md:text-lg text-brand-primary-dark italic mb-8 md:mb-12">
                Today's urban families face three interconnected challenges:
              </p>

              <div className="space-y-6 md:space-y-8">
                {/* Problem 1 */}
                <div>
                  <div className="inline-block bg-brand-primary-dark rounded-r-full px-8 py-2 mb-3 -ml-4 md:-ml-8 w-80">
                    <h3 className="text-lg md:text-xl font-bold text-white">1. Unsafe Vegetables:</h3>
                  </div>
                  <p className="text-base md:text-lg text-brand-primary-dark leading-relaxed">
                    70% of vegetables are grown using synthetic fertilizers, with 30-50% showing pesticide residues and
                    20-35% contaminated by polluted irrigation water. Transport and storage cause another 20-35%
                    nutrient loss before vegetables reach your plate.
                  </p>
                </div>

                {/* Problem 2 */}
                <div>
                  <div className="inline-block bg-brand-primary-dark rounded-r-full px-8 py-2 mb-3 -ml-4 md:-ml-8 w-80">
                    <h3 className="text-lg md:text-xl font-bold text-white">2. Rising Costs:</h3>
                  </div>
                  <p className="text-base md:text-lg text-brand-primary-dark leading-relaxed">
                    A family of four spends ₹3,000-4,000 monthly on vegetables, while verified organic options cost
                    1.5-2x more with inconsistent quality assurance.
                  </p>
                </div>

                {/* Problem 3 */}
                <div>
                  <div className="inline-block bg-brand-primary-dark rounded-r-full px-8 py-2 mb-3 -ml-4 md:-ml-8 w-80">
                    <h3 className="text-lg md:text-xl font-bold text-white">3. Waste Crisis:</h3>
                  </div>
                  <p className="text-base md:text-lg text-brand-primary-dark leading-relaxed">
                    50-60% of household wet waste mixes with plastic and ends up in landfills, releasing methane and
                    polluting soil/water systems that could instead become valuable compost. Urban Agro solves all three
                    problems with one integrated system: grow safe vegetables at home using your own kitchen waste as
                    fertilizer.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 lg:shrink-0 w-full lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <img src="/images/plate.png" alt="Fresh organic vegetables" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart Section */}
        <div className="px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            {/* Left Side - Image */}
            <div className="flex-1 lg:shrink-0 w-full lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/images/compost.png"
                  alt="Hands holding soil with plant"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-dark mb-8 md:mb-12 text-right">
                What Sets Us Apart:
              </h2>

              <div className="space-y-6 md:space-y-8">
                {/* Advantage 1 */}
                <div className="">
                  <div className=" bg-brand-primary-dark rounded-l-full px-8 py-2 mb-3 ml-auto mr-0 w-80 md:w-96 border flex justify-end">
                    <h3 className="text-lg md:text-xl font-bold text-white">Complete End-to-End Solution</h3>
                  </div>
                  <p className="text-base md:text-lg text-brand-primary-dark leading-relaxed text-right">
                    Unlike partial solutions, we handle everything: rooftop assessment, custom infrastructure design (grow
                    bags, drainage, frameworks), professional installation, planting with seasonal desi seeds/saplings,
                    composting system setup, and ongoing support until you're completely self-sufficient.
                  </p>
                </div>

                {/* Advantage 2 */}
                <div>
                  <div className="bg-brand-primary-dark rounded-l-full px-8 py-2 mb-3 ml-auto mr-0 w-80 md:w-96 border flex justify-end">
                    <h3 className="text-lg md:text-xl font-bold text-white">In-House Manufacturing</h3>
                  </div>
                  <p className="text-base md:text-lg text-brand-primary-dark leading-relaxed text-right">
                    We produce our own HDPE grow bags, vermicompost, and bio-enzymes, ensuring premium quality at half
                    the competitor price while maintaining full control over inputs and delivery timelines.
                  </p>
                </div>

                {/* Advantage 3 */}
                <div>
                  <div className="bg-brand-primary-dark rounded-l-full px-8 py-2 mb-3 ml-auto mr-0 w-80 md:w-96 border flex justify-end">
                    <h3 className="text-lg md:text-xl font-bold text-white">Flexible Maintenance Models</h3>
                  </div>
                  <p className="text-base md:text-lg text-brand-primary-dark leading-relaxed text-right">
                    Choose Self-Maintenance (with comprehensive training and lifetime guidance) or Full Maintenance (our
                    team handles watering, pest control, seasonal replanting, and harvesting support). Both include our
                    professional installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Image */}
        <div className=" -mt-32 md:-mt-[500px]">
          <img
            src="/images/project-gallery/project-gallery.png"
            alt="Decorative vegetables border"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
