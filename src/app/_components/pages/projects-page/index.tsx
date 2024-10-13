"use client";
import { imageVariants, wrapperVariants } from "@/data/anim-data";
import { useProjects } from "@/hooks/queries/use-projects";
import { motion } from "framer-motion";

import ProjectItem from "./project-item";

type Props = {
  direction: number;
};
export default function ProjectsPage({ direction }: Props) {
  const { data: projects } = useProjects();
  return (
    <motion.div
      animate="animate"
      className="h-full w-full overflow-y-scroll bg-black"
      custom={direction}
      exit="exit"
      initial={"initial"}
      key={2}
      variants={wrapperVariants}
    >
      <div className="relative">
        <motion.div
          animate="animate"
          exit="exit"
          initial={"initial"}
          variants={imageVariants}
        >
          <div className="container my-10 grid grid-cols-2 gap-5">
            {projects?.map((project) => (
              <ProjectItem key={project._id} project={project} />
            ))}
          </div>
        </motion.div>{" "}
      </div>
    </motion.div>
  );
}
