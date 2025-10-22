
// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   Mail,
//   MessageCircle,
//   Phone,
//   Home,
//   Info,
//   Image,
//   Paintbrush,
//   Briefcase,
//   PenTool,
//   Contact,
//   Menu,
//   X,
// } from "lucide-react";
// import logo from "../assets/logo.png"; // adjust path if needed

// const StickyNavbar = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // ✅ Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsServicesOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* ✅ Top Ribbon (always sticky) */}
//       <div className="fixed top-0 left-0 w-full z-50 bg-[#001f3f]/95 text-white py-5 px-4 shadow-md border-b border-gray-300">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Left Side - Email + WhatsApp */}
//           <div className="hidden md:flex items-center gap-5 text-sm font-medium">
//             <a
//               href="mailto:contact@sarwalldecors.com"
//               className="flex items-center gap-2 hover:underline"
//             >
//               <Mail className="w-4 h-4 text-white" />
//               contact@sarwalldecors.com
//             </a>
//             <a
//               href="https://wa.me/918333833355"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 hover:underline"
//             >
//               <MessageCircle className="w-4 h-4 text-green-400" />
//               WhatsApp
//             </a>
//           </div>

//           {/* Center - Logo */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md px-6 py-2">
//             <img
//               src={logo}
//               alt="Sarwall Decors Logo"
//               className="h-10 w-auto object-contain"
//             />
//           </div>

//           {/* Right Side - Phone Numbers */}
//           <ul className="hidden md:flex flex-wrap gap-6 text-sm md:text-base font-medium">
//             <li className="flex items-center space-x-2">
//               <Phone className="w-4 h-4 text-white" />
//               <a href="tel:+918333833355" className="hover:underline">
//                 +91 83338 33355
//               </a>
//             </li>
//             <li className="flex items-center space-x-2">
//               <Phone className="w-4 h-4 text-white" />
//               <a href="tel:04040033355" className="hover:underline">
//                 040 40033355
//               </a>
//             </li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-white focus:outline-none ml-auto"
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* 🌟 Main Navbar */}
//       <nav className="relative mt-[90px] z-40 bg-gray-200 backdrop-blur-lg shadow-xl">
//         <div className="container mx-auto px-6">
//           {/* ✅ Desktop Navigation */}
//           <div className="hidden md:flex flex-col md:flex-row justify-between items-center py-4">
//             <div className="flex flex-wrap justify-center gap-6 md:gap-10">
//               {/* Home */}
//               <Link
//                 to="/home"
//                 className="flex items-center space-x-2 text-black hover:text-amber-300 font-semibold transition-all duration-300 group"
//               >
//                 <Home className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
//                 <span>Home</span>
//               </Link>

//               {/* About */}
//               <Link
//                 to="/aboutus"
//                 className="flex items-center space-x-2 text-black hover:text-amber-300 font-semibold transition-all duration-300 group"
//               >
//                 <Info className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
//                 <span>About Us</span>
//               </Link>

//               {/* Gallery */}
//               <Link
//                 to="/gallery"
//                 className="flex items-center space-x-2 text-black hover:text-amber-300 font-semibold transition-all duration-300 group"
//               >
//                 <Image className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
//                 <span>Gallery</span>
//               </Link>

//               {/* Services Dropdown */}
//               <div
//                 className="relative"
//                 ref={dropdownRef}
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button
//                   onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   className="flex items-center space-x-2 text-black hover:text-amber-300 font-semibold transition-all duration-300 group"
//                 >
//                   <Paintbrush className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
//                   <span>Services</span>
//                   <svg
//                     className={`ml-1 w-4 h-4 transition-transform duration-200 ${
//                       isServicesOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl py-3 border border-gray-200 z-50 transform transition-all duration-300 origin-top ${
//                     isServicesOpen
//                       ? "opacity-100 scale-y-100 visible"
//                       : "opacity-0 scale-y-0 invisible"
//                   }`}
//                 >
//                   <Link
//                     to="/services/school-painting"
//                     className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
//                   >
//                     🎨 School Painting
//                   </Link>
//                   <Link
//                     to="/services/mural-sculptures"
//                     className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
//                   >
//                     🖼️ Mural & Sculptures
//                   </Link>
//                   <Link
//                     to="/services/wall-decor"
//                     className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
//                   >
//                     🏠 Wall Decors
//                   </Link>
//                 </div>
//               </div>

//               {/* Portfolio */}
//               <Link
//                 to="/portfolio"
//                 className="flex items-center space-x-2 text-black hover:text-amber-300 font-semibold transition-all duration-300 group"
//               >
//                 <Briefcase className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
//                 <span>Portfolio</span>
//               </Link>

//               {/* Blog */}
//               <Link
//                 to="/blogs"
//                 className="flex items-center space-x-2 text-black hover:text-amber-300 font-semibold transition-all duration-300 group"
//               >
//                 <PenTool className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
//                 <span>Blog</span>
//               </Link>

//               {/* Contact */}
//               <Link
//                 to="/contact"
//                 className="flex items-center space-x-2 text-black hover:text-amber-300 font-semibold transition-all duration-300 group"
//               >
//                 <Contact className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
//                 <span>Contact Us</span>
//               </Link>
//             </div>
//           </div>

//           {/* ✅ Mobile Menu */}
//           <div
//             className={`md:hidden transition-all duration-300 overflow-hidden ${
//               isMobileMenuOpen ? "max-h-[600px]" : "max-h-0"
//             }`}
//           >
//             <div className="flex flex-col bg-[#001f3f] rounded-lg shadow-lg mt-2 p-4 space-y-3">
//               {/* Mobile links */}
//               <Link
//                 to="/home"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 transition-all"
//               >
//                 <Home />
//                 Home
//               </Link>

//               <Link
//                 to="/aboutus"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 transition-all"
//               >
//                 <Info />
//                 About Us
//               </Link>

//               <Link
//                 to="/gallery"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 transition-all"
//               >
//                 <Image />
//                 Gallery
//               </Link>

//               {/* Services Dropdown (mobile) */}
//               <div>
//                 <button
//                   onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   className="flex items-center gap-3 w-full text-white hover:text-amber-300 transition-all"
//                 >
//                   <Paintbrush />
//                   <span>Services</span>
//                   <svg
//                     className={`ml-auto w-4 h-4 transition-transform duration-200 ${
//                       isServicesOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     isServicesOpen ? "max-h-40 mt-2" : "max-h-0"
//                   }`}
//                 >
//                   <Link
//                     to="/services/school-painting"
//                     className="block px-5 py-2 text-gray-200 hover:text-amber-300 transition-all"
//                   >
//                     🎨 School Painting
//                   </Link>
//                   <Link
//   to="/services/mural-sculptures"
//   className="block px-5 py-2 text-gray-200 hover:text-amber-300 transition-all"
// >
//   🖼️ Mural & Sculptures
// </Link>

//                   <Link
//                     to="/services/wall-decor"
//                     className="block px-5 py-2 text-gray-200 hover:text-amber-300 transition-all"
//                   >
//                     🏠 Wall Decors
//                   </Link>
//                 </div>
//               </div>

//               <Link
//                 to="/portfolio"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 transition-all"
//               >
//                 <Briefcase />
//                 Portfolio
//               </Link>

//               <Link
//                 to="/blogs"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 transition-all"
//               >
//                 <PenTool />
//                 Blog
//               </Link>

//               <Link
//                 to="/contact"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 transition-all"
//               >
//                 <Contact />
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default StickyNavbar;





// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   Mail,
//   MessageCircle,
//   Phone,
//   Home,
//   Info,
//   Image,
//   Paintbrush,
//   Briefcase,
//   PenTool,
//   Contact,
//   Menu,
//   X,
// } from "lucide-react";
// import logo from "../assets/logo.png";

// const StickyNavbar = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsServicesOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Top Ribbon - Sticky */}
//       <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#001f3f] via-[#002a54] to-[#001f3f] text-white shadow-lg">
//         <div className="container mx-auto px-6">
//           <div className="flex justify-between items-center py-6">
//             {/* Left Side - Email + WhatsApp */}
//             <div className="hidden md:flex items-center gap-6">
//               <a
//                 href="mailto:contact@sarwalldecors.com"
//                 className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group"
//               >
//                 <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 <span className="text-sm font-medium whitespace-nowrap">contact@sarwalldecors.com</span>
//               </a>
//               <a
//                 href="https://wa.me/918333833355"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group"
//               >
//                 <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" />
//                 <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
//               </a>
//             </div>

//             {/* Center - Logo with White Background */}
//             <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2 shadow-md">
//               <img
//                 src={logo}
//                 alt="Sarwall Decors Logo"
//                 className="h-16 w-auto object-contain"
//               />
//             </div>

//             {/* Right Side - Phone Numbers */}
//             <ul className="hidden md:flex items-center gap-6">
//               <li className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group">
//                 <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
//                 <a href="tel:+918333833355" className="text-sm font-medium whitespace-nowrap">
//                   +91 83338 33355
//                 </a>
//               </li>
//               <li className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group">
//                 <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
//                 <a href="tel:04040033355" className="text-sm font-medium whitespace-nowrap">
//                   040 40033355
//                 </a>
//               </li>
//             </ul>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden text-white focus:outline-none"
//             >
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar - Scrollable (No gap) */}
//       <nav className="mt-32 bg-gray-200">
//         <div className="container mx-auto px-6">
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex justify-center items-center py-4">
//             <div className="flex gap-10">
//               <Link
//                 to="/home"
//                 className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
//               >
//                 <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 <span>Home</span>
//               </Link>

//               <Link
//                 to="/aboutus"
//                 className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
//               >
//                 <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 <span>About Us</span>
//               </Link>

//               <Link
//                 to="/gallery"
//                 className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
//               >
//                 <Image className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 <span>Gallery</span>
//               </Link>

//               {/* Services Dropdown */}
//               <div
//                 className="relative"
//                 ref={dropdownRef}
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button
//                   onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
//                 >
//                   <Paintbrush className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                   <span>Services</span>
//                   <svg
//                     className={`ml-1 w-4 h-4 transition-transform duration-300 ${
//                       isServicesOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl py-3 border border-gray-200 transform transition-all duration-300 origin-top ${
//                     isServicesOpen
//                       ? "opacity-100 scale-100 visible"
//                       : "opacity-0 scale-95 invisible"
//                   }`}
//                 >
//                   <Link
//                     to="/services/school-painting"
//                     className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
//                   >
//                     🎨 School Painting
//                   </Link>
//                   <Link
//                     to="/services/mural-sculptures"
//                     className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
//                   >
//                     🖼️ Mural & Sculptures
//                   </Link>
//                   <Link
//                     to="/services/wall-decor"
//                     className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
//                   >
//                     🏠 Wall Decors
//                   </Link>
//                 </div>
//               </div>

//               <Link
//                 to="/portfolio"
//                 className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
//               >
//                 <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 <span>Portfolio</span>
//               </Link>

//               <Link
//                 to="/blogs"
//                 className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
//               >
//                 <PenTool className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 <span>Blog</span>
//               </Link>

//               <Link
//                 to="/contact"
//                 className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
//               >
//                 <Contact className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                 <span>Contact Us</span>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`md:hidden transition-all duration-300 overflow-hidden ${
//               isMobileMenuOpen ? "max-h-[600px] pb-4" : "max-h-0"
//             }`}
//           >
//             <div className="flex flex-col bg-[#001f3f] rounded-xl mt-2 p-4 space-y-2">
//               <Link
//                 to="/home"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Home className="w-5 h-5" />
//                 <span>Home</span>
//               </Link>

//               <Link
//                 to="/aboutus"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Info className="w-5 h-5" />
//                 <span>About Us</span>
//               </Link>

//               <Link
//                 to="/gallery"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Image className="w-5 h-5" />
//                 <span>Gallery</span>
//               </Link>

//               <div>
//                 <button
//                   onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   className="flex items-center gap-3 w-full text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
//                 >
//                   <Paintbrush className="w-5 h-5" />
//                   <span>Services</span>
//                   <svg
//                     className={`ml-auto w-4 h-4 transition-transform duration-300 ${
//                       isServicesOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     isServicesOpen ? "max-h-48 mt-2" : "max-h-0"
//                   }`}
//                 >
//                   <Link
//                     to="/services/school-painting"
//                     className="block px-8 py-2 text-gray-200 hover:text-amber-300 transition-all"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     🎨 School Painting
//                   </Link>
//                   <Link
//                     to="/services/mural-sculptures"
//                     className="block px-8 py-2 text-gray-200 hover:text-amber-300 transition-all"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     🖼️ Mural & Sculptures
//                   </Link>
//                   <Link
//                     to="/services/wall-decor"
//                     className="block px-8 py-2 text-gray-200 hover:text-amber-300 transition-all"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     🏠 Wall Decors
//                   </Link>
//                 </div>
//               </div>

//               <Link
//                 to="/portfolio"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Briefcase className="w-5 h-5" />
//                 <span>Portfolio</span>
//               </Link>

//               <Link
//                 to="/blogs"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <PenTool className="w-5 h-5" />
//                 <span>Blog</span>
//               </Link>

//               <Link
//                 to="/contact"
//                 className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Contact className="w-5 h-5" />
//                 <span>Contact Us</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default StickyNavbar;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MessageCircle,
  Phone,
  Home,
  Info,
  Image,
  Paintbrush,
  Briefcase,
  PenTool,
  Contact,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";

const StickyNavbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Ribbon - Sticky */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#001f3f] via-[#002a54] to-[#001f3f] text-white shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center pt-0 pb-0">
            {/* Left Side - Email + WhatsApp */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="mailto:contact@sarwalldecors.com"
                className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium whitespace-nowrap">contact@sarwalldecors.com</span>
              </a>
              <a
                href="https://wa.me/918333833355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group"
              >
                <svg 
                  className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
              </a>
            </div>

            {/* Center - Logo with White Background */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2 shadow-md mt-2">
              <img
                src={logo}
                alt="Sarwall Decors Logo"
                className="h-16 w-auto object-contain "
              />
            </div>

            {/* Right Side - Phone Numbers */}
            <ul className="hidden md:flex items-center gap-6">
              <li className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                <a href="tel:+918333833355" className="text-sm font-medium whitespace-nowrap">
                  +91 83338 33355
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                <a href="tel:04040033355" className="text-sm font-medium whitespace-nowrap">
                  040 40033355
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar - Scrollable (No gap) */}
      <nav className="relative mt-22 bg-gray-200 z-40">
        <div className="container mx-auto px-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center py-4">
            <div className="flex gap-10">
              <Link
                to="/home"
                className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </Link>

              <Link
                to="/aboutus"
                className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
              >
                <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>About Us</span>
              </Link>

              <Link
                to="/gallery"
                className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
              >
                <Image className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Gallery</span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
                >
                  <Paintbrush className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Services</span>
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl py-3 border border-gray-200 transform transition-all duration-300 origin-top ${
                    isServicesOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <Link
                    to="/services/school-painting"
                    className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
                  >
                    🎨 School Painting
                  </Link>
                  <Link
                    to="/services/mural-sculptures"
                    className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
                  >
                    🖼️ Mural & Sculptures
                  </Link>
                  <Link
                    to="/services/wall-decor"
                    className="block px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
                  >
                    🏠 Wall Decors
                  </Link>
                </div>
              </div>

              <Link
                to="/portfolio"
                className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
              >
                <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Portfolio</span>
              </Link>

              <Link
                to="/blogs"
                className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
              >
                <PenTool className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Blog</span>
              </Link>

              <Link
                to="/contact"
                className="flex items-center space-x-2 text-gray-800 hover:text-amber-600 font-semibold transition-all duration-300 group"
              >
                <Contact className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-[600px] pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col bg-[#001f3f] rounded-xl mt-2 p-4 space-y-2">
              <Link
                to="/home"
                className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>

              <Link
                to="/aboutus"
                className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Info className="w-5 h-5" />
                <span>About Us</span>
              </Link>

              <Link
                to="/gallery"
                className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image className="w-5 h-5" />
                <span>Gallery</span>
              </Link>

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-3 w-full text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                >
                  <Paintbrush className="w-5 h-5" />
                  <span>Services</span>
                  <svg
                    className={`ml-auto w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? "max-h-48 mt-2" : "max-h-0"
                  }`}
                >
                  <Link
                    to="/services/school-painting"
                    className="block px-8 py-2 text-gray-200 hover:text-amber-300 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🎨 School Painting
                  </Link>
                  <Link
                    to="/services/mural-sculptures"
                    className="block px-8 py-2 text-gray-200 hover:text-amber-300 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🖼️ Mural & Sculptures
                  </Link>
                  <Link
                    to="/services/wall-decor"
                    className="block px-8 py-2 text-gray-200 hover:text-amber-300 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🏠 Wall Decors
                  </Link>
                </div>
              </div>

              <Link
                to="/portfolio"
                className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Briefcase className="w-5 h-5" />
                <span>Portfolio</span>
              </Link>

              <Link
                to="/blogs"
                className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <PenTool className="w-5 h-5" />
                <span>Blog</span>
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg px-3 py-2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Contact className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StickyNavbar;