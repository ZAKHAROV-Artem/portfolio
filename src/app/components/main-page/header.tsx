"use client";

import SocialMedia from "@/components/complex/social-media";
import ScrollDown from "@/components/ui/scroll-down";
import { imageVariants } from "@/data/anim-data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative ">
      <motion.div
        variants={imageVariants}
        animate="animate"
        initial={"initial"}
        exit="exit"
      >
        <header className="bg-black w-full h-screen relative">
          <div className="w-full relative z-40 text-white h-screen flex flex-col items-center justify-center">
            <span className="text-md sm:text-2xl text-center leading-loose font-organic-relief uppercase">
              {"Hi, I'm"}
            </span>
            <h1 className="sm:my-3 md:my-5 xl:my-7 leading-loose font-organic-relief text-center uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Zakharov Artem
            </h1>
            <span className="text-xl sm:text-2xl md:text-4xl text-center bg-ua bg-clip-text text-transparent relative p-2">
              Fullstack developer
            </span>
            <SocialMedia />
          </div>
          <Image
            className="absolute w-80 xl:w-88 -top-20 sm:-top-10 xl:top-10 -right-20 sm:-right-4"
            src="/shape-2.png"
            quality={100}
            width={509}
            height={576}
            alt={""}
            priority
          />
          <Image
            className="absolute top-[65%] xl:block hidden left-20"
            src="/shape-3.png"
            quality={100}
            width={229}
            height={197}
            alt={""}
            priority
          />
          <Image
            className="absolute w-80 md:w-96 -left-20 md:-left-10 top-[59%] sm:top-[57%] xl:top-0 xl:left-0"
            src="/shape-1.png"
            quality={100}
            width={559}
            height={798}
            alt={""}
            priority
          />
        </header>
      </motion.div>
      <ScrollDown className="absolute bottom-4 left-1/2 -translate-x-1/2" />
    </div>
  );
}
