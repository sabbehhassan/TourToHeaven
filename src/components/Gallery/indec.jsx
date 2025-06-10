import React from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Travel Moments Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
