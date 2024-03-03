import { urlForImage } from "#/lib/image";
import { Tech } from "@/types/sanity";
import dayjs from "dayjs";
import Image from "next/image";

type Props = {
  tech: Tech;
};
export default function TechItem({ tech }: Props) {
  return (
    <div className="relative z-10 flex gap-x-5 p-2 text-white">
      <Image
        src={urlForImage(tech.image)}
        alt=""
        quality={100}
        width={85}
        height={85}
        className="object-contain"
      />
      <div className="">
        <h3 className="text-xl font-bold md:text-2xl">{tech.name}</h3>
        <span className="text-lg opacity-50 md:text-xl">
          + {Math.ceil(dayjs().diff(dayjs(`${tech.experience}`), "month") / 12)}{" "}
          years of experience
        </span>
      </div>
    </div>
  );
}
