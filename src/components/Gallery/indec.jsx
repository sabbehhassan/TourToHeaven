import React from "react";

const images = [
  "/Gallery/g1.jpg",
  "/Gallery/g2.jpg",
  "/Gallery/g3.jpg",
  "/Gallery/g4.jpg",
  "/Gallery/g5.jpg",
  "/Gallery/g6.jpg",
  "/Gallery/g7.jpg",
  "/Gallery/g8.jpg",
  "/Gallery/g9.jpg",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Travel Moments Gallery
        </h2>

        {/* Masonry style layout for portrait images */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 break-inside-avoid"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
