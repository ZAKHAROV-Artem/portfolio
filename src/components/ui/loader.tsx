import { cn } from "@/lib/utils";

const span = `absolute w-full h-full rounded-full bg-loader`;
export default function Loader() {
  return (
    <div className="relative h-[300px] w-[300px] animate-spin rounded-full bg-loader">
      <span className={cn(span, "blur")} />
      <span className={cn(span, "blur-md")} />
      <span className={cn(span, "blur-lg")} />
      <span className={cn(span, "blur-xl")} />
    </div>
  );
}
