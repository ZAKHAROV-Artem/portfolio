import { Linkedin, Github, Instagram, Send } from "lucide-react";
import Link from "next/link";
export default function SocialMedia() {
  return (
    <div className="flex w-fit gap-x-3 text-white">
      <Link
        href="https://www.linkedin.com/in/artem-zakharov-6b94b6251/"
        target="_blank"
      >
        <Linkedin className="cursor-pointer" />
      </Link>
      <Link href="https://github.com/ZAKHAROV-Artem/" target="_blank">
        <Github className="cursor-pointer" />
      </Link>
      <Link href="https://www.instagram.com/zakharov_artem_/" target="_blank">
        <Instagram className="cursor-pointer" />
      </Link>
      <Link href="https://t.me/UserNotFoundExeption" target="_blank">
        <Send className="cursor-pointer" />
      </Link>
    </div>
  );
}
