import design1 from "../assets/Images/Frame 37179.png";
import design2 from "../assets/images/logodesign.png";

const HeroText = () => {
  return (
    <foreignObject x="50%" y="50%" width="300" height="300" transform="translate(-150, -150)">
      <div xmlns="http://www.w3.org/1999/xhtml" className="flex flex-col items-center w-[300px] h-[300px]">
        
        <div className="w-[300px]">
          <img src={design1} alt="Design 1" />
        </div>

        
        <div>
          <img src={design2} alt="Design 2" />
        </div>

        
        <div className="text-center mt-2">
          <p>Your Personal Connection to Local Experts</p>
        </div>

        
        <div>
          <button className="bg-gradient-to-r from-[#8407BA] to-[#6828B0] mt-4 text-white rounded-full w-[200px] px-6 py-5 hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </foreignObject>
  );
};

export default HeroText;
