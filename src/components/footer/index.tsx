import SocialMedia from "../ui/social-media";
import Weather from "./weather";

export default function Footer() {
  return (
    <div className="relative z-10 bg-black py-10">
      <div className="container flex flex-col items-center justify-between gap-y-10 sm:flex-row">
        <Weather />
        <SocialMedia />
      </div>
    </div>
  );
}
