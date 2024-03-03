import { cn } from "@/lib/utils";
import { Mouse } from "lucide-react";

type Props = {
  className?: string;
};
export default function ScrollDown({ className }: Props) {
  return (
    <div
      className={cn(
        "flex w-fit flex-col items-center  justify-center gap-y-2 text-white mix-blend-difference",
        className,
      )}
    >
      <Mouse className="animate-bounce" />
      <span className="font-amatic text-lg font-bold uppercase">
        Scroll down
      </span>
    </div>
  );
}
