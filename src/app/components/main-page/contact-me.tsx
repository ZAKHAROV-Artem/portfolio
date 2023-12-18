import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactMe() {
  return (
    <div className="relative">
      <div className="container py-10 md:py-20 space-y-12">
        <h2 className="font-organic-relief max-w-screen-lg relative z-10  mix-blend-difference text-white text-2xl md:text-4xl leading-loose md:leading-[2.2]">
          WANT TO HAVE AN AWESOME PROJECT DONE?
        </h2>
        <div className="flex flex-col relative max-w-screen-lg z-10 sm:flex-row items-center p-1 bg-white  border rounded-2xl sm:rounded-full overflow-hidden border-black">
          <input
            placeholder="Enter your e-mail here"
            className="w-full px-2 py-3 border-none  outline-none"
          />
          <Button
            className="w-full sm:w-fit rounded-xl sm:rounded-3xl"
            variant="dark"
          >
            Contact me
          </Button>
        </div>
      </div>
      <Image
        className="absolute md:w-[650px] object-cover -bottom-[150px] sm:-bottom-[200px] md:-bottom-[270px] left-0"
        src="/shape-4.png"
        quality={100}
        width={982}
        height={681}
        alt={""}
      />
      <Image
        className="absolute right-0 hidden lg:block -top-20 w-80"
        src="/shape-5.png"
        quality={100}
        width={485}
        height={753}
        alt={""}
      />
    </div>
  );
}
