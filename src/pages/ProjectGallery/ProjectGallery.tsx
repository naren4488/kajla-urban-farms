function ProjectGallery() {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-dark mb-4">
            Project Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our collection of successful rooftop garden projects. Each project showcases our
            commitment to sustainable, organic farming solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Placeholder Gallery Items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-brand-primary-light/20 to-brand-primary-dark/20 flex items-center justify-center">
                  <span className="text-4xl text-brand-primary-dark/50">🌱</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Rooftop Garden Project {item}
                </h3>
                <p className="text-gray-600">
                  A beautiful example of sustainable urban farming with fresh organic vegetables
                  growing year-round.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;

