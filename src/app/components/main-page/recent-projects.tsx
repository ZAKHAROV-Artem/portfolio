"use client";

import { urlForImage } from "#/lib/image";
import { useProjects } from "@/hooks/queries/useProjects";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import ProjectItem from "../projects/project-item";

export default function RecentProjects() {
  const { data: projects } = useProjects();

  return (
    <div className="container space-y-20">
      <h2 className="text-white text-5xl font-bold font-slab">
        Recent projects
      </h2>
      <div className="grid grid-cols-2 gap-x-5 sm:gap-x-10 md:gap-x-20 gap-y-10 mt-10">
        {projects?.map((project) => (
          <ProjectItem project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
}
