import { Button } from "@/components/ui/button";
export default function Footer() {
  return (
    <div className="py-20 relative z-10 bg-black">
      <div className="container flex justify-between">
        <div className="text-white font-light ">
          {"i'm currently listening to"}
        </div>
        <div className="">
          <Button>Contact me</Button>
        </div>
      </div>
    </div>
  );
}
