"use client";

import { urlForImage } from "#/lib/image";
import { useTech } from "@/hooks/queries/use-tech";
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
          className="absolute right-0 top-0 z-0 hidden w-[750px] select-none md:block"
          src="/tech.png"
          quality={100}
          width={960}
          height={1647}
          alt={""}
        />
        <div className="relative z-10 font-slab text-white md:max-w-xl">
          <span className="text-3xl font-black sm:text-4xl">and finally,</span>
          <h2 className="text-[120px] font-black leading-none sm:text-[200px]">
            tech.
          </h2>
          <span className="text-xl font-bold sm:text-2xl">
            In my personal journey, I already worked with some techonologies,
            and here they are:
          </span>
        </div>
        <div className="mt-5 space-y-16 xs:space-y-20 md:max-w-xl">
          <div>
            <Badge>Web</Badge>
            <div className="mt-5 grid gap-5 xs:grid-cols-2">
              {tech
                ?.filter((tech) => tech.category.name === "Web")
                .map((tech) => <TechItem tech={tech} key={tech._id} />)}
            </div>
          </div>
          <div>
            <Badge>Frameworks</Badge>
            <div className="mt-5 grid gap-5 xs:grid-cols-2">
              {tech
                ?.filter((tech) => tech.category.name === "Frameworks")
                .map((tech) => <TechItem tech={tech} key={tech._id} />)}
            </div>
          </div>
          <div>
            <Badge>Libraries</Badge>
            <div className="mt-5 grid gap-5 xs:grid-cols-2">
              {tech
                ?.filter((tech) => tech.category.name === "Libraries")
                .map((tech) => <TechItem tech={tech} key={tech._id} />)}
            </div>
          </div>
          <div>
            <Badge>Data</Badge>
            <div className="mt-5 grid gap-5 xs:grid-cols-2">
              {tech
                ?.filter((tech) => tech.category.name === "Data")
                .map((tech) => <TechItem tech={tech} key={tech._id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
