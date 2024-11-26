"use client";

import Badge from "@/components/ui/badge";
import { imageVariants, wrapperVariants } from "@/data/anim-data";
import { useTech } from "@/hooks/queries/use-tech";
import { motion } from "framer-motion";

import TechItem from "../main-page/tech-item";

type Props = {
  direction: number;
};

export default function TechPage({ direction }: Props) {
  const { data: tech } = useTech();
  return (
    <motion.div
      animate="animate"
      className="h-full max-h-screen w-full overflow-x-hidden overflow-y-scroll bg-black py-5"
      custom={direction}
      exit="exit"
      initial={"initial"}
      variants={wrapperVariants}
    >
      <div className="container relative my-5 flex h-full justify-center">
        <motion.div
          animate="animate"
          exit="exit"
          initial={"initial"}
          variants={imageVariants}
        >
          <h1 className="mb-5 text-white">
            I have over 8 years of programming experience, having worked with a
            wide range of technologies, though not all are listed here.
          </h1>
          <div className="grid  gap-10 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
            <div>
              <Badge>Frontend Development</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter(
                    (tech) => tech.category.name === "Frontend Development",
                  )
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>State Management</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter((tech) => tech.category.name === "State Management")
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Data Fetching</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter((tech) => tech.category.name === "Data Fetching")
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Forms and Validation</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter(
                    (tech) => tech.category.name === "Forms and Validation",
                  )
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>DB and ORMs</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter(
                    (tech) => tech.category.name === "Databases and ORMs",
                  )
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>CMS</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter(
                    (tech) =>
                      tech.category.name === "Content Management Systems (CMS)",
                  )
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Real-Time</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter(
                    (tech) => tech.category.name === "Real-Time Communication",
                  )
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Backend Development</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter(
                    (tech) => tech.category.name === "Backend Development",
                  )
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Testing</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter((tech) => tech.category.name === "Testing")
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Mobile Development</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter(
                    (tech) => tech.category.name === "Mobile Development",
                  )
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Other Skills</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter((tech) => tech.category.name === "Other Skills")
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Other packages</Badge>
              <div className="mt-3 grid gap-3 sm:grid-cols-1">
                {tech
                  ?.filter((tech) => tech.category.name === "Other packages")
                  .map((tech) => (
                    <TechItem key={tech._id} size="small" tech={tech} />
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
