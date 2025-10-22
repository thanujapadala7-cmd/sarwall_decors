import React from "react";
import WallPainting from "../../assets/walldecor/Wall-Painting.jpg";
import HousePainting from "../../assets/walldecor/House-Painting.jpg";
import DWall from "../../assets/walldecor/D-Wall.jpeg";
import  DWallpaper from "../../assets/walldecor/D-Wallpaper.jpg";
import Hospitals from "../../assets/walldecor/Hospitals.jpg";
import Hotels from "../../assets/walldecor/Hotels.jpg";
import Office from "../../assets/walldecor/Office.jpg";
import Textured from "../../assets/walldecor/Textured.jpg";
import Liquid from "../../assets/walldecor/Liquid.jpg";
import Publicity from "../../assets/walldecor/Publicity.jpg";

const WallDecor = () => {
  const sections = [
    {
      title: "Wall Painting",
      text: `Wall paintings, whether in schools, homes, or public spaces, serve as visual narratives that elevate the ambiance and character of the surroundings. From vibrant murals depicting cultural diversity to minimalist designs fostering focus, these artworks add depth and personality to any environment. More than just decorative elements, wall paintings spark creativity, convey messages, and contribute to a distinct atmosphere. In their diverse forms, wall paintings are powerful tools that weave stories, inspire emotions, and leave a lasting impression on those who encounter them.`,
      image: WallPainting,
    },
    {
      title: "House Painting",
      text: `This is crucial and often the most time-consuming part of the job. It includes cleaning the surfaces, repairing any damages like cracks or holes, and priming if necessary.There are different types of paint for various surfaces and purposes. Latex paint is common for interior walls, while oil-based paints are more durable for exteriors. There are also specialized paints for areas like bathrooms or kitchens that need to withstand moisture.`,
      image: HousePainting,
    },
    {
      title: "3D Wall Painting",
      text: ` 3D wall paintings redefine spatial perception, seamlessly blending art and illusion to create immersive visual experiences. These dynamic artworks, with their trompe-l’oeil techniques, give the impression of depth and dimensionality on flat surfaces. Transforming walls into interactive canvases, 3D paintings engage viewers by inviting them to explore the illusion from different angles. The convergence of artistic creativity and optical illusions in 3D wall paintings offers a captivating and dynamic element to any space.`,
      image: DWall,
    },
    {
      title: "3D Wallpaper",
      text: ` 3D wallpapers have revolutionized interior design by adding depth and dimension to flat surfaces, transforming ordinary walls into captivating visual experiences. These wallpapers use advanced printing techniques to create lifelike images that appear to leap off the surface, offering a sense of realism that can dramatically alter the ambiance of a room. They come in various designs, from natural landscapes and urban scenes to abstract patterns and geometric shapes, catering to diverse aesthetic preferences.`,
      image: DWallpaper,
    },
    {
      title: "Hospitals and Clinics Wall Painting",
      text: `Hospitals and clinic wall paintings go beyond mere decoration, playing a crucial role in creating healing and comforting environments. Thoughtfully designed murals often depict calming scenes of nature, abstract patterns, or uplifting imagery to alleviate stress. These artistic interventions contribute to a positive patient experience, fostering a sense of tranquility and distraction during medical procedures. The integration of wall paintings in healthcare spaces reflects a holistic approach to well-being, promoting healing not only through medical care but also through a visually soothing and supportive atmosphere.`,
      image: Hospitals,
    },
    {
      title: "Hotels & Restaurants Wall Painting",
      text: `Beyond mere aesthetics, wall paintings contribute to the architectural landscape by adding a layer of visual richness. They have the power to redefine and elevate the atmosphere of a space, creating a harmonious blend between artistic expression and the surrounding environment.`,
      image: Hotels,
    },
    {
      title: "Office Wall Painting",
      text: `In hotels and restaurants, wall paintings become integral elements of the overall dining or lodging experience. These artistic displays range from contemporary designs to thematic murals, enhancing the ambiance and reflecting the establishment’s character. The carefully curated wall art complements the interior design, creating a visually appealing and memorable atmosphere for patrons. Whether conveying cultural narratives or simply adding aesthetic flair, wall paintings in hotels and restaurants contribute to a sophisticated and immersive environment.`,
      image: Office,
    },
    {
      title: "Textured Painting",
      text: `Textured paintings introduce a tactile dimension to the world of art, inviting viewers to explore the canvas with their sense of touch. Through the layering of various materials, artists create rich surfaces that add depth and character to their compositions. These textured artworks not only stimulate visual interest but also engage the viewer on a sensory level, creating a dynamic and immersive experience. Whether rough and expressive or delicately layered, textured paintings bring a unique and palpable quality to the realm of artistic expression.`,
      image: Textured,
    },
    {
      title: "Liquid Wallpaper",
      text: `Liquid wallpapers are a mesmerizing addition to contemporary wall decors, offering a unique blend of artistry and functionality. These wallpapers typically feature fluid designs that mimic the movement of liquids like water, paint, or ink. The result is a visually dynamic and immersive experience, with colors swirling and blending in captivating patterns.`,
      image: Liquid,
    },
    {
      title: "Publicity & Street Wall Painting",
      text: `Publicity street wall paintings transform urban landscapes into vibrant canvases that capture attention and convey messages. These large-scale murals serve as dynamic billboards, engaging passersby with bold colors and compelling visuals. Often commissioned for promotional purposes, street wall paintings play a crucial role in urban storytelling, conveying cultural narratives or advertising campaigns. From social activism to commercial branding, these public artworks turn city streets into open-air galleries that speak to diverse audiences.`,
      image: Publicity,
    },
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
           Wall Decor
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 relative inline-block">
            Painting and Decorating
            <span className="block w-60 h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">Where brushstrokes turn walls into canvases, telling stories through vibrant hues and artistic expression.</p>
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
        import.meta.glob('../../assets/walldecor/walldecor-r*.jpg', { eager: true })
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

export default WallDecor;
