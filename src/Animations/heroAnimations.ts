import { Variants } from "framer-motion";

export const slideInVariant: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.3, ease: "easeOut" },
  }),
};
