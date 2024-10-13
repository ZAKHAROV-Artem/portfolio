"use client";
import { useProjectPopover } from "@/hooks/state/use-project-popover";
import { Project } from "@/types/sanity";
import { urlForImage } from "#/lib/image";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

type Props = {
  project: Project;
};
export default function ProjectItem({ project }: Props) {
  const { setProject, setTrue } = useProjectPopover();
  return (
    <div
      className="group cursor-pointer space-y-1"
      onClick={() => {
        setProject(project);
        console.log("change");
        setTrue();
      }}
    >
      <div className="flex items-center justify-between">
        <div className="font-amatic text-white">
          <span className="text-xl italic sm:text-2xl md:text-3xl">
            {project.tech[0].name || ""}
          </span>
          <h3 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {project.name}
          </h3>
        </div>
        <MoveUpRight className=" hidden h-7 w-7 text-white duration-300 group-hover:rotate-180 group-hover:scale-125 md:block" />{" "}
      </div>
      <Image
        alt=""
        className="opacity-0 duration-1000"
        height={1080}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        quality={100}
        src={urlForImage(project.images[0])}
        width={1920}
      />
    </div>
  );
}
