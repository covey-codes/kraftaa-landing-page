import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { slideInVariants } from "../Animations/howKraftaaWorksVariants";
import { headers } from "../Constants/index";

type Tab = "client" | "artisan";

const HowKraftaaWorksSection = () => {
  const [currentTab, setCurrentTab] = useState<Tab>("client");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (scrollTimeout.current) return;

      setCurrentTab((prevTab) =>
        event.deltaY > 0 && prevTab !== "artisan"
          ? "artisan"
          : event.deltaY < 0 && prevTab !== "client"
          ? "client"
          : prevTab
      );

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 500);
    },
    []
  );

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={slideInVariants}
      className="overflow-hidden"
    >
      <div className="relative hidden lg:flex justify-center mt-[200px]">
        <img
          src="/pattern.svg"
          alt="Background Left"
          className={`absolute top-[300px] left-0 h-full w-auto transform -translate-x-1/4 transition-all duration-1000 ${
            isVisible ? "translate-x-0 opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="/pattern.svg"
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
            <img
              src="/forclient.png"
              alt="Step 1"
              className="w-[500px] h-auto rounded-lg"
            />
            <img
              src="/forartisan.png"
              alt="Step 2"
              className="w-[500px] h-auto rounded-lg"
            />
          </div>
          <button className="text-white bg-[#1D1A3A] w-[200px] h-[70px] rounded-full">
            Get Started
          </button>
        </div>
      </div>

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

          <div className="relative w-full overflow-hidden">
            <div
              className="flex w-[200%] transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  currentTab === "client"
                    ? "translateX(0)"
                    : "translateX(-50%)",
              }}
            >
              <TabContent
                title="For Client"
                steps={[
                  "Sign up as a client",
                  "Search for artisans near you",
                  "Get quality services from home or anywhere",
                ]}
              />
              <TabContent
                title="For Artisan"
                steps={[
                  "Sign up as an artisan",
                  "Properly set up your profile so clients can see you",
                  "Get paid when you finish your job",
                ]}
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <NavButton
              isActive={currentTab === "client"}
              onClick={() => setCurrentTab("client")}
            />
            <NavButton
              isActive={currentTab === "artisan"}
              onClick={() => setCurrentTab("artisan")}
            />
          </div>

          <button className="text-white bg-[#1D1A3A] w-[200px] max-w-[300px] h-[50px] font-bold rounded-full mt-6">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

interface TabContentProps {
  title: string;
  steps: string[];
}

const TabContent = ({ title, steps }: TabContentProps) => (
  <div className="w-[50%] rounded-[50px] h-[250px] bg-[#1D1A3A] text-white flex flex-col items-center justify-center py-5 px-5">
    <div className="bg-white text-[#1D1A3A] font-bold w-[100%] h-[60px] flex items-center justify-center rounded-[50px] mt-[-20px] mb-[30px]">
      <p>{title}</p>
    </div>
    <ul className="text-left w-full px-4 space-y-2">
      {steps.map((step, index) => (
        <li key={index}>{`${index + 1}. ${step}`}</li>
      ))}
    </ul>
  </div>
);

interface NavButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const NavButton = ({ isActive, onClick }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={`h-3 w-3 rounded-full transition-all ${
      isActive ? "bg-white w-6" : "bg-[#1D1A3A] bg-opacity-50"
    }`}
  />
);

export default HowKraftaaWorksSection;
