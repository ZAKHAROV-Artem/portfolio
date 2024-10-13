import { cubicBezier } from "framer-motion";

export const wrapperVariants = {
  animate: {
    scale: 1,
    transition: {
      scale: {
        delay: 2.4,
        duration: 0.8,
        ease: cubicBezier(0.12, 0.53, 0.24, 0.99),
      },
      x: {
        delay: 1.4,
        duration: 1,
      },
    },
    x: "0%",
  },
  exit: (direction: number) => {
    return {
      scale: 0.65,
      transition: {
        scale: {
          duration: 0.8,
          ease: cubicBezier(0.5, 0, 0, 1),
        },
        x: {
          delay: 0.9,
          duration: 0.5,
          ease: "easeIn",
        },
      },
      x: direction > 0 ? "-100%" : "100%",
    };
  },
  initial: (direction: number) => {
    return {
      scale: 0.65,
      x: direction > 0 ? "100%" : "-100%",
    };
  },
};
export const imageVariants = {
  animate: {
    scale: 1,
    transition: {
      scale: {
        delay: 2.4,
        duration: 0.8,
        ease: cubicBezier(0.12, 0.53, 0.24, 0.99),
      },
    },
  },
  exit: (direction: number) => {
    return {
      scale: 1.25,
      transition: {
        scale: {
          duration: 0.8,
          ease: cubicBezier(0.5, 0, 0, 1),
        },
        x: {
          delay: 0.75,
          duration: 0.6,
          ease: "easeIn",
        },
      },
      x: direction > 0 ? 350 : -350,
    };
  },
  initial: (direction: number) => {
    return {
      scale: 1.25,
    };
  },
};
