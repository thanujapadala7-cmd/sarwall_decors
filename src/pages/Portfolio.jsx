import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/portfolio/banner.png";

// Import 52 client images
import c1 from "../assets/portfolio/01.jpg";
import c2 from "../assets/portfolio/02.jpg";
import c3 from "../assets/portfolio/03.jpg";
import c4 from "../assets/portfolio/04.jpg";
import c5 from "../assets/portfolio/5.jpg";
import c6 from "../assets/portfolio/6.jpg";
import c7 from "../assets/portfolio/7.jpg";
import c8 from "../assets/portfolio/8.jpg";
import c9 from "../assets/portfolio/9.jpg";
import c10 from "../assets/portfolio/10.jpg";
import c11 from "../assets/portfolio/11.jpg";
import c12 from "../assets/portfolio/12.jpg";
import c13 from "../assets/portfolio/13.jpg";
import c14 from "../assets/portfolio/14.jpg";
import c15 from "../assets/portfolio/15.jpg";
import c16 from "../assets/portfolio/16.jpg";
// import c17 from "../assets/portfolio/17.jpg";
// import c18 from "../assets/portfolio/18.jpg";
import c19 from "../assets/portfolio/19.jpg";
import c20 from "../assets/portfolio/20.jpg";
import c21 from "../assets/portfolio/21.jpg";
import c22 from "../assets/portfolio/22.jpg";
import c23 from "../assets/portfolio/23.jpg";
import c24 from "../assets/portfolio/24.jpg";
import c25 from "../assets/portfolio/25.jpg";
import c26 from "../assets/portfolio/26.jpg";
import c27 from "../assets/portfolio/27.jpg";
import c28 from "../assets/portfolio/28.jpg";
// import c29 from "../assets/portfolio/29.jpg";
import c30 from "../assets/portfolio/30.jpg";
import c31 from "../assets/portfolio/31.jpg";
import c32 from "../assets/portfolio/32.jpg";
import c33 from "../assets/portfolio/33.jpg";
import c34 from "../assets/portfolio/34.jpg";
import c35 from "../assets/portfolio/35.jpg";
import c36 from "../assets/portfolio/36.jpg";
import c37 from "../assets/portfolio/37.jpg";
import c38 from "../assets/portfolio/38.jpg";
import c39 from "../assets/portfolio/39.jpg";
import c40 from "../assets/portfolio/40.jpg";
// import c41 from "../assets/portfolio/41.jpg";
import c42 from "../assets/portfolio/42.jpg";
import c43 from "../assets/portfolio/43.jpg";
import c44 from "../assets/portfolio/44.jpg";
import c45 from "../assets/portfolio/45.jpg";
import c46 from "../assets/portfolio/46.jpg";
import c47 from "../assets/portfolio/47.jpg";
import c48 from "../assets/portfolio/48.jpg";
import c49 from "../assets/portfolio/49.jpg";
import c50 from "../assets/portfolio/50.jpg";
import c51 from "../assets/portfolio/51.jpg";
import c52 from "../assets/portfolio/52.jpg";

export default function Portfolio() {
  const videos = [
    "https://www.youtube.com/embed/0areo3Zm85A?rel=0&modestbranding=1&controls=1&showinfo=0",
    "https://www.youtube.com/embed/u3HpKC9wo5Y?rel=0&modestbranding=1&controls=1&showinfo=0",
    "https://www.youtube.com/embed/y96CsIrWCgo?rel=0&modestbranding=1&controls=1&showinfo=0",
    "https://www.youtube.com/embed/NIArRjYyiLA?rel=0&modestbranding=1&controls=1&showinfo=0",
    "https://www.youtube.com/embed/a2bocKjEMYw?rel=0&modestbranding=1&controls=1&showinfo=0",
  ];

  const clients = [
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15, c16, c19, c20,
    c21, c22, c23, c24, c25, c26, c27, c28, c30,
    c31, c32, c33, c34, c35, c36, c37, c38, c39, c40,
    c42, c43, c44, c45, c46, c47, c48, c49, c50,
    c51, c52
  ].map((img, index) => ({ id: index + 1, img }));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div>
      {/* Banner */}
      <div className="w-full">
        <img src={banner} alt="Portfolio Banner" className="w-full h-64 sm:h-80 md:h-96 object-cover" />
      </div>

      {/* Videos */}
      <section className="w-full bg-white dark:bg-[#0A2025] py-12 px-8">
        <div className="mx-auto max-w-[1160px]">
          <header className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#0A2025] dark:text-white relative inline-block">
              Our Portfolio
              <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-4">Explore our latest creations and works in action</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900">
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="w-full bg-gray-100 py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-black mb-10 text-center">Our Clients</h2>
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="px-2">
                <img src={client.img} alt={`Client ${client.id}`} className="w-full h-24 object-contain" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
