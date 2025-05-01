"use client";

import { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { menu } from "./menu.data";
import CartIcon from "./CartIcon";
import { Menu } from "lucide-react";
import Socials from "../common/socials/Socials";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-30 w-full bg-white">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-5 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-3xl font-bold text-black">Fittora</h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {menu.map((item) => (
            <NavItem key={item.link} item={item} />
          ))}
          <CartIcon />
        </nav>

        {/* Mobile right side */}
        <div className="flex items-center gap-4 lg:hidden">
          <CartIcon />
          {/* Burger button */}
          <button
            className="text-black"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Модальное мобильное меню */}
      <div
        className={`fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-sm transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } lg:hidden`}
      >
        <div className="relative w-4/5 max-w-sm rounded-lg bg-white p-6 shadow-lg">
          {/* Кнопка закрытия */}
          <button
            className="absolute top-3 right-3 text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Ссылки меню */}
          <nav className="mb-10 flex flex-col items-center gap-4 text-center">
            {menu.map((item) => (
              <NavItem
                key={item.link}
                item={item}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
