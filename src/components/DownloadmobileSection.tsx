import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialIcons = [
  "/facebook.svg",
  "/instagram.svg",
  "/tiktok.svg",
  "/linkedin.svg",
  "/twitter.svg",
];

const DownloadmobileSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="flex flex-col items-center overflow-hidden lg:hidden"
      >
        <div className="w-[200px]">
          <img src="/kraftaalogo.png" alt="Kraftaa Logo" />
        </div>
        <p className="text-black text-center font-normal md:text-2xl md:font-medium sm:text-xl">
          Download Kraftaa mobile app for easy tracking...
        </p>
        <div className="mt-[40px] flex justify-center w-full">
          <div className="w-[280px] flex flex-col items-center">
            <img className="m-5" src="/googleplay.png" alt="Google Play" />
            <img className="m-5" src="/applestore.png" alt="Apple Store" />
          </div>
        </div>
        <div className="flex justify-between m-[40px] w-[200px]">
          {socialIcons.map((icon, index) => (
            <img key={index} src={icon} alt={`Social Media ${index + 1}`} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="hidden lg:flex flex-col items-center"
      >
        <div className="w-[300px]">
          <img src="/kraftaalogo.png" alt="Kraftaa Logo" />
        </div>
        <p className="text-black text-3xl">
          Download Kraftaa mobile app for easy tracking...
        </p>
        <div className="mt-[60px] flex w-full items-center justify-center gap-10">
          <div className="w-[350px]">
            <img src="/mobile.png" alt="Mobile Preview" />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="mb-6 w-[500px]"
              src="/googleplay.png"
              alt="Google Play"
            />
            <img
              className="w-[500px]"
              src="/applestore.png"
              alt="Apple Store"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[50px] mb-10 w-[300px]">
          {socialIcons.map((icon, index) => (
            <img key={index} src={icon} alt={`Social Media ${index + 1}`} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadmobileSection;
