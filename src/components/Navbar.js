"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/image/logo.png";

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
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-full md:w-3/4 z-50 transition-all duration-300 
        rounded-full shadow-md px-6
        ${isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-gray-900/80"}`}
      >
        <nav className="container mx-auto flex items-center justify-between p-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full hidden md:block"
            />
          </Link>

          {/* Mobile Navbar */}
          <div className="flex items-center md:hidden w-full justify-between">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>

            <a
              href="/BivekKarki_Resume_Frontenddeveloper.pdf"
              download="BivekKarki_Resume_Frontenddeveloper.pdf"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              Resume ↓
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-2 md:space-x-6">
            {navLinks.map(([title, url]) => (
              <li key={title}>
                <Link href={url} className="text-white hover:text-blue-500">
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <a
            href="/BivekKarki_Resume_Frontenddeveloper.pdf"
            download="BivekKarki_Resume_Frontenddeveloper.pdf"
            className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            Resume ↓
          </a>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex justify-between p-4">
              <span className="text-xl font-bold">LOGO</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <ul className="flex bg-white flex-col space-y-4 p-4">
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
    </>
  );
}
