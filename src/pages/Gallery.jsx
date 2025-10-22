import React, { useState } from "react";
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";
import g9 from "../assets/gallery/g9.jpg";
import g10 from "../assets/gallery/g10.jpg";
import g11 from "../assets/gallery/g11.jpg";
import g12 from "../assets/gallery/g12.jpg";
import g13 from "../assets/gallery/g13.jpg";
import g14 from "../assets/gallery/g14.jpg";
import g15 from "../assets/gallery/g15.jpg";
import g16 from "../assets/gallery/g16.jpg";
import g17 from "../assets/gallery/g17.jpg";
import g18 from "../assets/gallery/g18.jpg";
import g19 from "../assets/gallery/g19.jpg";

import s1 from "../assets/gallery/school/s1.jpg";
import s2 from "../assets/gallery/school/s2.jpg";
import s3 from "../assets/gallery/school/s3.jpg";
import s4 from "../assets/gallery/school/s4.jpg";
import s5 from "../assets/gallery/school/s5.jpg";
import s6 from "../assets/gallery/school/s6.jpg";
import s7 from "../assets/gallery/school/s7.jpg";
import s8 from "../assets/gallery/school/s8.jpg";
import s9 from "../assets/gallery/school/s9.jpg";
import s10 from "../assets/gallery/school/s10.jpg";
import s11 from "../assets/gallery/school/s11.jpg";
import s12 from "../assets/gallery/school/s12.jpg";
import s13 from "../assets/gallery/school/s13.jpg";
import s14 from "../assets/gallery/school/s14.jpg";
import s15 from "../assets/gallery/school/s15.jpg";
import s16 from "../assets/gallery/school/s16.jpg";
import s17 from "../assets/gallery/school/s17.jpg";

import m1 from "../assets/gallery/mural/m1.jpg";
import m2 from "../assets/gallery/mural/m2.jpg";
import m3 from "../assets/gallery/mural/m3.jpg";
import m4 from "../assets/gallery/mural/m4.jpg";
import m5 from "../assets/gallery/mural/m5.jpg";
import m6 from "../assets/gallery/mural/m6.jpg";
import m7 from "../assets/gallery/mural/m7.jpg";
import m8 from "../assets/gallery/mural/m8.jpg";
import m9 from "../assets/gallery/mural/m9.jpg";
import m10 from "../assets/gallery/mural/m10.jpg";
import m11 from "../assets/gallery/mural/m11.jpg";
import m12 from "../assets/gallery/mural/m12.jpg";
import m13 from "../assets/gallery/mural/m13.jpg";
import m14 from "../assets/gallery/mural/m14.jpg";
import m15 from "../assets/gallery/mural/m15.jpg";
import m16 from "../assets/gallery/mural/m16.jpg";
import m17 from "../assets/gallery/mural/m17.jpg";
import m18 from "../assets/gallery/mural/m18.jpg";
import m19 from "../assets/gallery/mural/m19.jpg";
import m20 from "../assets/gallery/mural/m20.jpg";
import m21 from "../assets/gallery/mural/m21.jpg";
import m22 from "../assets/gallery/mural/m22.jpg";
import m23 from "../assets/gallery/mural/m23.jpg";
import m24 from "../assets/gallery/mural/m24.jpg";
import m25 from "../assets/gallery/mural/m25.jpg";

export default function Gallery() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    g1, g2, g3, g4, g5, g6, g7, g1, g9, g10, g11, g12, g13, g13, g14, g15, g16, g17, g18, g19,
  ];

  const schoolimages = [
    s1, s2, s3, s4, s5, s6, s7, s1, s9, s10, s11, s12, s13, s13, s14, s15, s16, s17,
  ];

  const muralimages = [
    m1, m2, m3, m4, m5, m6, m7, m1, m9, m10, m11, m12, m13, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m23, m25,
  ];

  const openImageViewer = (src, list, index) => {
    setCurrentImage(src);
    setImageList(list);
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    setCurrentImage(imageList[(currentIndex + 1) % imageList.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
    setCurrentImage(imageList[(currentIndex - 1 + imageList.length) % imageList.length]);
  };

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (isViewerOpen) {
        if (event.key === "ArrowRight") nextImage();
        if (event.key === "ArrowLeft") prevImage();
        if (event.key === "Escape") closeImageViewer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isViewerOpen, currentIndex, imageList]);

  return (
    <>
      {/* Wall Painting Section */}
      <div className="bg-white dark:bg-[#0A2025] py-10 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A2025] dark:text-white mb-2">
              Wall Painting
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
                onClick={() => openImageViewer(src, images, index)}
              >
                <div className="w-full h-64 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="max-w-full max-h-full object-contain transition-transform transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Painting Section */}
      <div className="bg-white dark:bg-[#0A2025] py-10 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A2025] dark:text-white mb-2">
              School Painting
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolimages.map((src, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                onClick={() => openImageViewer(src, schoolimages, index)}
              >
                <div className="p-4 bg-gray-50 dark:bg-gray-900 h-80 flex items-center justify-center">
                  <div className="relative overflow-hidden rounded-lg border-4 border-white dark:border-gray-800 shadow-inner w-full h-full flex items-center justify-center">
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="max-w-full max-h-full object-contain transform hover:scale-105 transition duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mural Painting Section */}
      <div className="bg-white dark:bg-[#0A2025] py-10 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A2025] dark:text-white mb-2">
              Mural Painting
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {muralimages.map((src, index) => (
              <div
                key={index}
                className="p-4 bg-amber-900 rounded-lg hover:rotate-1 transition-transform duration-300 h-80 flex flex-col"
                onClick={() => openImageViewer(src, muralimages, index)}
              >
                <div className="border-8 border-amber-200 bg-amber-200 p-2 shadow-inner flex-1 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="mt-3 text-center text-amber-100">
                  <p className="font-medium">Mural {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isViewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeImageViewer}
          >
            &times;
          </button>
          <div className="flex items-center justify-center w-full">
            <button
              className="text-white text-4xl mr-4"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              &lt;
            </button>
            <img
              src={currentImage}
              alt="Full Screen"
              className="max-w-[90vw] max-h-[70vh] object-contain"
            />
            <button
              className="text-white text-4xl ml-4"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              &gt;
            </button>
          </div>
          <div className="w-full max-h-[20vh] overflow-y-auto mt-4 p-4 bg-gray-900 bg-opacity-50 flex flex-wrap justify-center">
            {imageList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover m-2 cursor-pointer ${currentIndex === index ? 'border-4 border-yellow-400' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                  setCurrentImage(img);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}