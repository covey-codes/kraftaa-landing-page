import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { headers } from "../Constants";
import { slideInVariant } from "../Animations/getInTouchVariants";

interface Header {
  key: string;
  title: React.ReactNode;
}

const typedHeaders: Header[] = headers as Header[];

const GetInTouchSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headerText: React.ReactNode =
    typedHeaders.find((header) => header.key === "getInTouch")?.title ||
    "Get In Touch";

  return (
    <div ref={ref} className="px-6 py-12 overflow-hidden">
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
