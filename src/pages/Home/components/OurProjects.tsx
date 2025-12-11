const projects = [
  {
    image: "/images/project4.jpeg",
    title: "Hydroponic Farming",
    description: "Advanced hydroponic systems for efficient, year-round vegetable production",
  },
  {
    image: "/images/project3.png",
    title: "Urban Rooftop Garden",
    description: "Transforming urban rooftops into lush, productive green spaces",
  },
  {
    image: "/images/project5.jpeg",
    title: "Tiered Garden Structure",
    description: "Innovative multi-tiered designs maximizing space and yield",
  },
];

function OurProjects() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-orange-500">[</span>
            <span className="text-brand-primary-dark">Our projects</span>
            <span className="text-orange-500">]</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Showcasing over successful rooftop gardens transforming urban homes with lush
            organic vegetables. Our projects highlight sustainable chemical-free farming improving
            health and cutting monthly food costs.
          </p>
        </div>

        {/* Project Images */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 rounded-xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                {/* Optional: Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProjects;

