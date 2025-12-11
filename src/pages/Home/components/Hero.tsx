import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const heroSlides = [
  {
    image: "/images/hero1.jpeg",
    alt: "Rooftop garden with organic vegetables",
    headline: "Grow Fresh",
    headlineHighlight: "Organic Veggies",
    headlineEnd: "on Your Roof",
    subheadline:
      "Transform unused rooftops into bountiful organic farms with our complete setup solutions. Harvest healthy produce year-round using household waste as fertilizer.",
  },
  {
    image: "/images/hero2.png",
    alt: "Urban farming and rooftop agriculture",
    headline: "Sustainable",
    headlineHighlight: "Rooftop Farming",
    headlineEnd: "for Urban Homes",
    subheadline:
      "Complete organic solutions: setup, fertilizers, planting, and lifetime service for chemical-free vegetables. Embrace green living with zero-waste farming.",
  },
];

function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Update Swiper when layout changes (e.g., after navigation)
  useEffect(() => {
    const updateSwiper = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
        swiperRef.current.updateSlides();
        swiperRef.current.updateSlidesClasses();
      }
    };

    // Update after a short delay to ensure DOM is stable
    const timeoutId = setTimeout(updateSwiper, 100);

    // Also update on window resize
    window.addEventListener("resize", updateSwiper);
    // Update when page becomes visible (handles navigation back)
    document.addEventListener("visibilitychange", updateSwiper);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateSwiper);
      document.removeEventListener("visibilitychange", updateSwiper);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
          bulletActiveClass: "swiper-pagination-bullet-active !opacity-100",
        }}
        navigation={true}
        loop={true}
        observer={true}
        observeParents={true}
        updateOnWindowResize={true}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-end overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: "scale(1.2)",
                  willChange: "transform",
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
                  <div className="max-w-2xl">
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                      {slide.headline} <br />
                      <span className="text-brand-primary-light">{slide.headlineHighlight}</span>
                      {slide.headlineEnd && (
                        <>
                          {" "}
                          <br />
                          {slide.headlineEnd}
                        </>
                      )}
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-xl">
                      {slide.subheadline}
                    </p>

                    {/* CTA Button */}
                    <a
                      href="#catalogue"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary-dark hover:bg-brand-primary text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg"
                    >
                      DOWNLOAD CATALOGUE
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
