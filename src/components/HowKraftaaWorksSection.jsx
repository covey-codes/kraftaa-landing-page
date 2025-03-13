import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { headers } from "../Constants";

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HowKraftaaWorksSection = () => {
  const [currentTab, setCurrentTab] = useState("client");
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleScroll = (event) => {
    setCurrentTab((prevTab) => {
      if (event.deltaY > 0 && prevTab !== "artisan") {
        return "artisan";
      } else if (event.deltaY < 0 && prevTab !== "client") {
        return "client";
      }
      return prevTab; // Prevent unnecessary re-renders
    });
  };
  

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={slideInVariants}
      className="overflow-hidden"
    >
      {/* Desktop View */}
      <div className="relative hidden lg:flex justify-center mt-[200px]">
        <img
          src='/pattern.svg'
          alt="Background Left"
          className={`absolute top-[300px] left-0 h-full w-auto transform -translate-x-1/4 transition-all duration-1000 ${
            isVisible ? "translate-x-0 opacity-100" : "opacity-0"
          }`}
        />
        <img
          src='/pattern.svg'
          alt="Background Right"
          className={`absolute top-[400px] right-0 h-full w-auto transform translate-x-1/4 transition-all duration-1000 ${
            isVisible ? "translate-x-0 opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`bg-[#B1FA63] relative w-[70%] border-4 border-[#1EAC23] rounded-2xl py-16 h-[800px] text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold mb-[100px] text-[#1D1A3A]">
            {headers.find((h) => h.key === "howKraftaaWorks")?.title}
          </h2>
          <div className="flex justify-center mb-[100px] gap-10">
            <img src='/forclient.png' alt="Step 1" className="w-[500px] h-auto rounded-lg" />
            <img src='/forartisan.png' alt="Step 2" className="w-[500px] h-auto rounded-lg" />
          </div>
          <button className="text-white bg-[#1D1A3A] w-[200px] h-[70px] rounded-full">Get Started</button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex justify-center">
        <div
          ref={carouselRef}
          onWheel={handleScroll}
          className={`bg-[#B1FA63] lg:hidden h-[550px] flex flex-col items-center text-center w-[90%] py-10 px-5 border-4 border-[#B1FA63] rounded-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-[#1D1A3A] mb-8">
            {headers.find((h) => h.key === "howKraftaaWorks")?.title}
          </h2>

          {/* Content */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex w-[200%] transition-transform duration-500 ease-in-out"
              style={{ transform: currentTab === "client" ? "translateX(0)" : "translateX(-50%)" }}
            >
              <div className="w-[50%] rounded-[50px] h-[250px] bg-[#1D1A3A] text-white flex flex-col items-center justify-center py-5 px-5">
                <div className="bg-white text-[#1D1A3A] font-bold w-[100%] h-[60px] flex items-center justify-center rounded-[50px] mt-[-20px] mb-[30px]">
                  <p>For Client</p>
                </div>
                <ul className="text-left w-full px-4 space-y-2">
                  <li>1. Sign up as a client</li>
                  <li>2. Search for artisans near you</li>
                  <li>3. Get quality services from home or anywhere</li>
                </ul>
              </div>

              <div className="w-[50%] rounded-[50px] h-[250px] bg-[#1D1A3A] text-white flex flex-col items-center justify-center py-5 px-3">
                <div className="bg-white text-[#1D1A3A] font-bold w-[100%] h-[60px] flex items-center justify-center rounded-[50px] mt-[-20px] mb-[30px]">
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
            <button onClick={() => setCurrentTab("client")} className={`h-3 w-3 rounded-full transition-all ${currentTab === "client" ? "bg-white w-6" : "bg-[#1D1A3A] bg-opacity-50"}`} />
            <button onClick={() => setCurrentTab("artisan")} className={`h-3 w-3 rounded-full transition-all ${currentTab === "artisan" ? "bg-white w-6" : "bg-[#1D1A3A] bg-opacity-50"}`} />
          </div>

          <button className="text-white bg-[#1D1A3A] w-[200px] max-w-[300px] h-[50px] font-bold rounded-full mt-6">Get Started</button>
        </div>
      </div>
    </motion.div>
  );
};

export default HowKraftaaWorksSection;
