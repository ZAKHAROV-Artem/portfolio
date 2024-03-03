"use client";
import { wrapperVariants, imageVariants } from "@/data/anim-data";
import { useProjects } from "@/hooks/queries/use-projects";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectItem from "./project-item";

type Props = {
  direction: number;
};
export default function ProjectsPage({ direction }: Props) {
  const { data: projects } = useProjects();
  return (
    <motion.div
      key={2}
      variants={wrapperVariants}
      animate="animate"
      initial={"initial"}
      exit="exit"
      custom={direction}
      className="h-full w-full overflow-y-scroll bg-black"
    >
      <div className="relative">
        <motion.div
          variants={imageVariants}
          animate="animate"
          initial={"initial"}
          exit="exit"
        >
          <div className="container my-10 grid grid-cols-2 gap-5">
            {projects?.map((project) => (
              <ProjectItem project={project} key={project._id} />
            ))}
          </div>
        </motion.div>{" "}
      </div>
    </motion.div>
  );
}
