import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-gray-200 pt-10 pb-16 relative">
      {/* 🔝 Back to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#"
          className="bg-amber-400 text-[#001f3f] px-3 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-amber-300 transition-all"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-semibold">Scroll Top</span>
        </a>
      </div>

      {/* 🧱 Main Footer Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🟡 About Section */}
        <div>
          <div className="bg-white p-2 rounded-md inline-block mb-4">
            <img
              src={logo}
              alt="Sar Wall Decors Logo"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">
            SAR WALL DECORS is a full-service surface finishing company
            providing exceptional design and finishing solutions across India.
            We help businesses grow through creativity and innovation.
          </p>

          {/* 🌐 Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/sarwalldecor/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/sar_wall_decors/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://in.linkedin.com/in/sar-wall-decors-a83160b3"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCJecS0Tx3LoOrjN0vb0RM2Q"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* 🟢 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-400 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Gallery", link: "/gallery" },
              { name: "Portfolio", link: "/portfolio" },
              { name: "Blog", link: "/blog" },
              { name: "Contact Us", link: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-amber-400 transition text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔵 Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-400 inline-block pb-1">
            Services
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Wall Mural", link: "/wall-murals" },
              { name: "School Painting", link: "/school-painting" },
              { name: "Wall Decor", link: "/wall-decors" },
              { name: "Play School Painting", link: "/play-school-painting" },
              { name: "Elevation Mural", link: "/elevation-mural" },
              { name: "3D Painting", link: "/3d-painting" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-amber-400 transition text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🟣 Reach Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-amber-400 inline-block pb-1">
            Reach Us
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Scion Park View, Flat No 104, Vijay Nagar Colony, Vivekananda Nagar,
            Kukatpally, Hyderabad, Telangana 500072.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+918333833355" className="hover:text-amber-400">
                +91 83338 33355
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:04040033355" className="hover:text-amber-400">
                040 40033355
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:contactusswd@gmail.com"
                className="hover:text-amber-400"
              >
                contactusswd@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ⚫ Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          © 2024 — All Rights Reserved by{" "}
          <span className="text-amber-400 font-semibold">Sar Wall Decors</span>.
          Designed & Developed by{" "}
          <a
            href="https://Visys Cloud TEchnologies.in/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-amber-400"
          >
            Visys Cloud Technologies
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
