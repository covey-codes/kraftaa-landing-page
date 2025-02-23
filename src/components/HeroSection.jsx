import Navbar from "./Navbar"; 
import bgImage from "../assets/images/Pattern.jpg"; 
import second from "../assets/Images/second.png";
import locationmark from "../assets/Images/locationmark.png";
import logodesign from "../assets/Images/logodesign.png";
import clipper from "../assets/clipper.svg";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center sm:h-[800px] lg:h-[950px] overflow-hidden w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      {/* Image Container */}
      <div className="relative flex justify-center mt-[100px] sm:mt-[40px]">
        <img src={second} alt="Second Image" className="lg:w-[800px] sm:w-[600px]" />

        {/* Overlayed Div inside Second Image */}
        <div className="absolute top-[20%] left-[10%] w-[80%] flex flex-col justify-center items-center gap-4">
          
          {/* White Box with 4 Columns */}
          <div className="p-4 bg-white border text-black font-semibold rounded-[50px]  sm:h-[70px] sm:w-[80%] md:w-[600px] flex flex-row items-center">
            
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
          </div>

          {/* Logo */}
          <div className="sm:w-[400px]">
            <img src={logodesign} alt="Logo" />
          </div>

          {/* Tagline */}
          <div className="text-[#5C6378] text-center font-semibold">
            <p>Your Personal Connection to Local Experts</p>
          </div>

          {/* Get Started Button */}
          <div className="mt-[5px] flex justify-center items-center relative">
            {/* Outer Purple Border */}
            <div className="absolute w-[200px] h-[60px] border-2 border-[#8407BA] rounded-full"></div>

            {/* Button (Expands on Hover) */}
            <button className="relative bg-gradient-to-r from-[#8407BA] to-[#6828B0] text-white 
                cursor-pointer rounded-full w-[150px] h-[50px] transition-all duration-500 
                hover:w-[200px] hover:h-[60px] flex items-center justify-center">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
