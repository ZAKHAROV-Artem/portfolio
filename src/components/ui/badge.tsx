import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};
export default function Badge({ children }: Props) {
  return (
    <div className="flex h-10 overflow-hidden rounded-sm">
      <div className="flex h-full items-center justify-center bg-white px-2 font-slab text-xl font-semibold">
        {children}
      </div>
      <Image src="/badge-end.png" alt="" width={28} quality={100} height={40} />
    </div>
  );
}
