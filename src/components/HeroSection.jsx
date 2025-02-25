import { motion } from "framer-motion"; // Import Framer Motion
import Navbar from "./Navbar";

import second from "../assets/images/second.png";
import locationmark from "../assets/images/locationmark.png";
import logodesign from "../assets/images/logodesign.png";
import clipper from "../assets/clipper.svg";

const HeroSection = () => {
  // Animation variants for sliding in from the right
  const slideInVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: i * 0.3, ease: "easeOut" },
    }),
  };

  return (
    <div
   className="relative bg-cover bg-center sm:h-[800px] lg:h-[950px] overflow-hidden w-full"
   style={{ backgroundImage: `url("/Pattern.jpg")` }}
 >

      <Navbar />

      {/* Image Container */}
      <div className="relative flex justify-center mt-[100px] sm:mt-[40px]">
        <img src={second} alt="Second Image" className="lg:w-[800px] sm:w-[600px]" />

        {/* Overlayed Content */}
        <div className="absolute top-[20%] left-[10%] w-[80%] flex flex-col justify-center items-center gap-4">
          
          {/* 1️⃣ White Box */}
          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={0} // Delay index 0
            className="p-4 bg-white border text-black font-semibold rounded-[50px] sm:h-[70px] lg:h-[80px] sm:w-[80%] lg:w-[35%] lg:mt-[70px] md:w-[600px] flex flex-row items-center"
          >
            {/* Find Artisan Section */}
            <div className="flex flex-row items-center pl-5 pr-[50px] gap-1">
              <img src={locationmark} alt="Location" className="w-[30px] h-[30px]" />
              <p className="text-lg">Find Artisan</p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-[30px] bg-gray-300"></div>

            {/* Category Section */}
            <div className="flex flex-row pl-[30px] items-center gap-1">
              <img src={clipper} alt="Category Icon" className="w-[24px] h-[24px]" />
              <p className="text-lg">Barber <span className="text-gray-500">etc...</span></p>
            </div>
          </motion.div>

          {/* 2️⃣ Logo */}
          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={1} // Delay index 1
            className="sm:w-[400px]"
          >
            <img src={logodesign} alt="Logo" />
          </motion.div>

          {/* 3️⃣ Tagline */}
          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={2} // Delay index 2
            className="text-[#5C6378] text-center font-semibold"
          >
            <p>Your Personal Connection to Local Experts</p>
          </motion.div>

          {/* 4️⃣ Get Started Button */}
          <motion.div
            variants={slideInVariant}
            initial="hidden"
            animate="visible"
            custom={3} // Delay index 3
            className="mt-[5px] flex justify-center items-center relative"
          >
            {/* Outer Purple Border */}
            <div className="absolute w-[200px] h-[60px] border-2 border-[#8407BA] rounded-full"></div>

            {/* Button (Expands on Hover) */}
            <button className="relative bg-gradient-to-r from-[#8407BA] to-[#6828B0] text-white 
                cursor-pointer rounded-full w-[150px] h-[50px] transition-all duration-500 
                hover:w-[200px] hover:h-[60px] flex items-center justify-center">
              Get Started
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
