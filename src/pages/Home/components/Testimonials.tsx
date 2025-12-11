import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    review:
      "Urban Agro transformed our rooftop with professionalism and high-quality service. Now we enjoy fresh, pesticide-free vegetables all year round!",
    reviewer: "Residential Client",
  },
  {
    rating: 4.5,
    review:
      "Their team's expertise and ongoing support made the entire process easy and rewarding. Highly recommended!",
    reviewer: "Urban Homeowner",
  },
  {
    rating: 5,
    review:
      "From installation to maintenance, Urban Agro delivers beyond expectations, helping our community become greener and healthier.",
    reviewer: "Community Leader",
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} className="w-5 h-5 fill-white text-white" />;
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative w-5 h-5">
              <Star className="absolute inset-0 w-5 h-5 text-white/30" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star className="w-5 h-5 fill-white text-white" />
              </div>
            </div>
          );
        } else {
          return <Star key={index} className="w-5 h-5 text-white/30" />;
        }
      })}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="relative w-full bg-brand-primary py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          TESTIMONIALS
        </h2>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-1 hover:bg-brand-secondary rounded-lg p-6 md:p-8 shadow-lg border cursor-pointer"
            >
              {/* Star Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Review Text */}
              <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Reviewer Name */}
              <p className="text-white font-bold text-base md:text-lg">{testimonial.reviewer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

