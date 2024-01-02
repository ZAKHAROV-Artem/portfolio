"use client";

import ScrollDown from "@/components/ui/scroll-down";
import SliderControlButton from "@/components/ui/slider-control-button";
import { cn } from "@/lib/utils";
import { wrap } from "@popmotion/popcorn";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import MainPage from "./components/main-page/main-page";
import { imageVariants, wrapperVariants } from "@/data/anim-data";
import TechPage from "./components/tech-page/tech-page";
import { useState, useEffect } from "react";
import Loader from "@/components/ui/loader";
import AboutMePage from "./components/about-me-page/about-me-page";
import ProjectPopover from "@/components/ui/project-popover";
import ProjectsPage from "./components/projects/projects-page";

const pages = ["Home", "About me", "Projects", "Tech"];
export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const pageIndex = wrap(0, 4, page);
  const [[leftToltipText, rightToltipText], setTooltipText] = useState<
    [string, string]
  >(["Tech", "About me"]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setTimeout(() => {
      setTooltipText([
        pages.at((page + newDirection - 1) % 4) || "",
        pages.at((page + newDirection + 1) % 4) || "",
      ]);
    }, 1300);
  };
  const [loading, setLoading] = useState<boolean>(true);
  const [animStart, setAnimStart] = useState<boolean>(false);
  useEffect(() => {
    setAnimStart(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <main>
      {loading && (
        <div
          className={cn(
            " absolute z-50 h-screen w-full bg-black flex items-center duration-500 justify-center",
            {
              "opacity-0": animStart,
            }
          )}
        >
          <Loader />
        </div>
      )}
      <SliderControlButton
        tooltipText={leftToltipText}
        tooltipClassName="left-8"
        className="left-4"
        action={() => paginate(-1)}
      >
        <MoveLeft className=" w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:-translate-x-2 duration-300" />
      </SliderControlButton>
      <SliderControlButton
        tooltipText={rightToltipText}
        tooltipClassName="right-8"
        className="right-4"
        action={() => paginate(1)}
      >
        <MoveRight className=" w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:translate-x-2 duration-300" />
      </SliderControlButton>
      <div
        className={cn(
          "w-full bg-white h-screen relative  duration-700 delay-1000 "
          // {
          //   "bg-white": pageIndex === 0 || pageIndex === 2,
          //   "bg-black": pageIndex === 1 || pageIndex === 3,
          // }
        )}
      >
        <AnimatePresence initial={false} custom={direction}>
          {pageIndex === 0 && (
            <MainPage key={"main-page"} direction={direction} />
          )}
          {pageIndex === 1 && (
            <AboutMePage direction={direction} key={"about-me-page"} />
          )}
          {pageIndex === 2 && (
            <ProjectsPage direction={direction} key={"projects-page"} />
          )}
          {pageIndex === 3 && (
            <TechPage key={"tech-page"} direction={direction} />
          )}
        </AnimatePresence>
      </div>
      <ProjectPopover />
    </main>
  );
}
