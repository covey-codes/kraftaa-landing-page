import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { slideInVariant } from "../Animations/heroAnimations";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center max-h-[1000px] overflow-hidden w-full"
      style={{ backgroundImage: `url("/Pattern.jpg")` }}
    >
      <Navbar />

      <div className="relative flex justify-center mb-[150px] mt-[150px] m-5 w-full max-w-[600px] mx-auto md:max-w-[600px] lg:max-w-full">
        <img
          src="/second.png"
          alt="Second Image"
          className="w-[90%] md:w-[500px] lg:w-[600px]"
        />

        <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-[70%] flex flex-col justify-center items-center gap-3">
          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="bg-white border text-black font-semibold rounded-[50px] lg:h-14 h-10 p-5 lg:w-[400px] mt-[20px] lg:mt-[60px] md:w-[600px] flex flex-row items-center justify-between gap-4"
          >
            <div className="flex flex-row items-center gap-2">
              <img
                src="/locationmark.png"
                alt="Location"
                className="w-[20px] h-[20px]"
              />
              <p className="text-sm md:text-base lg:text-lg whitespace-nowrap">
                Find Artisan
              </p>
            </div>

            <div className="hidden lg:block w-[2px] h-[30px] bg-gray-300"></div>

            <div className="flex flex-row pl-[30px] items-center gap-1">
              <img
                src="/clipper.svg"
                alt="Category Icon"
                className="w-[20px] h-[20px]"
              />
              <p className="text-sm md:text-base lg:text-lg whitespace-nowrap">
                Barber <span className="text-gray-500">etc...</span>
              </p>
            </div>
          </motion.div>

          {/* 2️⃣ Logo */}
          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={1}
            className="w-[80%] md:w-[250px] lg:w-[400px]"
          >
            <img src="/logodesign.png" alt="Logo" />
          </motion.div>

          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-[#5C6378] text-center whitespace-nowrap font-semibold text-sm md:text-base lg:text-lg"
          >
            <p>Your Personal Connection to Local Experts</p>
          </motion.div>

          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex justify-center items-center relative"
          >
            <div className="absolute lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] border-2 border-[#8407BA] rounded-full"></div>

            <button className="relative bg-gradient-to-r from-[#8407BA] to-[#6828B0] text-white cursor-pointer rounded-full lg:w-[150px] w-[110px] md:w-[130px] lg:h-[50px] h-[40px] md:h-[45px] transition-all duration-500 lg:hover:w-[200px] hover:w-[150px] text-sm p-4 whitespace-nowrap font-semibold lg:hover:h-[60px] hover:h-[50px] flex items-center justify-center">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
