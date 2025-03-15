import { Variants } from "framer-motion";

export const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideVariant: Variants = {
  hidden: (direction: number) => ({ opacity: 0, x: direction * 50 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
