"use client";

import ScrollDown from "@/components/ui/scroll-down";
import { wrapperVariants, imageVariants } from "@/data/anim-data";
import { useTech } from "@/hooks/queries/useTech";
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
      className="max-h-screen bg-black py-5 h-full w-full overflow-x-hidden overflow-y-scroll"
    >
      <div className="relative flex items-center h-full container">
        <motion.div
          variants={imageVariants}
          animate="animate"
          initial={"initial"}
          exit="exit"
        >
          <div className="grid xl:grid-cols-2 gap-10">
            <div>
              <Badge>Web</Badge>
              <div className="grid mt-5 xs:grid-cols-2 gap-5">
                {tech
                  ?.filter((tech) => tech.category.name === "Web")
                  .map((tech) => (
                    <TechItem tech={tech} key={tech._id} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Frameworks</Badge>
              <div className="grid mt-5 xs:grid-cols-2 gap-5">
                {tech
                  ?.filter((tech) => tech.category.name === "Frameworks")
                  .map((tech) => (
                    <TechItem tech={tech} key={tech._id} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Libraries</Badge>
              <div className="grid mt-5 xs:grid-cols-2 gap-5">
                {tech
                  ?.filter((tech) => tech.category.name === "Libraries")
                  .map((tech) => (
                    <TechItem tech={tech} key={tech._id} />
                  ))}
              </div>
            </div>
            <div>
              <Badge>Data</Badge>
              <div className="grid mt-5 xs:grid-cols-2 gap-5">
                {tech
                  ?.filter((tech) => tech.category.name === "Data")
                  .map((tech) => (
                    <TechItem tech={tech} key={tech._id} />
                  ))}
              </div>
            </div>
          </div>
        </motion.div>{" "}
      </div>
    </motion.div>
  );
}
