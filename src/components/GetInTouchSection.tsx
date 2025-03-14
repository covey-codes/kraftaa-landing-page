import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { headers } from "../Constants"; // ✅ Fixed Import Path

// Define header type correctly
interface Header {
  key: string;
  title: React.ReactNode; // Allow JSX content in title
}

// Ensure headers is correctly typed
const typedHeaders: Header[] = headers as Header[]; // Explicitly cast headers

const GetInTouchSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null); // ✅ Fixed Type
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // ✅ Corrected useInView Usage

  // ✅ Explicitly define `custom` type in Variants
  const slideInVariant: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: (custom?: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: (custom ?? 0) * 0.3,
        ease: "easeOut",
      },
    }),
  };

  // Find the correct header by key
  const headerText: React.ReactNode =
    typedHeaders.find((header) => header.key === "getInTouch")?.title ||
    "Get In Touch";

  return (
    <div ref={ref} className="px-6 py-12 overflow-hidden">
      {/* Animated Text */}
      <motion.div
        variants={slideInVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
        className="text-center mb-7"
      >
        <p className="text-2xl md:text-5xl text-ink sm:text-3xl font-bold">
          {headerText}
        </p>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        variants={slideInVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
