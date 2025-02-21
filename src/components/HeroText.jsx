import design1 from "../assets/Images/Frame 37179.png";
import design2 from "../assets/images/logodesign.png";

const HeroText = () => {
  return (
    <foreignObject x="50%" y="50%" width="400" height="400" transform="translate(-200, -200)">
      <div xmlns="http://www.w3.org/1999/xhtml" className="flex overflow-hidden flex-col items-center w-[400px] h-[400px]">
        
        <div className="w-[350px]">
          <img src={design1} alt="Design 1" />
        </div>

        <div className="w-[450px]">
          <img src={design2} alt="Design 2" />
        </div>

        <div className="text-center mt-2">
          <p className="text-xs lg:text-[1.45rem] sm:text-[1.28rem] md:text-xl text-[#5C6378] font-semibold">Your Personal Connection to Local Experts</p>
        </div>

        <div className="relative mt-[50px] flex justify-center items-center">
  {/* Outer Purple Border */}
  <div className="absolute w-[285px] h-[75px] border-2 border-[#8407BA] rounded-full"></div>

  {/* Button Wrapper with White Space */}
  <div className="relative flex justify-center items-center w-[265px] h-[60px] bg-white rounded-full">
    {/* Button (Expands on Hover) */}
    <button className="bg-gradient-to-r  from-[#8407BA] to-[#6828B0] text-white cursor-pointer rounded-full w-[250px] h-[50px] transition-all duration-300 hover:w-[300px] hover:h-[80px]">
      Get Started
    </button>
  </div>
</div>




      </div>
    </foreignObject>
  );
};

export default HeroText;
