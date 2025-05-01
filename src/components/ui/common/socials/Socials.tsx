import Link from "next/link";
import { FC } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Socials: FC = () => {
  return (
    <div className="flex justify-center gap-4 sm:justify-end">
      <Link
        href="https://www.facebook.com"
        target="_blank"
        aria-label="Facebook"
        className="text-gray-500 transition hover:text-violet-600"
      >
        <Facebook size={20} />
      </Link>
      <Link
        href="https://www.instagram.com"
        target="_blank"
        aria-label="Instagram"
        className="text-gray-500 transition hover:text-violet-600"
      >
        <Instagram size={20} />
      </Link>
      <Link
        href="https://www.twitter.com"
        target="_blank"
        aria-label="Twitter"
        className="text-gray-500 transition hover:text-violet-600"
      >
        <Twitter size={20} />
      </Link>
      <Link
        href="https://www.youtube.com"
        target="_blank"
        aria-label="YouTube"
        className="text-gray-500 transition hover:text-violet-600"
      >
        <Youtube size={20} />
      </Link>
    </div>
  );
};

export default Socials;
