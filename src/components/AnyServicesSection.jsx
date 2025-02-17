import React from "react";
import categg from "../assets/Images/Categg.png";

const AnyServicesSection = () => {
  return (
    <>
      {/* Mobile Version (Only visible on small screens) */}
      <div className="bg-black h-20s"></div>
      <div className="block md:hidden bg-[#B1FA63] border-2 border-[#1EAC23] rounded-3xl w-[95%] ml-5 shadow-lg py-10 px-6">
        <div className="mt-5 ">
          <p className="text-4xl font-bold text-[#1D1A3A]">
            Any <span className="text-[#6828B0]">service</span> you need all in one <span className="text-[#6828B0]">place</span>
          </p>
          <div className="w-[700px] mt-5">
            <img src={categg} alt="Services" className="w-[80%]" />
          </div>
          <p className="mt-6 text-2xl text-[#1D1A3A]">
            With <span className="font-bold text-[#6828B0]">Kraftaa</span>, you will find a wide range of services you need whether at home or at work. You can book from anywhere.
          </p>
        </div>
        <div className="mt-6">
          <input type="text" placeholder="Find artisan..." className="w-full p-2 bg-transparent border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black" />
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Generator repair", "Fridge repair", "CCTV installation", "Cobler", "Gardening", "Hair dresser", "Laundry", "Pedicure", "Electrician", "Plumber", "Barber", "Cleaner", "Tailor", "Baker", "Painter", "Welder", "Nail tech", "Cook", "Carpenter", "More..."].map((service, index) => (
              <div key={index} className={`px-4 py-2 rounded-full text-sm w-fit cursor-pointer border-2 border-black ${service === "More..." ? "bg-white brightness-110" : "bg-[#B1FA63] text-black"}`}>{service}</div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Desktop Version (Only visible on larger screens) */}
      <div className="hidden md:block bg-[#060624] h-[1500px]">
        <div className="h-[20%] bg-white"></div>
        <div className="h-[60%] bg-[#1D1A3A] relative">
          <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 bg-[#B1FA63] border-2 border-[#1EAC23] w-[90%] h-[100%] rounded-3xl shadow-lg grid grid-cols-2 grid-rows-2 p-[30px]">
            <div className="flex -mt-24 ml-[90px] flex-col justify-center">
              <p className="text-6xl font-bold text-[#1D1A3A]">
                Any <span className="text-[#6828B0]">service</span> you need <br /> all in one <span className="text-[#6828B0]">place</span>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-3xl -mt-20 font-semibold text-[#1D1A3A]">
                With <span className="font-bold text-[#6828B0]">Kraftaa</span>, you will find a wide range of services you need whether at home or at work. You can book from anywhere.
              </p>
            </div>
            <div className="-mt-20 flex justify-center">
              <img src={categg} alt="Services" className="w-[70%]" />
            </div>
            <div className="-mt-[35px]">
              <input type="text" placeholder="Find artisan..." className="w-full p-2 bg-transparent border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black" />
              <div className="flex flex-wrap gap-2 mt-4">
                {["Generator repair", "Fridge repair", "CCTV installation", "Cobler", "Gardening", "Hair dresser", "Laundry", "Pedicure", "Electrician", "Plumber", "Barber", "Cleaner", "Tailor", "Baker", "Painter", "Welder", "Nail tech", "Cook", "Carpenter", "More..."].map((service, index) => (
                  <div key={index} className={`lg:px-7 hover:bg-white/50 duration-500 px-4 py-2 rounded-full text-sm w-fit cursor-pointer border-2 border-black ${service === "More..." ? "bg-white brightness-110" : "bg-[#B1FA63] text-black"}`}>{service}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnyServicesSection;
