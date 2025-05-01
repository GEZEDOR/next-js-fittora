"use client";

import { FC } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-200 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <Link href="/" className="text-2xl font-bold text-black">
            Fittora
          </Link>
        </div>

        {/* Footer Nav */}
        <nav className="flex justify-center gap-6 text-sm">
          <Link href="/catalog" className="transition hover:text-violet-600">
            Catalog
          </Link>
          <Link href="/about" className="transition hover:text-violet-600">
            About
          </Link>
          <Link href="/contacts" className="transition hover:text-violet-600">
            Contacts
          </Link>
        </nav>

        {/* Socials */}
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
      </div>

      {/* CopyRight */}
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Fittora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
