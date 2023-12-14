import { cn } from "@/lib/utils";
import { Mouse } from "lucide-react";

type Props = {
  className?: string;
};
export default function ScrollDown({ className }: Props) {
  return (
    <div
      className={cn(
        "w-fit flex text-white flex-col justify-center items-center gap-y-2",
        className
      )}
    >
      <Mouse className="animate-bounce" />
      <span className="text-lg uppercase font-bold">Scroll down</span>
    </div>
  );
}
