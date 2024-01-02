import ScrollDown from "@/components/ui/scroll-down";
import { wrapperVariants, imageVariants } from "@/data/anim-data";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  direction: number;
};
export default function AboutMePage({ direction }: Props) {
  return (
    <motion.div
      key={1}
      variants={wrapperVariants}
      animate="animate"
      initial={"initial"}
      exit="exit"
      custom={direction}
      className="bg-black h-full w-full overflow-y-scroll"
    >
      <div className="relative flex h-full container">
        <motion.div
          className="w-full"
          variants={imageVariants}
          animate="animate"
          initial={"initial"}
          exit="exit"
        >
          <div className="md:h-[80vh] lg:h-[90vh] relative xl:h-screen pt-10">
            <h1 className="text-white leading-loose text-xl sm:text-2xl md:text-3xl mb-16 font-organic-relief uppercase">
              Hi, my name is Artem
            </h1>
            <div className="relative grid md:block grid-cols-2 grid-rows-2">
              <Image
                className="z-20 md:absolute md:w-[300px] lg:w-[400px] xl:w-[500px]"
                src="/dark2.png"
                alt="Me 2"
                width={500}
                height={500}
              />
              <Image
                className="z-20 md:absolute self-center row-span-2 md:right-0 md:w-[300px] lg:w-[400px] xl:w-[500px]"
                src="/dark3.png"
                alt="Me 3"
                width={500}
                height={500}
              />
              <Image
                className="z-30 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-12 md:w-[300px] lg:w-[400px] xl:w-[500px]"
                src="/dark1.png"
                alt="Me 1"
                width={500}
                height={500}
              />
            </div>
            <ScrollDown className="absolute z-40 bottom-4 sm:bottom-12 md:bottom-4 left-1/2 -translate-x-1/2" />
          </div>{" "}
          <div className="grid relative z-30 sm:grid-cols-2 gap-10 text-white py-10">
            <div>
              <h3 className="text-2xl">Introduction</h3>
              <p>
                I am {dayjs().diff(dayjs("01/09/2006"), "y")} years old
                self-taught developer in Ukraine, dived into the world of coding
                and software development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Background</h3>
              <p>
                My tenure within the realm of Information Technology has been
                marked by extensive experience. I have crafted games, developed
                Android applications, engineered servers and created a lot of
                websites.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Education</h3>
              <p>
                At present, I am enrolled in Computer Science at the University
                of Silesia in Katowice, Poland.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Some facts</h3>
              <p>
                I speak 4 languages: Ukrainian, English, Polish, russian.
                <br />I love skiing, kickboxing, runing, coding and tech things
              </p>{" "}
            </div>
          </div>
        </motion.div>{" "}
      </div>
    </motion.div>
  );
}
