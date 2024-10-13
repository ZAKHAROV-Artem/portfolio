"use client";

import CVbutton from "@/components/ui/cv-button";
import Loader from "@/components/ui/loader";
import ProjectPopover from "@/components/ui/project-popover";
import SliderControlButton from "@/components/ui/slider-control-button";
import { cn } from "@/lib/utils";
import { wrap } from "@popmotion/popcorn";
import { AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  AboutMePage,
  MainPage,
  ProjectsPage,
  TechPage,
} from "./_components/pages";

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
        action={() => paginate(-1)}
        className="left-4"
        tooltipClassName="left-8"
        tooltipText={leftToltipText}
      >
        <MoveLeft className=" h-5 w-5 text-white duration-300 group-hover:-translate-x-2 sm:h-8 sm:w-8" />
      </SliderControlButton>
      <SliderControlButton
        action={() => paginate(1)}
        className="right-4"
        tooltipClassName="right-8"
        tooltipText={rightToltipText}
      >
        <MoveRight className=" h-5 w-5 text-white duration-300 group-hover:translate-x-2 sm:h-8 sm:w-8" />
      </SliderControlButton>
      <div
        className={cn(
          "relative h-screen w-full bg-white  delay-1000 duration-700 ",
        )}
      >
        <AnimatePresence custom={direction} initial={false}>
          {pageIndex === 0 && (
            <MainPage direction={direction} key={"main-page"} />
          )}
          {pageIndex === 1 && (
            <AboutMePage direction={direction} key={"about-me-page"} />
          )}
          {pageIndex === 2 && (
            <ProjectsPage direction={direction} key={"projects-page"} />
          )}
          {pageIndex === 3 && (
            <TechPage direction={direction} key={"tech-page"} />
          )}
        </AnimatePresence>
      </div>
      <CVbutton />

      <ProjectPopover />
    </main>
  );
}
