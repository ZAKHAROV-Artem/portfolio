import SocialMedia from "../ui/social-media";
import Weather from "./weather";

export default function Footer() {
  return (
    <div className="py-10 relative z-10 bg-black">
      <div className="container flex flex-col sm:flex-row gap-y-10 justify-between items-center">
        <Weather />
        <SocialMedia />
      </div>
    </div>
  );
}
