import { useState, useRef } from "react";
import forartisan from "../assets/Images/forartisan.png";
import forclient from "../assets/Images/forclient.png";
import svg from "../assets/pattern.svg";

const HowKraftaaWorksSection = () => {
  const [currentTab, setCurrentTab] = useState("client");
  const startX = useRef(0);
  const isDragging = useRef(false);
  const deltaX = useRef(0);
  const isTwoFingerSwipe = useRef(false);

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      isDragging.current = true;
      isTwoFingerSwipe.current = true;
      startX.current = (e.touches[0].clientX + e.touches[1].clientX) / 2; // Average of two touch points
      deltaX.current = 0;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !isTwoFingerSwipe.current) return;
    const clientX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    deltaX.current = startX.current - clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current || !isTwoFingerSwipe.current) return;
    isDragging.current = false;
    isTwoFingerSwipe.current = false;

    if (deltaX.current > 50) {
      setCurrentTab("artisan");
    } else if (deltaX.current < -50) {
      setCurrentTab("client");
    }
  };

  return (
    <div>
      {/* DESKTOP VIEW (Visible only on lg and above) */}
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

      {/* MOBILE VIEW (Visible only on small and medium screens) */}
      <div className="flex justify-center">
        <div
          className="bg-[#B1FA63] lg:hidden h-[550px] flex flex-col items-center text-center w-[90%] py-10 px-5 border-4 border-[#B1FA63] rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <h2 className="text-3xl font-bold text-[#1D1A3A] mb-8">How Kraftaa Works</h2>
          <div className="relative rounded-[50px] h-[250px] bg-[#1D1A3A] text-white flex flex-col items-center justify-center w-[80%] py-5 px-3">
            <div className="bg-white text-[#1D1A3A] font-bold w-[95%] h-[60px] flex items-center justify-center rounded-[50px] mt-[-40px] mb-[30px]">
              <p>{currentTab === "client" ? "For Client" : "For Artisan"}</p>
            </div>
            <div className="text-left w-full px-4">
              {currentTab === "client" ? (
                <ul className="space-y-2">
                  <li>1. Sign up as a client</li>
                  <li>2. Search for artisans near you</li>
                  <li>3. Get quality services from home or anywhere</li>
                </ul>
              ) : (
                <ul className="space-y-2">
                  <li>1. Sign up as an artisan</li>
                  <li>2. Properly set up your profile so clients can see you</li>
                  <li>3. Get paid when you finish your job</li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <button onClick={() => setCurrentTab("client")} className={`h-3 w-3 rounded-full ${currentTab === "client" ? "bg-white w-6" : "bg-[#1D1A3A] bg-opacity-50"}`} />
            <button onClick={() => setCurrentTab("artisan")} className={`h-3 w-3 rounded-full ${currentTab === "artisan" ? "bg-white w-6" : "bg-[#1D1A3A] bg-opacity-50"}`} />
          </div>
          <button className="text-white bg-[#1D1A3A] w-[80%] max-w-[300px] h-[50px] font-bold rounded-full mt-6">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HowKraftaaWorksSection;
