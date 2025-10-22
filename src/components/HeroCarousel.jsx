import React, { useEffect, useState } from "react";

// 🖼️ Import your local images
import mural1 from "../assets/mural1.jpg";
import mural2 from "../assets/mural2.jpg";
import mural3 from "../assets/mural3.jpg";

const slides = [
  {
    img: mural1,
    title: "Creative Murals",
    subtitle: "Your Visualization, Our Art",
    desc: "The art we create on walls is not just paint and colors — it's a reflection of our souls, a story whispered to the world.",
  },
  {
    img: mural2,
    title: "Bringing Walls to Life",
    subtitle: "Your Visualization, Our Art",
    desc: "Art is not what you see, but what you make others see.",
  },
  {
    img: mural3,
    title: "Artistic Vision",
    subtitle: "You Imagine, We Create",
    desc: "We turn imagination into color, and walls into art.",
  },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white">
            <p className="text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase">
              {slide.subtitle}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3">
              {slide.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-amber-400 scale-110" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
