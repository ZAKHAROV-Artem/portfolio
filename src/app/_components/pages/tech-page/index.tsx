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
      <div className="container relative my-5 flex h-full items-center">
        <motion.div
          animate="animate"
          exit="exit"
          initial={"initial"}
          variants={imageVariants}
        >
          <div className="grid gap-10 xl:grid-cols-2">
            <div>
              <Badge>Web</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Web")
                  .map((tech) => <TechItem key={tech._id} tech={tech} />)}
              </div>
            </div>
            <div>
              <Badge>Frameworks</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Frameworks")
                  .map((tech) => <TechItem key={tech._id} tech={tech} />)}
              </div>
            </div>
            <div>
              <Badge>Libraries</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Libraries")
                  .map((tech) => <TechItem key={tech._id} tech={tech} />)}
              </div>
            </div>
            <div>
              <Badge>Data</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Data")
                  .map((tech) => <TechItem key={tech._id} tech={tech} />)}
              </div>
            </div>
          </div>
        </motion.div>{" "}
      </div>
    </motion.div>
  );
}
