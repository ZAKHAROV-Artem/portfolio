"use client";
import { urlForImage } from "#/lib/image";
import { useProjectPopover } from "@/state/project-popover-state";
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
      className="grid md:grid-cols-[1fr,2fr] content-between gap-y-3  gap-x-5 group"
    >
      <div className="grid md:grid-cols-1 grid-cols-[1fr,40px]  text-white md:h-80">
        <span className="italic font-amatic col-span-2 md:col-auto text-4xl">
          {project.tech[0].name || ""}
        </span>
        <h3 className="text-3xl  lg:text-4xl xl:text-5xl leading-none font-bold">
          {project.name}
        </h3>
        <MoveUpRight className="w-7 self-end md:w-10 h-7 md:h-10 group-hover:translate-x-4 group-hover:-translate-y-4 duration-300" />{" "}
      </div>
      <Image
        src={urlForImage(project.images[0])}
        width={1000}
        height={1000}
        quality={100}
        className="object-contain md:h-80 opacity-0 duration-1000"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        alt=""
      />
    </div>
  );
}
