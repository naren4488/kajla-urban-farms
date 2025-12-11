function WhyChooseUs() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Text Content Section */}
        <div className="relative bg-white pb-8 md:pb-12">
          {/* Heading - Centered */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            <span className="text-orange-500">[</span>
            <span className="text-brand-primary-dark">WHY CHOOSE US?</span>
            <span className="text-orange-500">]</span>
          </h2>

          {/* Text Content - Left Aligned */}
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            {/* First Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed text-left">
              At Urban Agro, we bring years of hands-on expertise in sustainable rooftop organic gardening. Every
              system we design and install is crafted using proven natural farming practices and our own in-house
              manufacturing, ensuring consistent quality and long-term reliability.
            </p>

            {/* Second Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed text-left">
              We provide a complete, hassle-free experience from personalized consultation to lifetime support, so you
              can enjoy a thriving garden without any complications. Whether it's for your home, apartment, or a larger
              community project, our solutions are tailored to deliver maximum freshness, better health, and meaningful
              cost savings.
            </p>
          </div>
        </div>

        {/* Curved Divider with Decorative Images */}
        <div className="relative w-full">
          {/* Decorative Images on Curve */}
          <div className="absolute z-10 top-0 left-0 right-0 flex items-end justify-between ">
            {/* Tomato on Left - positioned on the curve */}
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-68 lg:h-68  absolute -top-10 md:-top-20 left-0">
              <img
                src="/images/tomato.png"
                alt="Fresh tomatoes"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Mint Leaves on Right - positioned on the curve */}
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-68 lg:h-68 absolute -top-10 md:-top-20 -right-4 md:-right-8">
              <img
                src="/images/mint-leaves.png"
                alt="Fresh mint leaves"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Main Image Section */}
        <div className="relative ">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-t-[100px] md:rounded-t-[300px] ">
            <img
              src="/images/why-choose-us.png"
              alt="Sustainable rooftop gardening"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bg-white h-1/3 bottom-0 left-0 right-0"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
