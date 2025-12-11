function AboutUs() {
  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-dark mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Learn more about Urban Agro and our mission to transform urban spaces into thriving
            organic gardens.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Mission Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Urban Agro, we are dedicated to revolutionizing urban agriculture by making
              sustainable, organic rooftop farming accessible to everyone. Our mission is to help
              urban dwellers grow fresh, chemical-free vegetables right at their doorstep while
              promoting environmental sustainability and healthy living.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that everyone deserves access to fresh, nutritious food, and we're committed
              to making that possible through innovative farming solutions that work in urban
              environments.
            </p>
          </section>

          {/* Vision Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We envision a future where every urban rooftop is transformed into a productive,
              green space that contributes to food security, environmental health, and community
              well-being. Our goal is to create a network of sustainable urban farms that serve as
              models for cities worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our work, we aim to inspire communities to embrace sustainable living
              practices and reconnect with nature, even in the heart of the city.
            </p>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-primary-light/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-primary-dark mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We prioritize eco-friendly practices that protect our environment and promote
                  long-term sustainability.
                </p>
              </div>
              <div className="bg-brand-primary-light/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-primary-dark mb-3">Quality</h3>
                <p className="text-gray-700">
                  We maintain the highest standards in all our products and services, ensuring
                  premium quality for our clients.
                </p>
              </div>
              <div className="bg-brand-primary-light/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-primary-dark mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously innovate and improve our farming techniques to deliver better
                  results and experiences.
                </p>
              </div>
              <div className="bg-brand-primary-light/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-primary-dark mb-3">Community</h3>
                <p className="text-gray-700">
                  We believe in building strong communities through shared knowledge and
                  collaborative efforts in urban farming.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

