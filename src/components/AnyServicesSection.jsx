import React from 'react';
import categg from '../assets/Images/Categg.png';

const AnyServicesSection = () => {
  return (
    <div className="h-[1900px] relative hidden md:block">
      <div className="h-[20%] bg-white"></div>
      <div className="h-[60%] bg-[#1D1A3A] relative">
        {/* Green Background Div */}
        <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 bg-[#B1FA63] border-2 border-[#1EAC23] w-[70%] lg:w-[90%] h-[80%] rounded-3xl shadow-lg grid grid-cols-2 grid-rows-2 p-[30px]">
          
          {/* Top-Left: Text Section */}
          <div className="flex mt-[-100px] flex-col justify-center">
            <p className="text-6xl font-bold text-[#1D1A3A]">
              Any <span className="text-[#6828B0]">service</span> you need <br /> all in one <span className='text-[#6828B0]'>place</span>
            </p>
          </div>

          {/* Top-Right: Adjusted Text Section */}
          <div className="flex  flex-col justify-center">
            <p className="text-3xl font-semibold text-[#1D1A3A]">
              With <span className="font-bold text-[#6828B0]">Kraftaa</span>, you will find a wide range of <br />services you need whether at home or at <br /> work you can book from anywhere.
            </p>
          </div>

          {/* Bottom-Left: Image */}
          <div className="mt-[-90px]">
            <img src={categg} alt="Services" className="w-[70%]" />
          </div>

          {/* Bottom-Right: Search Bar & Small Boxes */}
          <div>
            <div>

            </div>
          <div className="m-[20px]">
            {/* Search Bar */}
            <input 
              type="text" 
              placeholder="Find artisan..." 
              className="w-full p-2 bg-transparent border-2 border-black md:rounded-full rounded-full focus:outline-none focus:ring-2 "
            />

            {/* Small Rounded Boxes */}
            <div className="flex flex-wrap gap-2 mt-4">
  {[
    "Generator repair", "Fridge repair", "CCTV installation", "Cobler", "Gardening", 
    "Hair dresser", "Laundry", "Pedicure", "Electrician", "Plumber", 
    "Barber", "Cleaner", "Tailor", "Baker", "Painter", "Welder", 
    "Nail tech", "Cook", "Carpenter", "More..."
  ].map((service, index) => (
    <div 
      key={index} 
      className={`lg:px-7 hover:bg-white/50 duration-500 px-4 py-2 rounded-full text-sm w-fit cursor-pointer md:text-base border-2 border-black ${
        service === "More..." ? "bg-white brightness-110" : "bg-[#B1FA63] text-black"
      }`}
    >
      {service}
    </div>
  ))}
</div>
          </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default AnyServicesSection;
