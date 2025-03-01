import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { headers } from "../Constants"; // Import headers

const GetInTouchSection = () => {
  const ref = useRef(null); // Reference for tracking visibility
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when visible

  // Animation variants for sliding in from the right
  const slideInVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: i * 0.3, ease: "easeOut" },
    }),
  };

  // Find the correct header by key
  const headerText = headers.find((header) => header.key === "getInTouch")?.title;

  return (
    <div ref={ref} className="px-6 py-12 overflow-hidden">
      
      {/* Animated Text */}
      <motion.div
        variants={slideInVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        custom={0}
        className="text-center mb-7"
      >
        <p className="text-2xl md:text-5xl text-ink sm:text-3xl font-bold">
          {headerText} {/* Use imported header */}
        </p>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        variants={slideInVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        custom={1}
        className="mx-auto w-[90%]"
      >
        <img
          src="/dashboardpic.jpg"
          alt="Dashboard"
          className="mx-auto w-full max-h-[800px] object-contain"
        />
      </motion.div>

    </div>
  );
};

export default GetInTouchSection;
