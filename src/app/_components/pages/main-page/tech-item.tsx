import { urlForImage } from "#/lib/image";
import { Tech } from "@/types/tech";
import dayjs from "dayjs";
import Image from "next/image";

type Props = {
  tech: Tech;
};
export default function TechItem({ tech }: Props) {
  return (
    <div className="flex relative z-10 p-2 gap-x-5 text-white">
      <Image
        src={urlForImage(tech.image)}
        alt=""
        quality={100}
        width={85}
        height={85}
        className="object-contain"
      />
      <div className="">
        <h3 className="text-xl md:text-2xl font-bold">{tech.name}</h3>
        <span className="text-lg md:text-xl opacity-50">
          + {Math.ceil(dayjs().diff(dayjs(`${tech.experience}`), "month") / 12)}{" "}
          years of experience
        </span>
      </div>
    </div>
  );
}
