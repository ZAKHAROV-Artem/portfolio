"use client";

import { urlForImage } from "#/lib/image";
import { useTech } from "@/hooks/queries/useTech";
import dayjs from "dayjs";
import Image from "next/image";
import TechItem from "./tech-item";
import Badge from "@/components/ui/badge";

export default function Tech() {
  const { data: tech } = useTech();

  return (
    <div className="relative">
      <div className="container">
        <Image
          className="absolute select-none hidden md:block w-[750px] z-0 top-0 right-0"
          src="/tech.png"
          quality={100}
          width={960}
          height={1647}
          alt={""}
        />
        <div className="text-white relative z-10 font-slab md:max-w-xl">
          <span className="text-3xl sm:text-4xl font-black">and finally,</span>
          <h2 className="text-[120px] sm:text-[200px] font-black leading-none">
            tech.
          </h2>
          <span className="text-xl sm:text-2xl font-bold">
            In my personal journey, I already worked with some techonologies,
            and here they are:
          </span>
        </div>
        <div className="space-y-16 xs:space-y-20 mt-5 md:max-w-xl">
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
      </div>
    </div>
  );
}
