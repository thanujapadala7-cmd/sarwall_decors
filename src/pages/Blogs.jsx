import React from "react";
import banner from "../assets/blogs/banner.png";
import b1 from "../assets/blogs/b1.jpg";
import b2 from "../assets/blogs/b2.jpg";
import b3 from "../assets/blogs/b3.jpg";
import b4 from "../assets/blogs/b4.jpg";
import b5 from "../assets/blogs/b5.jpg";
import b6 from "../assets/blogs/b6.jpg";

export default function Blogs() {

  const cards = [
  {
    date: "March 15, 2024",
    category: "School Paintings",
     
    desc: "Discover the meticulous craftsmanship behind SAR Wall Decors. From hand-painted masterpieces to intricate wall",
    img: b1,
  },
  {
    date: "November 14, 2018",
    category: "Drywallart",
     
    desc: "Transform your living spaces with SAR Wall Decors’ exquisite collection, blending timeless designs and",
    img: b2,
  },
  {
    date: "November 14, 2018",
    category: "Wall Murals",
     
    desc: "SAR Wall Decors offers tailored solutions for diverse spaces. Whether it’s a cozy nook",
    img: b3,
  },
  {
    date: "May 21, 2018",
    category: "3D Wall Paintings",
     
    desc: "Commitment to eco-friendly practices is at the heart of SAR Wall Decors. Embrace sustainable",
    img: b4,
  },
  {
    date: "April 26, 2018",
    category: "Elevation Mural Designs",
     
    desc: "Stay ahead of the curve with SAR Wall Decors’ trendsetting designs. Our collections are",
    img: b5,
  },
  {
    date: "April 26, 2018",
    category: "3D Wallpapers",
     
    desc: "At SAR Wall Decors, quality is non-negotiable. We take pride in delivering wall decor",
    img: b6,
  },
];


  return (
    <div>
      {/* Banner Image */}
      <div className="w-full">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
      </div>

      {/* Shop by Sport Section */}
     <section className="w-full bg-white dark:bg-[#0A2025] py-12 px-8">
      <div className="mx-auto max-w-[1160px]">
        {/* Header */}
        <header className="h-auto mb-10 flex justify-between items-center">
          <h2 className="text-black dark:text-white text-4xl md:text-5xl font-bold font-['Roboto'] leading-tight">
            SarWall Decors Blog
          </h2>
        </header>

        {/* Main content */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-gray-50 dark:bg-[#11242B] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
               className="w-full h-48 rounded-t-xl"
  style={{ objectFit: "fill" }}
              />

              {/* Card content */}
              <div className="p-5 flex flex-col gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {card.date}
                </span>
            <span className="text-sm font-bold text-black">
                  {card.category}
                </span>
                
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>

      <section className="py-12 bg-gray-100">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">How SarWall Decor Transforms Walls into Stunning Works of Art</h2>
          <div className="flex justify-around flex-wrap gap-6 max-w-6xl mx-auto px-4">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personalization</h3>
              <p className="text-gray-700">SAR's diverse collection ensures that there's something for every taste and style. Whether you prefer bold and modern or subtle and traditional, SAR allows you to personalize your space with art that speaks to you.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Creating Focal Points</h3>
              <p className="text-gray-700">Transform a room instantly by adding a SAR wall decor as a focal point. Whether it's a large canvas above the sofa or a striking metal sculpture in the entryway, these pieces draw attention and set the tone for the entire space.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expressing Individuality</h3>
              <p className="text-gray-700">Your home is an extension of yourself, and SAR's wall decors provide a platform for you to express your individuality. Showcase your unique style and personality through carefully selected pieces that resonate with you.</p>
            </div>
          </div>
        </section>
  
    </div>
  );
}
