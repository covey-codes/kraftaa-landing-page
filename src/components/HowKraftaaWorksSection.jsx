import { useState, useRef } from "react";
import forartisan from "../assets/Images/forartisan.png";
import forclient from "../assets/Images/forclient.png";
import svg from "../assets/pattern.svg";

const HowKraftaaWorksSection = () => {
  const [currentTab, setCurrentTab] = useState("client");
  const startX = useRef(0);
  const deltaX = useRef(0);
  const isDragging = useRef(false);

  // Detect small & medium screens
  const isSmallOrMediumScreen = () => window.matchMedia("(max-width: 768px)").matches;

  // Start touch event
  const handleTouchStart = (e) => {
    if (!isSmallOrMediumScreen()) return;
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  // Track movement
  const handleTouchMove = (e) => {
    if (!isDragging.current || !isSmallOrMediumScreen()) return;
    deltaX.current = startX.current - e.touches[0].clientX;
  };

  // End touch event (detects swipe direction)
  const handleTouchEnd = () => {
    if (!isDragging.current || !isSmallOrMediumScreen()) return;
    isDragging.current = false;

    if (deltaX.current > 50) {
      setCurrentTab("artisan");
    } else if (deltaX.current < -50) {
      setCurrentTab("client");
    }
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="relative hidden lg:flex justify-center mt-[200px] overflow-hidden">
        <img src={svg} alt="Background Left" className="absolute top-[300px] left-0 h-full w-auto transform -translate-x-1/4" />
        <img src={svg} alt="Background Right" className="absolute top-[400px] right-0 h-full w-auto transform translate-x-1/4" />

        <div className="bg-[#B1FA63] relative w-[70%] border-4 border-[#1EAC23] rounded-2xl py-16 h-[800px] text-center">
          <h2 className="text-5xl font-bold mb-[100px] text-[#1D1A3A]">How Kraftaa Works</h2>
          <div className="flex justify-center mb-[100px] gap-10">
            <img src={forclient} alt="Step 1" className="w-[500px] h-auto rounded-lg" />
            <img src={forartisan} alt="Step 2" className="w-[500px] h-auto rounded-lg" />
          </div>
          <button className="text-white bg-[#1D1A3A] w-[200px] h-[70px] rounded-full">Get Started</button>
        </div>
      </div>

      {/* Mobile View (Swipe-enabled carousel) */}
      <div className="flex justify-center">
        <div
          className="bg-[#B1FA63] lg:hidden h-[550px] flex flex-col items-center text-center w-[90%] py-10 px-5 border-4 border-[#B1FA63] rounded-2xl overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <h2 className="text-3xl font-bold text-[#1D1A3A] mb-8">How Kraftaa Works</h2>

          {/* Swipeable Container */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex w-[200%] transition-transform duration-500 ease-in-out"
              style={{ transform: currentTab === "client" ? "translateX(0)" : "translateX(-50%)" }}
            >
              {/* Client Content */}
              <div className="w-[50%] flex-shrink-0 rounded-[50px] h-[250px] bg-[#1D1A3A] text-white flex flex-col items-center justify-center py-5 px-3">
                <div className="bg-white text-[#1D1A3A] font-bold w-[95%] h-[60px] flex items-center justify-center rounded-[50px] mt-[-40px] mb-[30px]">
                  <p>For Client</p>
                </div>
                <ul className="text-left w-full px-4 space-y-2">
                  <li>1. Sign up as a client</li>
                  <li>2. Search for artisans near you</li>
                  <li>3. Get quality services from home or anywhere</li>
                </ul>
              </div>

              {/* Artisan Content */}
              <div className="w-[50%] flex-shrink-0 rounded-[50px] h-[250px] bg-[#1D1A3A] text-white flex flex-col items-center justify-center py-5 px-3">
                <div className="bg-white text-[#1D1A3A] font-bold w-[95%] h-[60px] flex items-center justify-center rounded-[50px] mt-[-40px] mb-[30px]">
                  <p>For Artisan</p>
                </div>
                <ul className="text-left w-full px-4 space-y-2">
                  <li>1. Sign up as an artisan</li>
                  <li>2. Properly set up your profile so clients can see you</li>
                  <li>3. Get paid when you finish your job</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setCurrentTab("client")}
              className={`h-3 w-3 rounded-full transition-all ${
                currentTab === "client" ? "bg-white w-6" : "bg-[#1D1A3A] bg-opacity-50"
              }`}
            />
            <button
              onClick={() => setCurrentTab("artisan")}
              className={`h-3 w-3 rounded-full transition-all ${
                currentTab === "artisan" ? "bg-white w-6" : "bg-[#1D1A3A] bg-opacity-50"
              }`}
            />
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
