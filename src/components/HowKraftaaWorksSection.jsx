import forartisan from "../assets/Images/forartisan.png";
import forclient from "../assets/Images/forclient.png";
import svg from "../assets/pattern.svg";

const HowKraftaaWorksSection = () => {
  return (
    <div>
      {/* DESKTOP VIEW (Visible only on lg and above) */}
      <div className="relative hidden lg:flex justify-center">
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
      <div className="bg-[#B1FA63] lg:hidden flex flex-col items-center text-center w-full py-10 px-5 border-4 border-[#1EAC23] rounded-2xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#1D1A3A] mb-8">How Kraftaa Works</h2>

        {/* Images (Stacked on Mobile) */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <img src={forclient} alt="For Clients" className="w-[80%] h-auto rounded-lg" />
          <img src={forartisan} alt="For Artisans" className="w-[80%] h-auto rounded-lg" />
        </div>

        {/* Button */}
        <button className="text-white bg-[#1D1A3A] w-[80%] max-w-[300px] h-[50px] rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HowKraftaaWorksSection;
