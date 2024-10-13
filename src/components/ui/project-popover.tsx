"use client";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { components } from "@/data/components-portable-text";
import { useProjectPopover } from "@/hooks/state/use-project-popover";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "#/lib/image";
import { Minimize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";

type Props = {};
export default function ProjectPopover({}: Props) {
  const { open, project, setFalse, setOpen } = useProjectPopover();
  return (
    <Popover modal onOpenChange={setOpen} open={open}>
      <PopoverContent className="overflow-y-scroll">
        <Minimize2
          className="mb-10 h-10 w-10 cursor-pointer duration-150 hover:scale-90"
          onClick={setFalse}
        />
        <Swiper
          autoHeight={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
        >
          {project?.images.map((img) => (
            <SwiperSlide key={img._key}>
              <Image
                alt=""
                className="object-contain opacity-0 duration-1000"
                height={1000}
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
                quality={100}
                src={urlForImage(img)}
                width={1000}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-5 grid gap-5 font-slab md:grid-cols-[1.5fr,1fr]">
          <div>
            <PortableText components={components} value={project?.content} />
          </div>
          <div>
            {project?.link && (
              <>
                <h3 className="my-3 text-xl md:text-2xl">Link</h3>
                <Link
                  className="ml-3 text-purple-300 underline"
                  href={project.link}
                  target="_blank"
                >
                  {new URL(project.link).hostname}
                </Link>
              </>
            )}
            <h3 className="my-3 text-xl md:text-2xl">Tech</h3>
            <div className="flex flex-wrap gap-3 ">
              {project?.tech.map((tech) => (
                <div
                  className="cursor-default rounded-full bg-white px-5 py-2 text-sm text-black md:text-lg"
                  key={tech._id}
                >
                  {tech.name}
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
