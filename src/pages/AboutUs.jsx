import React from "react";
import wallArtImage from "../assets/aboutus/section1.jpg";
import gallery1 from "../assets/aboutus/20.jpg";
import gallery2 from "../assets/aboutus/22.jpg";
import gallery3 from "../assets/aboutus/24.jpg";
import gallery4 from "../assets/aboutus/g1.webp";
import gallery5 from "../assets/aboutus/g2.jpg";
import gallery6 from "../assets/aboutus/g3.jpg";
import gallery7 from "../assets/aboutus/g4.webp";
import gallery8 from "../assets/aboutus/g5.webp";
import gallery9 from "../assets/aboutus/g6.webp";
import gallery10 from "../assets/aboutus/g7.webp";
import gallery11 from "../assets/aboutus/g8.webp";
import gallery12 from "../assets/aboutus/g9.webp";

import Ganesh from "../assets/aboutus/ganesh.jpg";
// import { Quote } from "lucide-react";
import WhyChooseUsImg from "../assets/aboutus/whychoose.jpg";
import { CheckCircle } from "lucide-react";


const AboutUs = () => {
  const galleryImages = [gallery1, gallery2, gallery3];

const galleryItems = [
  {
    img: gallery4,
   
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: gallery5,
   
  },
  {
    img: gallery6,
   
  },
  {
    img: gallery7,
   
  },
  {
    img: gallery8,
    
  },
  {
    img: gallery9,
   
  },
  {
    img: gallery10,
   
  },
  {
    img: gallery11,
   
  },
  {
    img: gallery12,
   
  },
];
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center mt-4 text-yellow-400">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? "fill-current" : "fill-none stroke-current"}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.095 10.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-screen">
      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">
          About Us - Sar Wall Decors
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              src={wallArtImage}
              alt="Wall Art Decor"
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[500px]"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 w-full space-y-6 text-gray-700">
            {/* Our Story */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Story</h2>
              <p className="text-sm sm:text-base">
                At <span className="font-semibold">Sar Wall Decors</span>, we believe 
                that the walls around us are more than just boundaries; they are canvases 
                waiting to be adorned with creativity, passion, and individuality. Established 
                with a vision to redefine wall decor, we embarked on a journey to transform 
                spaces into expressions of personal style and artistic imagination.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Vision</h2>
              <p className="text-sm sm:text-base">
                We believe that every wall has a tale to tell, and we envision a world where 
                art transcends boundaries, connecting people to their spaces in meaningful ways. 
                Our vision is to be the catalyst for transforming living and working environments 
                into personalized masterpieces that inspire, captivate, and reflect the unique spirit 
                of our clients.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-sm sm:text-base">
                At the heart of <span className="font-semibold">Sar Wall Decors</span> is a mission 
                to bring creativity and imagination to life through exceptional craftsmanship. 
                We strive to provide unparalleled wall decor solutions that go beyond aesthetics, 
                creating an emotional resonance between people and their spaces.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                Go To Our Services
              </button>
              <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
                Request Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

     

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
  {/* Crafted with Passion Section */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
      Crafted with Passion
    </h2>
    <p className="text-gray-700 text-sm sm:text-lg text-justify">
      Fuelled by a genuine passion for art, our team of skilled artisans and designers 
      channel creativity into every stroke and detail. We believe that art has the power 
      to elevate and enrich lives, and our commitment is to bring that transformative 
      experience to your home or workspace.
    </p>
  </div>

  {/* 9-Image Modern Gallery */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {[
      {
        img: gallery1,
        heading: "Artistry Meets Innovation",
        description:
          "Experience the perfect blend of traditional artistry and modern innovation. Our creations go beyond conventional boundaries, ensuring your walls become a canvas for both timeless elegance and contemporary expression.",
      },
      {
        img: gallery2,
        heading: "Quality as Standard",
        description:
          "Excellence is not just a goal; it’s our standard. From the selection of materials to the final brushstroke, we uphold the highest quality in craftsmanship, ensuring lasting beauty in every piece.",
      },
      {
        img: gallery3,
        heading: "Diverse Range of Services",
        description:
          "Explore a diverse range of services, from custom wall murals that tell your story to intricate paintings that capture the essence of your style. Our offerings cater to various tastes, providing you with a rich array of options for transforming your space.",
      },
     
    ].map((item, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          src={item.img}
          alt={`Gallery ${index + 1}`}
          className="w-full h-48 sm:h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover Overlay for first 3 images */}
        {index < 3 && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {item.heading}
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              {item.description}
            </p>
          </div>
        )}
      </div>
    ))}
  </div>

  <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Modern Gallery
          </h2>
          <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto">
            A curated selection of our finest works. Hover over the images to
            learn more about the creativity and stories behind each piece.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden shadow-lg ${
                item.span ? item.span : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.heading || `Gallery ${index + 1}`}
                className={`w-full ${item.span ? "h-full" : "h-64"} object-cover transform transition-transform duration-500 group-hover:scale-110`}
              />
              {item.heading && (
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {item.heading}
                  </h3>
                  {item.description && (
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


  
</div>


      {/* Founder and Director Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-gray-100 min-h-screen py-12 sm:py-16">
        <div className="w-full md:w-1/3 p-10">
          <img src={Ganesh} alt="Founder Image" className="w-full h-auto object-cover shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Founder and Director</h2>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Meet Mr. Srinivas</h1>
          <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base">
            At Sar Wall Decors, Paintings, and Wall Artings, our journey is shaped by the vision and passion of our esteemed founder and director, Srinivas. With a deep-rooted love for art and an unwavering commitment to transforming spaces, Srinivas has been the driving force behind the artistic endeavors that define our company.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Visionary Leadership:</h3>
          <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base">
            Srinivas’s visionary leadership has been instrumental in establishing Sar Wall Decors as a hub of creativity and innovation. With an innate understanding of the transformative power of art, Srinivas has guided our team to push boundaries and redefine conventional approaches to wall decor.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Artistic Expertise:</h3>
          <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base">
            As an accomplished artist in their own right, Srinivas brings a wealth of artistic expertise to the table. This firsthand knowledge not only fuels the creative spirit of our team but also ensures that every project bears the mark of true artistic excellence.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Innovation and Entrepreneurial Spirit:</h3>
          <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base">
            Beyond artistic pursuits, Srinivas embodies an entrepreneurial spirit that drives innovation. Whether exploring new techniques, embracing cutting-edge technologies, or conceptualizing avant-garde designs, Srinivas ensures that Sar Wall Decors remains at the forefront of the ever-evolving world of wall decor.
          </p>
        </div>
      </section>

   

        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              Our Clients Love Us
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-amber-600 mb-6">
              Why Choose Sar Wall Decors?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sar Wall Decors is dedicated to understanding and meeting the
              unique needs of our clients. Our expert team, from entry-level
              specialists to creative leads, ensures a seamless and personalized
              experience in every project we undertake.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Design Consultations:</span>{" "}
                Explore personalized design solutions with our expert consultants who help bring your vision to life.
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <CheckCircle className="text-amber-500 w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Flexible Engagement:</span>{" "}
                Enjoy the freedom to collaborate with us on your terms — be it a one-time project or ongoing updates.
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <CheckCircle className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Budget-Friendly Excellence:</span>{" "}
                Experience the perfect blend of luxury and affordability without compromising on quality or elegance.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={WhyChooseUsImg}
            alt="Why Choose Us"
            className="shadow-lg w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>


   {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Testimonials
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Hear from our satisfied clients about their experience with Sar Wall Decors
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/6.jpg"
                    alt="Profile image"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Priya S.</h3>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Sar Wall Decors transformed my living room with their stunning wall art. The quality and creativity are unmatched!
              </p>
              <StarRating rating={5} />
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/men/24.jpg"
                    alt="Profile image"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Arjun K.</h3>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                The team was professional and delivered exactly what I envisioned. My office space now feels so vibrant!
              </p>
              <StarRating rating={5} />
            </div>
            {/* Testimonial 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                    alt="Profile image"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Meena R.</h3>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                I was blown away by the attention to detail in their work. Highly recommend Sar Wall Decors for any decor needs!
              </p>
              <StarRating rating={4} />
            </div>
            {/* Testimonial 4 */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/53.jpg"
                    alt="Profile image"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Vikram T.</h3>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Their unique designs added such a personal touch to my home. Absolutely thrilled with the results!
              </p>
              <StarRating rating={5} />
            </div>
            {/* Testimonial 5 */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Profile image"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Anita M.</h3>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                The craftsmanship and creativity at Sar Wall Decors are exceptional. My home feels like a gallery now!
              </p>
              <StarRating rating={5} />
            </div>
            {/* Testimonial 6 */}
            <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/men/62.jpg"
                    alt="Profile image"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Rahul V.</h3>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Sar Wall Decors made my workspace inspiring with their art. The process was seamless, and the results are stunning!
              </p>
              <StarRating rating={5} />
            </div>
          </div>
          
        </div>
      </section>
    </section>
  );
};

export default AboutUs;