"use client";

import { urlForImage } from "#/lib/image";
import { project } from "#/schemas/project";
import ScrollDown from "@/components/ui/scroll-down";
import { imageVariants, wrapperVariants } from "@/data/anim-data";
import { useProjects } from "@/hooks/queries/useProjects";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTech } from "@/hooks/queries/useTech";
import dayjs from "dayjs";

type Props = {
  direction: number;
};
export default function MainPage({ direction }: Props) {
  const { data: projects } = useProjects();
  const { data: tech } = useTech();
  return (
    <motion.div
      variants={wrapperVariants}
      animate="animate"
      initial={"initial"}
      key={"main-page"}
      exit="exit"
      custom={direction}
      className="max-h-screen h-full w-full overflow-x-hidden overflow-y-scroll"
    >
      <div className="relative ">
        <motion.div
          variants={imageVariants}
          animate="animate"
          initial={"initial"}
          exit="exit"
        >
          <header className="bg-black w-full h-screen relative">
            <div className="w-full relative z-40 text-white h-screen grid place-content-center">
              <span className="text-4xl">{"Hi, I'm"}</span>
              <h1 className="text-6xl sm:text-[100px] md:text-[120px]">
                Zakharov Artem
              </h1>
              <span className="text-4xl bg-ua relative text-black w-fit p-2">
                Fullstack developer
              </span>
            </div>
            <Image
              className="absolute w-80 xl:w-96 -top-10 lg:top-20 -right-4"
              src="/shape-2.png"
              quality={100}
              width={509}
              height={576}
              alt={""}
            />
            <Image
              className="absolute top-[65%] lg:block hidden left-20"
              src="/shape-3.png"
              quality={100}
              width={229}
              height={197}
              alt={""}
            />
            <Image
              className="absolute w-64 md:w-96 xl:w-[450px] top-2/3 lg:top-20 -left-20 md:-left-20 lg:-left-32 xl:-left-20"
              src="/shape-1.png"
              quality={100}
              width={559}
              height={798}
              alt={""}
            />
          </header>
        </motion.div>
        <ScrollDown className="absolute bottom-4 left-1/2 -translate-x-1/2" />
      </div>

      <div className="min-h-screen space-y-20 h-fit pt-24 lg:pt-10 pb-10 bg-black">
        <div className="container space-y-20">
          <h2 className="text-white text-5xl font-bold">Recent projects</h2>
          <div className="grid grid-cols-2 gap-x-20 gap-y-10 mt-10">
            {projects?.map((project) => (
              <div key={project._id} className="flex gap-x-3 group">
                <div className="w-[40%] flex flex-col justify-between  text-white h-80">
                  <span className="italic text-4xl">
                    {project.tech[0].name || ""}
                  </span>
                  <h3 className="text-6xl leading-none font-bold">
                    {project.name}
                  </h3>
                  <MoveUpRight
                    size={50}
                    className="group-hover:translate-x-4 group-hover:-translate-y-4 duration-300"
                  />
                </div>
                <Image
                  src={urlForImage(project.images[0])}
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-[60%] object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[200vh]">
          <div className="container">
            <Image
              className="absolute w-[750px] top-0 right-0"
              src="/tech.png"
              quality={100}
              width={960}
              height={1647}
              alt={""}
            />
            <div className="text-white">
              <span className="text-5xl">and finally,</span>
              <h2 className="text-[110px]">Tech</h2>
            </div>
            <div>
         
            <Badge>Web</Badge>
            <div className="grid grid-cols-2 gap-5 max-w-xl">
              {tech
                ?.filter((tech) => tech.category.name === "Web")
                .map((tech) => (
                  <div key={tech._id} className="flex p-2 gap-x-5 text-white">
                    <Image
                      src={urlForImage(tech.image)}
                      alt=""
                      quality={100}
                      width={85}
                      height={85}
                    />
                    <div className="">
                      <h3 className="text-4xl">{tech.name}</h3>
                      <span className="opacity-50">
                        +
                        {dayjs().diff(
                          dayjs().set("year", tech.experience),
                          "year"
                        )}{" "}
                        years of experience
                      </span>
                    </div>
                  </div>
                ))}
            </div>
               </div>
               <div>
         
            <Badge>Frameworks</Badge>
            <div className="grid grid-cols-2 gap-5 max-w-xl">
              {tech
                ?.filter((tech) => tech.category.name === "Frameworks")
                .map((tech) => (
                  <div key={tech._id} className="flex p-2 gap-x-5 text-white">
                    <Image
                      src={urlForImage(tech.image)}
                      alt=""
                      quality={100}
                      width={85}
                      height={85}
                    />
                    <div className="">
                      <h3 className="text-4xl">{tech.name}</h3>
                      <span className="text-2xl opacity-50">
                        +
                        {dayjs().diff(
                          dayjs().set("year", tech.experience),
                          "year"
                        )}{" "}
                        years of experience
                      </span>
                    </div>
                  </div>
                ))}
            </div>
               </div>
               <div>
         
         <Badge>Libraries</Badge>
         <div className="grid grid-cols-2 gap-5 max-w-xl">
           {tech
             ?.filter((tech) => tech.category.name === "Libraries")
             .map((tech) => (
               <div key={tech._id} className="flex p-2 gap-x-5 text-white">
                 <Image
                   src={urlForImage(tech.image)}
                   alt=""
                   quality={100}
                   width={85}
                   height={85}
                 />
                 <div className="">
                   <h3 className="text-4xl">{tech.name}</h3>
                   <span className="opacity-50">
                     +
                     {dayjs().diff(
                       dayjs().set("year", tech.experience),
                       "year"
                     )}{" "}
                     years of experience
                   </span>
                 </div>
               </div>
             ))}
         </div>
            </div>
            <div>
         
         <Badge>Data</Badge>
         <div className="grid grid-cols-2 gap-5 max-w-xl">
           {tech
             ?.filter((tech) => tech.category.name === "Data")
             .map((tech) => (
               <div key={tech._id} className="flex p-2 gap-x-5 text-white">
                 <Image
                   src={urlForImage(tech.image)}
                   alt=""
                   quality={100}
                   width={85}
                   height={85}
                 />
                 <div className="">
                   <h3 className="text-4xl">{tech.name}</h3>
                   <span className="opacity-50">
                     +
                     {dayjs().diff(
                       dayjs().set("year", tech.experience),
                       "year"
                     )}{" "}
                     years of experience
                   </span>
                 </div>
               </div>
             ))}
         </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
