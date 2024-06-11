"use client";

import ScrollDown from "@/components/ui/scroll-down";
import { wrapperVariants, imageVariants } from "@/data/anim-data";
import { useTech } from "@/hooks/queries/use-tech";
import { motion } from "framer-motion";
import Image from "next/image";
import TechItem from "../main-page/tech-item";
import Badge from "@/components/ui/badge";

type Props = {
  direction: number;
};
export default function TechPage({ direction }: Props) {
  const { data: tech } = useTech();
  return (
    <motion.div
      variants={wrapperVariants}
      animate="animate"
      initial={"initial"}
      exit="exit"
      custom={direction}
      className="h-full max-h-screen w-full overflow-x-hidden overflow-y-scroll bg-black py-5"
    >
      <div className="container relative my-5 flex h-full items-center">
        <motion.div
          variants={imageVariants}
          animate="animate"
          initial={"initial"}
          exit="exit"
        >
          <div className="grid gap-10 xl:grid-cols-2">
            <div>
              <Badge>Web</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Web")
                  .map((tech) => <TechItem tech={tech} key={tech._id} />)}
              </div>
            </div>
            <div>
              <Badge>Frameworks</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Frameworks")
                  .map((tech) => <TechItem tech={tech} key={tech._id} />)}
              </div>
            </div>
            <div>
              <Badge>Libraries</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Libraries")
                  .map((tech) => <TechItem tech={tech} key={tech._id} />)}
              </div>
            </div>
            <div>
              <Badge>Data</Badge>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {tech
                  ?.filter((tech) => tech.category.name === "Data")
                  .map((tech) => <TechItem tech={tech} key={tech._id} />)}
              </div>
            </div>
          </div>
        </motion.div>{" "}
      </div>
    </motion.div>
  );
}
