// Gallery images data
// Pattern: 3, 2, 3, 2, 3 images per row
const galleryImages = [
  // Row 1: 3 images
  { id: 1, image: "/images/project-gallery/img1.jpeg", title: "Project 1" },
  { id: 2, image: "/images/project-gallery/img2.jpeg", title: "Project 2" },
  { id: 3, image: "/images/project-gallery/img3.jpg", title: "Project 3" },
  // Row 2: 2 images
  { id: 4, image: "/images/project-gallery/img4.jpeg", title: "Project 4" },
  { id: 5, image: "/images/project-gallery/img5.jpeg", title: "Project 5" },
  // Row 3: 3 images
  { id: 6, image: "/images/project-gallery/img6.jpg", title: "Project 6" },
  { id: 7, image: "/images/project-gallery/img7.jpeg", title: "Project 7" },
  { id: 8, image: "/images/project-gallery/img8.jpeg", title: "Project 8" },
  // Row 4: 2 images
  { id: 9, image: "/images/project-gallery/img9.png", title: "Project 9" },
  { id: 10, image: "/images/project-gallery/img10.jpg", title: "Project 10" },
  // Row 5: 3 images
  { id: 11, image: "/images/project-gallery/img11.png", title: "Project 11" },
  { id: 12, image: "/images/project-gallery/img12.jpeg", title: "Project 12" },
  { id: 13, image: "/images/project-gallery/img13.png", title: "Project 13" },
];

const projectIncludes = [
  {
    icon: "/assets/project-gallery/icon1.svg",
    text: "Professionally installed grow bags, drainage and framework",
  },
  {
    icon: "/assets/project-gallery/icon2.svg",
    text: "Organic soil media, saplings and seasonal seeds",
  },
  {
    icon: "/assets/project-gallery/icon3.svg",
    text: "Composting system to turn kitchen waste into fertilizer",
  },
  {
    icon: "/assets/project-gallery/icon4.svg",
    text: "Bio-enzymes and natural pest control inputs",
  },
  {
    icon: "/assets/project-gallery/icon5.svg",
    text: "Training + ongoing support (self-maintenance or full-maintenance plans)",
  },
];

function ProjectGallery() {
  // Group images by rows: [3, 2, 3, 2, 3]
  const rows = [
    galleryImages.slice(0, 3), // Row 1: 3 images
    galleryImages.slice(3, 5), // Row 2: 2 images
    galleryImages.slice(5, 8), // Row 3: 3 images
    galleryImages.slice(8, 10), // Row 4: 2 images
    galleryImages.slice(10, 13), // Row 5: 3 images
  ];

  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-dark mb-4">Project Gallery</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Real rooftops, real harvests. A glimpse of how Urban Agro turns unused terraces into productive,
            chemical‑free kitchen gardens.
          </p>
        </div>

        {/* Gallery Grid with Alternating Rows */}
        <div className="space-y-4 mb-16 md:mb-20">
          {rows.map((row, rowIndex) => {
            // Determine grid columns based on row length
            const gridColsClass = row.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";

            return (
              <div key={rowIndex} className={`grid ${gridColsClass} gap-4`}>
                {row.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer aspect-5/3"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Optional overlay on hover */}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* What Every Project Includes Section */}
        <div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl pl-6 md:pl-12 font-bold text-brand-primary-dark mb-6 md:mb-8 ">
            What Every Project Includes:
          </h2>
          <div className="space-y-1 pl-6 md:pl-20">
            {projectIncludes.map((item, index) => (
              <div key={index} className="flex items-center max-sm:gap-4 ">
                {/* Icon */}
                <div className="shrink-0 w-8 h-8 md:w-16 md:h-16  flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                </div>
                {/* Text */}
                <p className="text-base md:text-lg lg:text-xl text-brand-primary-dark font-medium flex-1 pt-2">
                  {item.text}
                </p>
              </div>
            ))}
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
  );
}

export default ProjectGallery;
