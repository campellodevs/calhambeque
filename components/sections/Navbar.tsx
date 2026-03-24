"use client";

import { useState, memo } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#eventos", label: "Eventos" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#CC0000]"></div>

        <Link href="/" className="flex items-center gap-3 relative z-10">
          <Image 
            src="/images/ocalhambeque(1).jpg" 
            alt="O Calhambeque Logo" 
            width={50} 
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-black text-2xl font-black uppercase tracking-tight"
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
            >
              CALHAMBEQUE
            </span>
            <span className="text-[#CC0000] text-xs font-bold tracking-widest uppercase">
              ★ HOT DOG ★
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black hover:text-[#CC0000] transition-colors duration-200 text-xs uppercase tracking-widest font-bold px-4 py-2 border-r border-gray-300 last:border-r-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CC0000] text-white text-xs font-black py-2 px-6 hover:bg-red-700 transition-all duration-300 uppercase tracking-widest ml-2 border-2 border-black"
            style={{ boxShadow: "3px 3px 0px black" }}
          >
            Cardápio
          </Link>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-black px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-[#CC0000] transition-colors text-xs uppercase tracking-widest font-bold py-3 border-b border-gray-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-[#CC0000] text-white text-xs font-black py-3 px-6 text-center uppercase tracking-widest mt-2 border-2 border-black"
            style={{ boxShadow: "3px 3px 0px black" }}
          >
            Cardápio
          </Link>
        </div>
      )}
    </nav>
  );
});
