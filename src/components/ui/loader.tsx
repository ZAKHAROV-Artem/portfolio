import { cn } from "@/lib/utils";

const span = `absolute w-full h-full rounded-full bg-loader`;
export default function Loader() {
  return (
    <div className="relative animate-spin w-[300px] bg-loader h-[300px] rounded-full">
      <span className={cn(span, "blur")} />
      <span className={cn(span, "blur-md")} />
      <span className={cn(span, "blur-lg")} />
      <span className={cn(span, "blur-xl")} />
    </div>
  );
}
