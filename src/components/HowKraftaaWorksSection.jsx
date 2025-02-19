import { useState } from "react";
import forartisan from "../assets/Images/forartisan.png";
import forclient from "../assets/Images/forclient.png";
import svg from "../assets/pattern.svg";


const HowKraftaaWorksSection = () => {
  const [currentTab, setCurrentTab] = useState('client');

  return (
    <div>
      {/* DESKTOP VIEW (Visible only on lg and above) */}
      <div className="relative hidden lg:flex justify-center mt-[200px] overflow-hidden">
        {/* Background SVGs */}
        <img
          src={svg}
          alt="Background Left"
          className="absolute top-[300px] left-0 h-full w-auto transform -translate-x-1/4"
        />
        <img
          src={svg}
          alt="Background Right"
          className="absolute top-[400px] right-0 h-full w-auto transform translate-x-1/4"
        />

        {/* Main Content */}
        <div className="bg-[#B1FA63] relative w-[70%] border-4 border-[#1EAC23] rounded-2xl py-16 h-[800px] text-center">
          {/* Header */}
          <h2 className="text-5xl font-bold mb-[100px] text-[#1D1A3A]">How Kraftaa Works</h2>

          {/* Image Container */}
          <div className="flex justify-center mb-[100px] gap-10">
            <img src={forclient} alt="Step 1" className="w-[500px] h-auto rounded-lg" />
            <img src={forartisan} alt="Step 2" className="w-[500px] h-auto rounded-lg" />
          </div>

          {/* Button */}
          <div>
            <button className="text-white bg-[#1D1A3A] w-[200px] h-[70px] rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW (Visible only on small and medium screens) */}
      <div className="flex justify-center">
        <div className="bg-[#B1FA63] lg:hidden h-[550px] flex flex-col items-center text-center w-[90%] py-10 px-5 border-4 border-[#B1FA63] rounded-2xl">
          
          {/* Header */}
          <h2 className="text-3xl font-bold text-[#1D1A3A] mb-8">
            How Kraftaa Works
          </h2>

          {/* Carousel */}
          <div className="relative rounded-[50px] h-[250px] bg-[#1D1A3A] text-white flex flex-col items-center justify-center w-[80%] py-5 px-3">
            
            {/* Tab Header */}
            <div className="bg-white text-[#1D1A3A] font-bold w-[95%] h-[60px] flex items-center justify-center rounded-[50px] mt-[-40px] mb-[30px]"> 
              <p>{currentTab === 'client' ? 'For Client' : 'For Artisan'}</p>
            </div>

            {/* Steps List */}
            <div className="text-left w-full px-4">
              {currentTab === 'client' ? (
                <ul className="space-y-2">
                  <li><span className=" bg-[#B1FA63] text-[#1D1A3A] rounded-full">1.</span> Sign up as a client</li>
                  <li><span className=" bg-[#B1FA63] text-[#1D1A3A] rounded-full">2.</span> Search for artisans near you</li>
                  <li><span className=" bg-[#B1FA63] text-[#1D1A3A] rounded-full">3.</span> Get quality services from home or anywhere</li>
                </ul>
              ) : (
                <ul className="space-y-2">
                  <li><span className=" bg-[#B1FA63] text-[#1D1A3A] rounded-full">1.</span> Sign up as an artisan</li>
                  <li><span className=" bg-[#B1FA63] text-[#1D1A3A] rounded-full">2.</span> List your services</li>
                  <li><span className=" bg-[#B1FA63] text-[#1D1A3A] rounded-full">3.</span> Get clients and earn</li>
                </ul>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-4">
            <button 
              onClick={() => setCurrentTab('client')}
              className={`w-[120px] h-[40px] rounded-full text-white font-bold transition ${
                currentTab === 'client' ? 'bg-[#1D1A3A]' : 'bg-opacity-50 bg-[#1D1A3A]'
              }`}
            >
              Client
            </button>
            <button 
              onClick={() => setCurrentTab('artisan')}
              className={`w-[120px] h-[40px] rounded-full text-white font-bold transition ${
                currentTab === 'artisan' ? 'bg-[#1D1A3A]' : 'bg-opacity-50 bg-[#1D1A3A]'
              }`}
            >
              Artisan
            </button>
          </div>

          {/* Get Started Button */}
          <button className="text-white bg-[#1D1A3A] w-[80%] max-w-[300px] h-[50px] font-bold rounded-full mt-6">
            Get Started
          </button>
  </div>
</div>

    </div>
  );
};

export default HowKraftaaWorksSection;
