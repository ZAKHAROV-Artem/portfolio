import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};
export default function Badge({ children }: Props) {
  return (
    <div className="flex rounded-sm overflow-hidden h-10">
      <div className="h-full font-slab bg-white text-xl font-semibold px-2 flex items-center justify-center">
        {children}
      </div>
      <Image src="/badge-end.png" alt="" width={28} quality={100} height={40} />
    </div>
  );
}
