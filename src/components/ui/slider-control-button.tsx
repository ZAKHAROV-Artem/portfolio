"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  action: () => void;
};
export default function SliderControlButton({
  children,
  className,
  action,
}: Props) {
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
        "w-16 h-16 absolute top-1/2 cursor-pointer -translate-y-1/2 z-50 grid place-content-center rounded-full bg-transparent border-2 border-dotted hover:border-dashed",
        className
      )}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      onClick={action}
      transition={{ type: "spring", stiffness: 300, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
