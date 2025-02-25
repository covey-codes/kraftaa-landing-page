import React, { useState } from "react";
import { motion } from "framer-motion"; 
import img1 from "../assets/images/carouselfirst.png";
import img2 from "../assets/images/carouselsecond.png";
import img3 from "../assets/images/carouselthird.png";
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
            <p className="sm:text-4xl mb-[100px] font-bold">{header.title}</p>
          </motion.div>
        ) : null
      )}

      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="m-[-30px]"
      >
        <div className="relative flex justify-center max-w-[1000px] mx-auto">
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

          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={prevSlide}
            className="absolute sm:top-[470px] sm:left-[530px] top-1/2 lg:left-[80px] transform -translate-y-1/2 bg-[#B1FA63] bg-opacity-70 text-white px-4 py-2 rounded-full flex items-center justify-center w-12 h-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={nextSlide}
            className="absolute sm:top-[470px] sm:right-[70px] top-1/2 right-11 transform -translate-y-1/2 bg-[#6828B0] bg-opacity-70 text-white px-4 py-2 rounded-full flex items-center justify-center w-12 h-12"
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
