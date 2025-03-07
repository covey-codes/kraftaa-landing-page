import React from "react";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnyServicesSection = () => {
  return (
    <>
      {/* Mobile & Tablet Version */}
      <div className="bg-[rgb(29,26,58)] bg-opacity-100 overflow-x-clip lg:hidden py-10 px-6">
        <div className="relative mx-auto bg-[#B1FA63] border-2 border-[#1EAC23] rounded-3xl w-[90%] max-w-[600px] shadow-lg py-10 px-6 grid gap-6">
          <motion.div initial="hidden" animate="visible" variants={slideInVariants} className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#1D1A3A] leading-tight">
              Any <span className="text-[#6828B0]">service</span> you need all in one <span className="text-[#6828B0]">place</span>
            </p>
            <motion.img src="/Categg.png" alt="Services" className="w-[80%] md:w-[60%] max-w-[300px] mx-auto mt-5" variants={slideInVariants} />
            <p className="mt-6 text-base md:text-lg text-[#1D1A3A]">
              With <span className="font-bold text-[#6828B0]">Kraftaa</span>, you will find a wide range of services you need whether at home or at work. You can book from anywhere.
            </p>
          </motion.div>

          {/* Input field & Artisan list */}
          <motion.div initial="hidden" animate="visible" variants={slideInVariants} className="grid gap-4">
            <input
              type="text"
              placeholder="Find artisan..."
              className="w-full p-2 bg-transparent border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["Generator repair", "Fridge repair", "CCTV installation", "Gardening", "Laundry", "Electrician", "Plumber", "Painter", "Tailor", "Cook", "More..."].map((service, index) => (
                <motion.div
                  key={index}
                  className={`px-3 py-2 rounded-full text-xs md:text-sm cursor-pointer border-2 border-black text-center ${service === "More..." ? "bg-white brightness-110" : "bg-[#B1FA63] text-black"}`}
                  variants={slideInVariants}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:grid bg-[#060624] h-[1500px] place-items-center">
        <div className="h-[20%] bg-white w-full"></div>
        <div className="h-[60%] bg-[#1D1A3A] relative w-full grid place-items-center">
          <div className="absolute top-[-20%] bg-[#B1FA63] border-2 border-[#1EAC23] w-[90%] max-w-[1200px] h-auto rounded-3xl shadow-lg grid grid-cols-2 gap-10 p-[30px]">
            <motion.div initial="hidden" animate="visible" variants={slideInVariants} className="self-center">
              <p className="text-5xl font-bold text-[#1D1A3A]">
                Any <span className="text-[#6828B0]">service</span><br /> you need <br /> all in one <br /> <span className="text-[#6828B0]">place</span>
              </p>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={slideInVariants} className="self-center">
              <p className="text-[30px] font-semibold text-[#1D1A3A]">
                With <span className="font-bold text-[#6828B0]">Kraftaa</span>, you will find a wide range of services you need whether at home or at work. You can book from anywhere.
              </p>
            </motion.div>
            <motion.img src="/Categg.png" alt="Services" className="w-[70%] ml-auto mr-auto h-auto" initial="hidden" animate="visible" variants={slideInVariants} />
            <motion.div initial="hidden" animate="visible" variants={slideInVariants} className="grid gap-4">
              <input
                type="text"
                placeholder="Find artisan..."
                className="w-full p-2 bg-transparent border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="grid grid-cols-3 gap-2">
                {["Generator repair", "Fridge repair", "CCTV installation", "Cobler", "Gardening", "Hair dresser", "Laundry", "Pedicure", "Electrician", "Plumber", "Barber", "Cleaner", "Tailor", "Baker", "Painter", "Welder", "Nail tech", "Cook", "Carpenter", "More..."].map((service, index) => (
                  <motion.div
                    key={index}
                    className={`lg:px-7 hover:bg-white/50 duration-500 px-4 py-2 rounded-full text-sm cursor-pointer border-2 border-black text-center ${service === "More..." ? "bg-white brightness-110" : "bg-[#B1FA63] text-black"}`}
                    variants={slideInVariants}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnyServicesSection;
