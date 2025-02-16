import { useState } from "react";
import forartisan from "../assets/Images/forartisan.png";
import forclient from "../assets/Images/forclient.png";
import svg from "../assets/pattern.svg";
import forartisanbox from "../assets/Images/forartisanbox.png";
import forclientbox from "../assets/Images/forclientbox.png";

const HowKraftaaWorksSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const mobileImages = [forartisanbox, forclientbox];

  return (
    <div>
      {/* DESKTOP VIEW (Visible only on lg and above) */}
      <div className="relative hidden lg:flex justify-center overflow-hidden">
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
        <div className=" bg-[#B1FA63] lg:hidden flex flex-col items-center text-center w-[80%] py-10 px-5 border-4 border-[#B1FA63] rounded-2xl">
          {/* Header */}
          <h2 className="text-3xl font-bold text-[#6828B0] mb-8">
            How <span className="text-[#6828B0]">Kraftaa</span> Works
          </h2>

          {/* Carousel */}
          <div className="relative flex justify-center w-full">
            <img
              src={mobileImages[activeImage]}
              alt="Mobile Carousel"
              className="w-[80%] h-auto rounded-lg transition-all duration-800"
            />
          </div>

          {/* Navigation Dots */}
          <div className="flex mt-4 gap-2">
            {mobileImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-4 h-4 rounded-full ${
                  activeImage === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Button */}
          <button className="text-[#6828B0] bg-[white] w-[80%] max-w-[300px] h-[50px] font-bold rounded-full mt-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowKraftaaWorksSection;
