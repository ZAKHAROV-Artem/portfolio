"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import { useToggle } from "usehooks-ts";

type Props = {
  action: () => void;
  children: ReactNode;
  className?: string;
  page?: string;
  tooltipClassName: string;
  tooltipText: string;
};
export default function SliderControlButton({
  action,
  children,
  className,
  page,
  tooltipClassName,
  tooltipText,
}: Props) {
  const [visible, toggleTooltip, setValue] = useToggle(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouse = (e: any) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, left, top, width } = ref.current?.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <Link href={`#${tooltipText}`}>
      <motion.div
        animate={{ x, y }}
        className={cn(
          "absolute top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-content-center rounded-full border-2 border-dotted bg-transparent mix-blend-difference hover:border-dashed sm:h-16 sm:w-16",
          className,
        )}
        onClick={action}
        onMouseEnter={() => setValue(true)}
        onMouseLeave={() => {
          reset();
          setValue(false);
        }}
        onMouseMove={handleMouse}
        ref={ref}
        transition={{
          damping: 15,
          mass: 0.1,
          stiffness: 300,
          type: "spring",
        }}
      >
        <div className="block text-center text-[12px] text-white sm:text-sm md:hidden">
          {tooltipText}
        </div>
        <div className="hidden md:block">
          {children}
          {tooltipText && (
            <div
              className={cn(
                "pointer-events-none absolute top-1/2 w-28 -translate-y-[170%] rounded-lg bg-white p-3 text-center opacity-0 duration-500",
                tooltipClassName,
                {
                  "opacity-1": visible,
                },
              )}
            >
              {tooltipText}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
