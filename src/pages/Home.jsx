// import React from "react";
// import HeroCarousel from "../components/HeroCarousel";
// import AboutImage from "../assets/about-image.jpg";
// import Services from "../components/Services";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Partner1 from "../assets/partner1.jpg";
// import Partner2 from "../assets/partner2.jpg";

// function Home() {
//   const partners = [Partner1, Partner2];

//   // ✅ Sleek gray arrows — positioned at the image edges
//   const CustomPrevArrow = ({ onClick }) => (
//     <div
//       onClick={onClick}
//       className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-6 h-6 md:w-7 md:h-7 text-gray-400 hover:text-gray-600 transition duration-300 drop-shadow-sm"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2.2}
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//       </svg>
//     </div>
//   );

//   const CustomNextArrow = ({ onClick }) => (
//     <div
//       onClick={onClick}
//       className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-6 h-6 md:w-7 md:h-7 text-gray-400 hover:text-gray-600 transition duration-300 drop-shadow-sm"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2.2}
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//       </svg>
//     </div>
//   );

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     arrows: true,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <HeroCarousel />

//       {/* About Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//             <div className="md:w-1/2">
//               <img
//                 src={AboutImage}
//                 alt="Sar Wall Decors"
//                 className="w-full rounded-lg shadow-lg object-cover hover:scale-105 transform transition duration-500"
//               />
//             </div>

//             <div className="md:w-1/2 flex flex-col justify-start">
//               <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
//                 Welcome to{" "}
//                 <span className="text-yellow-500">Sar Wall Decors</span> Painting
//                 & Wall Arting Company
//               </h1>

//               <p className="text-gray-700 text-lg mb-6 leading-relaxed">
//                 Sar Wall Decors is a professionally managed company which has
//                 been in the field of:
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 {[
//                   "Top-notch Quality Specifications",
//                   "Modern Wall Designs",
//                   "Illumination Fixtures",
//                   "Resourceful & Exceptional",
//                   "Recurring Maintenance",
//                   "Professional Royale Play Designers",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-400"
//                   >
//                     <p className="text-gray-700 text-sm">{item}</p>
//                   </div>
//                 ))}
//               </div>

//               <a href="https://sarwalldecors.com/about-us/">
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
//                   MORE ABOUT US
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <Services />

//       {/* Partners Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6 lg:px-8 text-center">
//           <div className="mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//               Our Partners
//             </h2>
//             <div className="w-28 h-1 bg-yellow-400 mx-auto"></div>
//           </div>

//           <div className="relative max-w-5xl mx-auto overflow-visible">
//             <Slider {...settings}>
//               {partners.map((img, index) => (
//                 <div key={index} className="px-2">
//                   <img
//                     src={img}
//                     alt={`Partner ${index + 1}`}
//                     className="w-full h-auto mx-auto object-contain"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import AboutImage from "../assets/about-image.jpg";
import Services from "../components/Services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Partner1 from "../assets/partner1.jpg";
import Partner2 from "../assets/partner2.jpg";

import CommercialImg from "../assets/CommercialImage.jpg";
import CorporateImg from "../assets/CorporateImage.jpg";
import ResidentialImg from "../assets/ResidentialImage.jpg";


function Home() {
  const partners = [Partner1, Partner2];

  // ✅ Sleek gray arrows positioned at edges
  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-gray-600 transition duration-300 drop-shadow-sm"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-gray-600 transition duration-300 drop-shadow-sm"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Image */}
            <div
              className="md:w-1/2 animate-fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img
                src={AboutImage}
                alt="Sar Wall Decors"
                className="w-full rounded-lg shadow-lg object-cover hover:scale-105 transform transition duration-700 ease-in-out"
              />
            </div>

            {/* Right Content */}
            <div
              className="md:w-1/2 flex flex-col justify-start animate-fadeInRight"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
                Welcome to{" "}
                <span className="text-yellow-500">Sar Wall Decors</span> Painting
                & Wall Arting Company
              </h1>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Sar Wall Decors is a professionally managed company which has
                beigning leading interior designing & execution firms in Hyderabad. We are expertised in Interior Design, 3D Flooring, 3D Wallpapers, Play School Paintings, Wallpaper & Painting, Interior Wall Designing, Publicity Wall Paintings, School Painting & Decorative Paintings.
                We have a team of experienced interior designers and workers who are well conversant in carrying out all types of interior and service-related works including Wall Art Painting & Modern Art, Painting Ideas & Modern Paintings, Bedroom Paint Ideas & Colors, Wall Art Decor & Wall Paints, Landscape Paintings, House Painting in Hyderabad & Service Integration.
              </p>

              <a href="https://sarwalldecors.com/about-us/">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                  MORE ABOUT US
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Expertise & Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Our expertise spans across modern, commercial, and residential projects —
            providing customized solutions that blend creativity and precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Interior Design",
              "3D Flooring",
              "3D Wallpapers",
              "Play School Paintings",
              "Wallpaper & Painting",
              "Interior Wall Designing",
              "Publicity Wall Paintings",
              "School & Decorative Paintings",
              "House Painting",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 border-l-4 border-yellow-400"
              >
                <p className="text-gray-800 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            We Also Work For
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our expertise extends across a variety of domains — transforming spaces in
            commercial, corporate, and residential sectors with creative excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { img: CommercialImg,  },
              { img: CorporateImg,  },
              { img: ResidentialImg, },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 bg-white"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Delivering design excellence and functionality for every type of project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our Partners
            </h2>
            <div className="w-28 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="relative max-w-5xl mx-auto overflow-visible">
            <Slider {...settings}>
              {partners.map((img, index) => (
                <div key={index} className="px-2">
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-auto mx-auto object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
