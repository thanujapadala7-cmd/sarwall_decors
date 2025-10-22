import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Services from "../src/pages/services/service";
import SchoolPainting from "./pages/services/SchoolPainting";
import MuralSculptures from "./pages/services/MuralSculptures";
import WallDecor from "./pages/services/WallDecor";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Contactus from "./pages/Contactus";

function AppRoutes() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />  
        
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/school-painting" element={<SchoolPainting />} />
          <Route path="/services/mural-sculptures" element={<MuralSculptures />} />
            <Route path="/services/wall-decor" element={<WallDecor />} />
             <Route path="/blogs" element={<Blogs/>} />
             <Route path="/gallery" element={<Gallery/>} />
             <Route path="/portfolio" element={<Portfolio/>} />
 <Route path="/contact" element={<Contactus/>} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRoutes;
