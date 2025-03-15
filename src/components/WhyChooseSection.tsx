import React, { useState } from "react";
import { motion } from "framer-motion";
import { headers } from "../Constants/index";
import { fadeInUpVariant, slideVariant } from "../Animations/whyChooseVariants";

const images = [
  "/carouselfirst.png",
  "/carouselsecond.png",
  "/carouselthird.png",
];

const WhyChoose: React.FC = () => {
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
      {headers.map((header) =>
        header.key === "whyChoose" ? (
          <motion.div
            key={header.key}
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-7"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl mb-[50px] font-bold">
              {header.title}
            </p>
          </motion.div>
        ) : null
      )}

      <motion.div
        variants={slideVariant}
        initial="hidden"
        whileInView="visible"
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
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <div className="w-[70%] mx-auto h-[70%]">
                <img
                  src={image}
                  alt={`carousel-item-${index}`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-10">
          <motion.button
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={-1}
            onClick={prevSlide}
            className="bg-[#B1FA63] bg-opacity-70 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            onClick={nextSlide}
            className="bg-[#6828B0] bg-opacity-70 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChoose;
