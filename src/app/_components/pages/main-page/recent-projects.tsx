"use client";

import { useProjects } from "@/hooks/queries/use-projects";

import ProjectItem from "../projects-page/project-item";

export default function RecentProjects() {
  const { data: projects } = useProjects();

  return (
    <div className="container space-y-10">
      <h2 className="font-slab text-5xl font-bold text-white">
        Recent projects
      </h2>
      <div className="grid grid-cols-2 gap-10">
        {projects
          ?.slice(0, 4)
          .map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
      </div>
    </div>
  );
}
