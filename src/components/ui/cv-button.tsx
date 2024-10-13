import RotatingText from "@/../public/rotating-text.png";
import Image from "next/image";

export default function CVbutton() {
  return (
    <a
      className="fixed bottom-4 right-4 z-40 flex items-center justify-center mix-blend-difference duration-200 hover:scale-110"
      download="CV_Zakharov_Artem.pdf"
      href={`/CV.pdf`}
    >
      <div className="relative flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-transparent font-slab font-semibold text-white duration-300 hover:bg-white hover:text-black sm:h-[100px] sm:w-[100px] sm:text-2xl">
        CV
      </div>

      <Image
        alt="download cv"
        className="animate-spin-slow absolute"
        src={RotatingText}
      />
    </a>
  );
}
