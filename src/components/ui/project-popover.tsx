"use client";
import { urlForImage } from "#/lib/image";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { useProjectPopover } from "@/state/project-popover-state";
import { Minimize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import { components } from "@/data/components-portable-text";

type Props = {};
export default function ProjectPopover({}: Props) {
  const { open, setOpen, project, setFalse } = useProjectPopover();
  return (
    <Popover open={open} modal onOpenChange={setOpen}>
      <PopoverContent className="overflow-y-scroll">
        <Minimize2
          className="w-10 h-10 hover:scale-90 duration-150 mb-10 cursor-pointer"
          onClick={setFalse}
        />
        <Swiper
          spaceBetween={0}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          slidesPerView={1}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
          }}
          autoHeight={true}
        >
          {project?.images.map((img) => (
            <SwiperSlide key={img._key}>
              <Image
                src={urlForImage(img)}
                width={1000}
                height={1000}
                quality={100}
                className="object-contain opacity-0 duration-1000"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-5 font-slab grid md:grid-cols-[1.5fr,1fr] gap-5">
       
         <div>
          <PortableText value={project?.content} components={components} />
         </div>
         <div>
            <h3 className="text-xl md:text-2xl my-3">Link</h3>
          <Link className="ml-3 text-purple-300 underline" href={project?.link}>{project?.link?new URL(project.link).hostname:""}</Link>
          <h3 className="text-xl md:text-2xl my-3">Tech</h3>
          <div className="flex flex-wrap gap-3 ">
            {project?.tech.map((tech) => (
              <div
                className="bg-white text-sm md:text-lg rounded-full text-black px-5 cursor-default py-2"
                key={tech._id}
              >
                {tech.name}
              </div>
            ))}
          </div> </div> 
        </div>
      </PopoverContent>
    </Popover>
  );
}
