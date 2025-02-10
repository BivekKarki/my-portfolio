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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-10 md:justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full hidden md:block"
            />
            {/* <span className="text-2xl font-bold text-gray-800">LOGO</span> */}
          </Link>
        {/* Mobile Navbar */}
        <div className="flex items-center md:hidden w-full justify-between">
          {/* Mobile Menu Button */}
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo with Avatar */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            {/* <span className="text-2xl font-bold text-gray-800">LOGO</span> */}
          </Link>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            Resume ↓
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(([title, url]) => (
            <li key={title}>
              <Link href={url} className="text-gray-700 hover:text-blue-500">
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          Resume ↓
        </a>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between p-4">
            <span className="text-xl font-bold">LOGO</span>
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
    
    
    
    </>
  );
};

