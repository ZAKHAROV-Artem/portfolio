"use client";

import {
  ProjectsPage,
  AboutMePage,
  TechPage,
  MainPage,
} from "./_components/pages";
import { cn } from "@/lib/utils";
import { wrap } from "@popmotion/popcorn";
import { AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import SliderControlButton from "@/components/ui/slider-control-button";
import Loader from "@/components/ui/loader";
import ProjectPopover from "@/components/ui/project-popover";

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
            " absolute z-50 flex h-screen w-full items-center justify-center bg-black duration-500",
            {
              "opacity-0": animStart,
            },
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
        <MoveLeft className=" h-5 w-5 text-white duration-300 group-hover:-translate-x-2 sm:h-8 sm:w-8" />
      </SliderControlButton>
      <SliderControlButton
        tooltipText={rightToltipText}
        tooltipClassName="right-8"
        className="right-4"
        action={() => paginate(1)}
      >
        <MoveRight className=" h-5 w-5 text-white duration-300 group-hover:translate-x-2 sm:h-8 sm:w-8" />
      </SliderControlButton>
      <div
        className={cn(
          "relative h-screen w-full bg-white  delay-1000 duration-700 ",
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
