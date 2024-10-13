"use client";

import CVbutton from "@/components/ui/cv-button";
import ScrollDown from "@/components/ui/scroll-down";
import SocialMedia from "@/components/ui/social-media";
import { imageVariants } from "@/data/anim-data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative ">
      <motion.div
        animate="animate"
        exit="exit"
        initial={"initial"}
        variants={imageVariants}
      >
        <header className="relative h-screen w-full bg-black">
          <div className="relative z-40 flex h-screen w-full flex-col items-center justify-center text-white">
            <span className="text-md text-center font-organic-relief uppercase leading-loose sm:text-2xl">
              {"Hi, I'm"}
            </span>
            <h1 className="text-center font-organic-relief text-2xl uppercase leading-loose sm:my-3 sm:text-3xl md:my-5 md:text-4xl lg:text-5xl xl:my-7">
              Zakharov Artem
            </h1>
            <span className="relative bg-ua bg-clip-text p-2 text-center text-xl text-transparent sm:text-2xl md:text-4xl">
              Fullstack developer
            </span>
            <SocialMedia />
          </div>
          <Image
            alt={""}
            className="xl:w-88 absolute -right-20 -top-20 w-80 sm:-right-4 sm:-top-10 xl:top-10"
            height={576}
            priority
            quality={100}
            src="/shape-2.png"
            width={509}
          />
          <Image
            alt={""}
            className="absolute left-20 top-[65%] hidden xl:block"
            height={197}
            priority
            quality={100}
            src="/shape-3.png"
            width={229}
          />
          <Image
            alt={""}
            className="absolute -left-20 top-[59%] w-80 sm:top-[57%] md:-left-10 md:w-96 xl:left-0 xl:top-0"
            height={798}
            priority
            quality={100}
            src="/shape-1.png"
            width={559}
          />
        </header>
      </motion.div>
      <ScrollDown className="absolute bottom-4 left-1/2 -translate-x-1/2" />
    </div>
  );
}
