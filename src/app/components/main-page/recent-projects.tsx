"use client";

import { urlForImage } from "#/lib/image";
import { useProjects } from "@/hooks/queries/useProjects";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function RecentProjects() {
  const { data: projects } = useProjects();

  return (
    <div className="container space-y-20">
      <h2 className="text-white text-5xl font-bold font-slab">
        Recent projects
      </h2>
      <div className="grid grid-cols-2 gap-x-5 sm:gap-x-10 md:gap-x-20 gap-y-10 mt-10">
        {projects?.map((project) => (
          <div
            key={project._id}
            className="grid md:grid-cols-[1fr,2fr] content-between gap-y-3  gap-x-5 group"
          >
            <div className="grid md:grid-cols-1 grid-cols-[1fr,40px]  text-white md:h-80">
              <span className="italic font-amatic col-span-2 md:col-auto text-4xl">
                {project.tech[0].name || ""}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl leading-none font-bold">
                {project.name}
              </h3>
              <MoveUpRight className="w-7 self-end md:w-10 h-7 md:h-10 group-hover:translate-x-4 group-hover:-translate-y-4 duration-300" />{" "}
            </div>
            <Image
              src={urlForImage(project.images[0])}
              width={1000}
              height={1000}
              quality={100}
              className="object-contain md:h-80"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
