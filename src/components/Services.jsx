import React from "react";
import Service1 from "../assets/service1.jpg";
import Service2 from "../assets/service2.jpg";
import Service3 from "../assets/service3.jpg";
import Service4 from "../assets/service4.jpg";
import Service5 from "../assets/service5.jpg";
import Service6 from "../assets/service6.jpg";

function ServicesSection() {
  const services = [
    { title: "Wall Painting", image: Service1 },
    { title: "3D Wallpapers", image: Service2 },
    { title: "Fiberglass Mural", image: Service3 },
    { title: "Interior Wall Design", image: Service4 },
    { title: "POP Art", image: Service5 },
    { title: "Dry Wall Art", image: Service6 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-700 text-base max-w-3xl mx-auto">
            At Sar Wall Decors and Paintings, we take pride in offering a diverse
            range of services to enhance the aesthetic appeal of your spaces.
            Our team of skilled artists and designers are dedicated to bringing
            creativity and innovation to your walls. Explore our services below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <a
            href="/services"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
