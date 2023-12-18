"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { useToggle } from "usehooks-ts";

type Props = {
  children: ReactNode;
  className?: string;
  tooltipClassName: string;
  tooltipText: string;
  page?: string;
  action: () => void;
};
export default function SliderControlButton({
  children,
  className,
  tooltipText,
  tooltipClassName,
  page,
  action,
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
    const { height, width, left, top } = ref.current?.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className={cn(
        "w-12 sm:w-16 h-12 sm:h-16 fixed top-1/2 mix-blend-difference cursor-pointer -translate-y-1/2 z-50 grid place-content-center rounded-full bg-transparent border-2 border-dotted hover:border-dashed",
        className
      )}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        reset();
        setValue(false);
      }}
      animate={{ x, y }}
      onClick={action}
      onMouseEnter={() => setValue(true)}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.1,
      }}
    >
      {tooltipText && (
        <div
          className={cn(
            "bg-white text-center absolute duration-500 pointer-events-none top-1/2 p-3 opacity-0 rounded-lg w-28 -translate-y-[170%]",
            tooltipClassName,
            {
              "opacity-1": visible,
            }
          )}
        >
          {tooltipText}
        </div>
      )}
      {children}
    </motion.div>
  );
}
