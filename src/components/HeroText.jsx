import design1 from "../assets/Images/Frame 37179.png";
import design2 from "../assets/images/logodesign.png";

const HeroText = () => {
  return (
    <foreignObject x="50%" y="50%" width="400" height="400" transform="translate(-200, -200)">
      <div xmlns="http://www.w3.org/1999/xhtml" className="flex flex-col items-center w-[400px] h-[400px]">
        
        <div className="w-[350px]">
          <img src={design1} alt="Design 1" />
        </div>

        <div className="w-[450px]">
          <img src={design2} alt="Design 2" />
        </div>

        <div className="text-center mt-2">
          <p className="text-xs lg:text-[1.45rem] sm:text-xl md:text-2xl text-[#5C6378] font-semibold">Your Personal Connection to Local Experts</p>
        </div>

        <div>
          <button className="bg-gradient-to-r from-[#8407BA] to-[#6828B0] mt-[70px] text-white rounded-full w-[250px] px-6 py-4 hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </foreignObject>
  );
};

export default HeroText;
