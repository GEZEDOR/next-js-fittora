"use client";

import { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { menu } from "./menu.data";
import { Menu, X } from "lucide-react";
import CartIcon from "./CartIcon";

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
        {/* Burger button */}
        <button
          className="text-black lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-20 right-0 z-20 w-72 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 p-6">
          {menu.map((item) => (
            <NavItem
              key={item.link}
              item={item}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
