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
      className="h-full w-full overflow-y-scroll bg-black"
    >
      <div className="container relative flex h-full">
        <motion.div
          className="w-full"
          variants={imageVariants}
          animate="animate"
          initial={"initial"}
          exit="exit"
        >
          <div className="relative pt-10 md:h-[80vh] lg:h-[90vh] xl:h-screen">
            <h1 className="mb-16 font-organic-relief text-xl uppercase leading-loose text-white sm:text-2xl md:text-3xl">
              Hi, my name is Artem
            </h1>
            <div className="relative grid grid-cols-2 grid-rows-2 md:block">
              <Image
                className="z-20 md:absolute md:w-[300px] lg:w-[400px] xl:w-[500px]"
                src="/dark2.png"
                alt="Me 2"
                width={500}
                height={500}
              />
              <Image
                className="z-20 row-span-2 self-center md:absolute md:right-0 md:w-[300px] lg:w-[400px] xl:w-[500px]"
                src="/dark3.png"
                alt="Me 3"
                width={500}
                height={500}
              />
              <Image
                className="z-30 md:absolute md:left-1/2 md:top-12 md:w-[300px] md:-translate-x-1/2 lg:w-[400px] xl:w-[500px]"
                src="/dark1.png"
                alt="Me 1"
                width={500}
                height={500}
              />
            </div>
            <ScrollDown className="absolute bottom-4 left-1/2 z-40 -translate-x-1/2 sm:bottom-12 md:bottom-4" />
          </div>{" "}
          <div className="relative z-30 grid gap-10 py-10 text-white sm:grid-cols-2">
            <div>
              <h3 className="text-2xl">Introduction</h3>
              <p>
                I am {dayjs().diff(dayjs("2006-09-01"), "y")} years old
                self-taught developer in Ukraine, dived into the world of coding
                and software development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Background</h3>
              <p>
                I've been coding since 2017, creating many websites, apps, and
                games. Over the years, I've gained a lot of experience. Now, I
                focus on building websites and mobile apps using React.js,
                Next.js, React Native, and TypeScript.
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
