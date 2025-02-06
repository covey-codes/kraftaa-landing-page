import React from 'react';
import categg from '../assets/Images/Categg.png';

const AnyServicesSection = () => {
  return (
    <div className="h-screen relative hidden md:block">
      <div className="h-[20%] bg-white"></div>
      <div className="h-[60%] bg-[#1D1A3A] relative">
        {/* Green Background Div */}
        <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 bg-[#B1FA63] border-2 border-[#1EAC23] w-[70%] lg:w-[60%] h-[90%] rounded-3xl shadow-lg grid grid-cols-2 grid-rows-2 p-[30px]">
          
          {/* Top-Left: Text Section */}
          <div className="flex m-10 flex-col justify-center">
            <p className="text-4xl font-bold text-[#1D1A3A]">
              Any <span className="text-[#1EAC23]">service</span> you need <br /> all in one place
            </p>
          </div>

          {/* Top-Right: Adjusted Text Section */}
          <div className="flex m-10 flex-col justify-center">
            <p className="text-2xl text-[#1D1A3A]">
              With <span className="font-bold text-[#1EAC23]">Kraftaa</span>, you will find a wide range of <br />services you need whether at home or at <br /> work you can book from anywhere.
            </p>
          </div>

          {/* Bottom-Left: Image */}
          <div className="m-[20px]">
            <img src={categg} alt="Services" className="w-[50%]" />
          </div>

          {/* Bottom-Right: Search Bar & Small Boxes */}
          <div className="m-[20px]">
            {/* Search Bar */}
            <input 
              type="text" 
              placeholder="Find artisan..." 
              className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1EAC23]"
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
                  className="bg-[#B1FA63] text-black px-3 py-1 rounded-full text-sm border border-black"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnyServicesSection;
