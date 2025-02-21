import Navbar from "./Navbar"; 
import bgImage from "../assets/images/Pattern.jpg"; 
import HeroText from "./HeroText";
import second from "../assets/Images/second.png"


const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[950px] overflow-hidden w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      
      <Navbar />

      <div className=" flex md:w-[800px] sm:w-[600px] sm:ml-[60px] lg:ml-[550px] mt-[100px] sm:mt-[40px] justify-center">
      <img src={second} alt="" />
      </div>

      <div>
      
      </div>
    </div>
  );
};

export default HeroSection;
