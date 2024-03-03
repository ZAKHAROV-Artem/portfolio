"use client";
import { urlForImage } from "#/lib/image";
import { useProjectPopover } from "@/hooks/state/use-project-popover";
import { Project } from "@/types/project";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
type Props = {
  project: Project;
};
export default function ProjectItem({ project }: Props) {
  const { setProject, setTrue } = useProjectPopover();
  return (
    <div
      onClick={() => {
        setProject(project);
        console.log("change");
        setTrue();
      }}
      className="group space-y-1 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="font-amatic text-white">
          <span className="italic text-xl sm:text-2xl md:text-3xl">
            {project.tech[0].name || ""}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {project.name}
          </h3>
        </div>
        <MoveUpRight className=" text-white h-7 w-7 hidden md:block group-hover:scale-125 group-hover:rotate-180 duration-300" />{" "}
      </div>
      <Image
        src={urlForImage(project.images[0])}
        width={1920}
        height={1080}
        quality={100}
        className="opacity-0 duration-1000"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        alt=""
      />
    </div>
  );
}
