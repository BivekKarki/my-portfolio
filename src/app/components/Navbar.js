"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-10">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800">Elito</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(([title, url]) => (
            <li key={title} className="relative">
              <Link href={url} className="text-gray-700 hover:text-blue-500">
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          
        >
          <div className="flex justify-between p-4">
            <span className="text-xl font-bold">Elito</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map(([title, url]) => (
              <li key={title}>
                <Link
                  href={url}
                  className="text-gray-700 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
    
    <div className="h-lvh bg-green-400">sda</div>
    <div className="h-lvh bg-green-400">sda</div>
    <div className="h-lvh bg-green-400">sda</div>
    
    
    </>
  );
};

