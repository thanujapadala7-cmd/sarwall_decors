import React from "react";
import SchoolPainting from "./SchoolPainting";
import MuralSculptures from "./MuralSculptures";
import WallDecor from "./WallDecor";

const Services = () => {
  return (
    <div className="bg-white">
      {/* Page Title */}
      <div className="text-center py-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h1>
        <p className="text-gray-600">Explore the creative services we offer</p>
      </div>

      {/* School Painting Section */}
      <SchoolPainting />
      <MuralSculptures />
      <WallDecor />

    </div>
  );
};

export default Services;
