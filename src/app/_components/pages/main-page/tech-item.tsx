import { urlForImage } from "#/lib/image";
import { Tech } from "@/types/sanity";
import dayjs from "dayjs";
import Image from "next/image";

type Props = {
  size?: "large" | "small";
  tech: Tech; 
};

export default function TechItem({ size = "large", tech }: Props) {
  const imageSize = size === "small" ? 30 : 85; 
  const textSize = size === "small" ? "text-sm" : "text-lg";
  const fontSize = size === "small" ? "text-xs" : "text-lg";

  return (
    <div className="relative z-10 flex gap-x-3 p-2 text-white items-center">
      {tech.image && (

        <Image
        alt={tech.name}
        className="object-contain"
        height={imageSize}
        quality={100}
        src={urlForImage(tech.image)}
        width={imageSize}
        />
      )}
      <div>
        <h3 className={`${textSize} font-semibold`}>{tech.name}</h3>
        {tech.experience && (
          <span className={`${fontSize} opacity-70 md:text-base`}>
          + {Math.ceil(dayjs().diff(dayjs(`${tech.experience}`), "month") / 12)}{" "}
          years of experience
        </span>
        )}
      </div>
    </div>
  );
}
