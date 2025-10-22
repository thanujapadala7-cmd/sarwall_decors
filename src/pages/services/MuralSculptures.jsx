import React from "react";
import WallMural from "../../assets/muralsculptures/Wall-Mural.jpg";
import Drywall from "../../assets/muralsculptures/Drywall.jpg";
import Elevation from "../../assets/muralsculptures/Elevation.jpg";
import CementWall from "../../assets/muralsculptures/Cement-Wall.jpg";
import FRP from "../../assets/muralsculptures/FRP.jpg";
import Sandstone from "../../assets/muralsculptures/Sandstone.jpg";
import Siporex from "../../assets/muralsculptures/Siporex.png";

const MuralSculptures = () => {
  const sections = [
    {
      title: "Wall Mural & Relief Art",
      text: `Wall murals in our school breathe life into the surroundings, transforming blank spaces into captivating canvases of expression. Each mural tells a unique story, reflecting the diverse interests and talents of our student body. These artistic creations not only add aesthetic charm but also serve as powerful tools for conveying messages, sparking creativity, and fostering a sense of community. The wall murals contribute to an inspiring environment that encourages imagination, unity, and a shared appreciation for the arts.`,
      image: WallMural,
    },
    {
      title: "Drywall Art",
      text: `Drywall art in our school introduces a unique dimension to our interior spaces, turning plain surfaces into captivating works of creativity. The minimalist elegance of these designs adds sophistication to classrooms and common areas. Beyond aesthetics, the drywall art serves as a subtle backdrop for focused learning and collaboration. Its seamless integration into the architectural elements enhances the overall ambiance, creating an environment that is both visually appealing and conducive to academic engagement.`,
      image: Drywall,
    },
    {
      title: "Elevation Mural Design",
      text: `The elevation mural design on our building is a testament to the fusion of architecture and artistry. Stretching across the facade, it captivates onlookers with its intricate patterns and vibrant colors. This visual masterpiece not only elevates the aesthetic appeal of the structure but also symbolizes the commitment to creativity and innovation within. The elevation mural design stands as a proud representation of our identity, making a bold statement about the importance of aesthetics in every building, creating an environment that is visually appealing and reflective of a commitment to creativity and innovation.`,
      image: Elevation,
    },
    {
      title: "Cement Wall Mural Art",
      text: `Cement wall murals, adorning various surfaces, transform mundane spaces into captivating canvases of expression. These resilient artworks showcase the versatility of design on an unconventional medium, adding character and vibrancy to the structure. Beyond mere aesthetics, the cement wall murals convey a sense of identity and purpose, turning each blank wall into a storytelling element. Their enduring presence reflects a commitment to creativity and individuality, contributing to a visually dynamic and engaging environment.`,
      image: CementWall,
    },
    {
      title: "FRP - Fiberglass Mural",
      text: `Fiber Reinforced Plastic (FRP) murals grace our spaces with a unique blend of durability and artistic finesse. These lightweight and resilient artworks, fashioned from fiberglass, seamlessly merge functionality with aesthetic appeal. The FRP murals, with their intricate designs and vibrant hues, not only withstand the test of time but also inject vitality into the surroundings. Their versatility makes them a captivating addition to any space, harmonizing creativity and longevity for an enduring visual impact.`,
      image: FRP,
    },
    {
      title: "Sandstone Mural",
      text: `Sandstone murals adorn our surroundings with a timeless elegance, marrying artistry with the natural beauty of this sedimentary rock. Carved with precision, these murals showcase intricate designs and cultural motifs, creating a harmonious integration with the building’s architecture. The warm, earthy tones of sandstone murals not only offer a visually captivating experience but also embody a connection to heritage and craftsmanship. As enduring pieces of art, they stand as a testament to the enduring beauty of natural materials in enriching our built environment.`,
      image: Sandstone,
    },
    {
      title: "Siporex Mural",
      text: `Siporex murals, made from lightweight aerated concrete, seamlessly combine artistic charm with structural innovation. Known for their durability and sustainability, these murals enhance our surroundings with intricate detailing and eco-friendly design. The unique properties of siporex contribute to visually striking artworks that not only beautify our space but also underscore a commitment to sustainability. These murals serve as a testament to the harmony of eco-friendly materials and captivating design in shaping a visually pleasing environment.`,
      image: Siporex,
    },
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
           Wall Murals Art
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 relative inline-block">
            Murals: Where Art Breathes Life.
            <span className="block w-60 h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">Where art meets architecture, transforming spaces into vibrant canvases that tell unique stories with every brushstroke</p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 relative inline-block">
                {section.title}
                <span className="block w-40 h-[3px] bg-yellow-400 mt-2"></span>
              </h3>
              <p className="text-gray-700 text-[17px] leading-relaxed mt-4">
                {section.text}
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-xl w-full max-w-lg object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>

       <div className="container mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Works</h2>
    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 relative inline-block">
      Creative Touch That Speaks
      <span className="block w-48 h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
    </h3>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
      A glimpse into our latest artistic projects that blend creativity, color, and craftsmanship 
      — turning walls into stories and spaces into inspiration.
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Object.values(
        import.meta.glob('../../assets/muralsculptures/wallmural-r*.jpg', { eager: true })
      ).map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={img.default}
            alt={`Recent Work ${index + 1}`}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      ))}
    </div>
  </div>
    </section>
  );
};

export default MuralSculptures;
