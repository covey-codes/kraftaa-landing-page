import React, { useState } from "react";
import { motion } from "framer-motion"; 
import img1 from "/carouselfirst.png";
import img2 from "/carouselsecond.png";
import img3 from "/carouselthird.png";
import { headers } from "../Constants"; // Import headers

const images = [img1, img2, img3];

const WhyChoose = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-6 py-12 overflow-hidden">
      {/* Header Text */}
      {headers.map((header) =>
        header.key === "whyChoose" ? (
          <motion.div
            key={header.key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-7"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl mb-[50px] font-bold">{header.title}</p>
          </motion.div>
        ) : null
      )}

      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex justify-center max-w-[1000px] mx-auto"
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <div className="w-[70%] mx-[90px] h-[70%]">
                <img src={image} alt={`carousel-item-${index}`} className="w-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Now Fully Responsive */}
        <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-10">
          {/* Left Button */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={prevSlide}
            className="bg-[#B1FA63] bg-opacity-70 text-white p-3 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Right Button */}
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={nextSlide}
            className="bg-[#6828B0] bg-opacity-70 text-white p-3 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

      </motion.div>
    </div>
  );
};

export default WhyChoose;
