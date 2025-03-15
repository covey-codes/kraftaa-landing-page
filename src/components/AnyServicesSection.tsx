import React from "react";
import { motion } from "framer-motion";
import { slideInVariants } from "../Animations/anyServicesVariants";

const AnyServicesSection: React.FC = () => {
  return (
    <>
      <div className="bg-white h-[300px] overflow-hidden lg:hidden"></div>
      <div className="bg-[rgb(29,26,58)] bg-opacity-100 overflow-x-clip lg:hidden py-10 px-6">
        <div className="relative mx-auto top-[-150px] bg-[#B1FA63] border-2 border-[#1EAC23] rounded-3xl w-[90%] max-w-[600px] shadow-lg py-10 px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInVariants}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-[#1D1A3A] leading-tight">
              Any <span className="text-[#6828B0]">service</span> you need all
              in one <span className="text-[#6828B0]">place</span>
            </p>
            <div className="w-full mt-5 flex justify-center">
              <motion.img
                src="/Categg.png"
                alt="Services"
                className="w-[80%] md:w-[60%] max-w-[300px]"
                variants={slideInVariants}
              />
            </div>
            <p className="mt-6 text-base md:text-lg text-[#1D1A3A]">
              With <span className="font-bold text-[#6828B0]">Kraftaa</span>,
              you will find a wide range of services you need whether at home or
              at work. You can book from anywhere.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInVariants}
            className="mt-6"
          >
            <input
              type="text"
              placeholder="Find artisan..."
              className="w-full p-2 bg-transparent border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {[
                "Generator repair",
                "Fridge repair",
                "CCTV installation",
                "Gardening",
                "Laundry",
                "Electrician",
                "Plumber",
                "Painter",
                "Tailor",
                "Cook",
                "More...",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`px-3 py-2 rounded-full text-xs md:text-sm w-fit cursor-pointer border-2 border-black text-center ${
                    service === "More..."
                      ? "bg-white brightness-110"
                      : "bg-[#B1FA63] text-black"
                  }`}
                  variants={slideInVariants}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block overflow-hidden bg-[#060624] h-[1500px]">
        <div className="h-[20%] bg-white"></div>
        <div className="h-[60%] bg-[#1D1A3A] relative">
          <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 bg-[#B1FA63] border-2 border-[#1EAC23] w-[90%] h-[100%] rounded-3xl shadow-lg grid md:grid-cols-1 lg:grid-cols-2 gap-6 p-[30px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInVariants}
              className="flex flex-col justify-center"
            >
              <p className="text-5xl font-bold text-[#1D1A3A]">
                Any <span className="text-[#6828B0]">service</span> you need{" "}
                <br /> all in one <br />{" "}
                <span className="text-[#6828B0]">place</span>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInVariants}
              className="flex flex-col justify-center"
            >
              <p className="text-[30px] font-semibold text-[#1D1A3A]">
                With <span className="font-bold text-[#6828B0]">Kraftaa</span>,
                you will find a wide range of services you need whether at home
                or at work. You can book from anywhere.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInVariants}
              className="flex justify-center"
            >
              <img
                src="/Categg.png"
                alt="Services"
                className="w-[70%] ml-[-100px] h-[80%] mt-[100px]"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInVariants}
            >
              <input
                type="text"
                placeholder="Find artisan..."
                className="w-full p-2 bg-transparent border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {[
                  "Generator repair",
                  "Fridge repair",
                  "CCTV installation",
                  "Cobler",
                  "Gardening",
                  "Hair dresser",
                  "Laundry",
                  "Pedicure",
                  "Electrician",
                  "Plumber",
                  "Barber",
                  "Cleaner",
                  "Tailor",
                  "Baker",
                  "Painter",
                  "Welder",
                  "Nail tech",
                  "Cook",
                  "Carpenter",
                  "More...",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className={`lg:px-7 hover:bg-white/50 duration-500 px-4 py-2 rounded-full text-sm w-fit cursor-pointer border-2 border-black text-center ${
                      service === "More..."
                        ? "bg-white brightness-110"
                        : "bg-[#B1FA63] text-black"
                    }`}
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
