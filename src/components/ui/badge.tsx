import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Badge({ children }: Props) {
  return (
    <div className="flex h-10 overflow-hidden rounded-sm">
      <div className="flex h-full items-center justify-center bg-white px-2 font-slab text-xl font-semibold">
        {children}
      </div>
      <Image alt="" height={40} quality={100} src="/badge-end.png" width={28} />
    </div>
  );
}
