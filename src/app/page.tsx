"use client";

import ScrollDown from "@/components/ui/scroll-down";
import SliderControlButton from "@/components/ui/slider-control-button";
import { cn } from "@/lib/utils";
import { wrap } from "@popmotion/popcorn";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import MainPage from "./components/main-page";
import { imageVariants, wrapperVariants } from "@/data/anim-data";

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const pageIndex = wrap(0, 4, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <main>
      <SliderControlButton className="left-4" action={() => paginate(-1)}>
        <MoveLeft
          className="text-white group-hover:-translate-x-2 duration-300"
          size={30}
        />
      </SliderControlButton>
      <SliderControlButton className="right-4" action={() => paginate(1)}>
        <MoveRight
          className="text-white group-hover:translate-x-2 duration-300"
          size={30}
        />
      </SliderControlButton>
      <div
        className={cn("w-full h-screen relative  duration-700 delay-1000 ", {
          "bg-white": pageIndex === 0 || pageIndex === 2,
          "bg-black": pageIndex === 1 || pageIndex === 3,
        })}
      >
        <AnimatePresence initial={false} custom={direction}>
          {pageIndex === 0 && <MainPage direction={direction} />}
          {pageIndex === 1 && (
            <motion.div
              key={1}
              variants={wrapperVariants}
              animate="animate"
              initial={"initial"}
              exit="exit"
              custom={direction}
              className="max-h-screen h-full w-full overflow-y-scroll"
            >
              <div className="relative">
                <motion.div
                  variants={imageVariants}
                  animate="animate"
                  initial={"initial"}
                  exit="exit"
                >
                  <Image
                    src="/2.jpg"
                    width={1800}
                    height={1119}
                    alt="Puma"
                    className="select-none h-screen object-cover"
                  />
                </motion.div>{" "}
                <ScrollDown className="absolute bottom-4 left-1/2 -translate-x-1/2" />
              </div>
              <div className="h-screen bg-green-300 w-full"></div>
            </motion.div>
          )}
          {pageIndex === 2 && (
            <motion.div
              key={2}
              variants={wrapperVariants}
              animate="animate"
              initial={"initial"}
              exit="exit"
              custom={direction}
              className="max-h-screen h-full w-full overflow-y-scroll"
            >
              <div className="relative">
                <motion.div
                  variants={imageVariants}
                  animate="animate"
                  initial={"initial"}
                  exit="exit"
                >
                  <Image
                    src="/3.jpg"
                    width={1800}
                    height={1119}
                    alt="Puma"
                    className="select-none h-screen object-cover"
                  />
                </motion.div>{" "}
                <ScrollDown className="absolute bottom-4 left-1/2 -translate-x-1/2" />
              </div>

              <div className="h-screen bg-blue-300 w-full"></div>
            </motion.div>
          )}
          {pageIndex === 3 && (
            <motion.div
              key={1}
              variants={wrapperVariants}
              animate="animate"
              initial={"initial"}
              exit="exit"
              custom={direction}
              className="max-h-screen h-full w-full overflow-y-scroll"
            >
              <div className="relative">
                <motion.div
                  variants={imageVariants}
                  animate="animate"
                  initial={"initial"}
                  exit="exit"
                >
                  <Image
                    src="/2.jpg"
                    width={1800}
                    height={1119}
                    alt="Puma"
                    className="select-none h-screen object-cover"
                  />
                </motion.div>{" "}
                <ScrollDown className="absolute bottom-4 left-1/2 -translate-x-1/2" />
              </div>
              <div className="h-screen bg-green-300 w-full"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
