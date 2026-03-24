"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

export default memo(function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/ocalhambeque(1).jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.2) contrast(1.2)" }}
      >
        <source src="/images/videofundocalhambeque.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25"></div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/40 to-[#CC0000]"></div>

      <div className="absolute top-0 left-0 right-0 h-3 bg-[#CC0000] z-20"></div>
      <div className="absolute top-3 left-0 right-0 h-1 bg-black z-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-32 flex flex-col items-center text-center gap-8 justify-center">
        <div className="mb-4 relative">
          <div className="absolute inset-0 rounded-full neon-border"></div>
          <Image 
            src="/images/ocalhambeque(1).jpg" 
            alt="O Calhambeque Logo" 
            width={150} 
            height={150}
            className="rounded-full relative z-10"
          />
        </div>

        {/* Badge */}
        <div className="flex items-center gap-3 bg-white text-black px-6 py-3 border-2 border-white" style={{ boxShadow: "4px 4px 0px black" }}>
          <span className="text-[#CC0000] text-2xl">★</span>
          <span className="text-black text-xs uppercase tracking-widest font-black">
            Desde 2015 na estrada
          </span>
          <span className="text-[#CC0000] text-2xl">★</span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-tight tracking-tight drop-shadow-lg"
          style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "3px", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
        >
          O melhor{" "}
          <span className="text-[#CC0000] block">HOT DOG</span>
          de São Paulo
        </h1>

        <div className="flex items-center gap-4 w-full justify-center">
          <div className="flex-1 h-1 bg-white max-w-xs"></div>
          <Image 
            src="/images/unnamed.png" 
            alt="Calhambeque Logo" 
            width={40} 
            height={40}
          />
          <div className="flex-1 h-1 bg-white max-w-xs"></div>
        </div>

        {/* Subheadline */}
        <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed font-semibold drop-shadow-lg" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
          Um calhambeque vintage que é atração à parte. Sabor artesanal, estilo autêntico dos anos 50 e muito mais que um hot dog.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#contato"
            className="bg-[#CC0000] text-white font-black py-4 px-10 uppercase tracking-widest text-sm border-2 border-black"
            style={{ boxShadow: "5px 5px 0px black" }}
          >
            Contratar para evento
          </a>

          <Link
            href="/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-black py-4 px-10 uppercase tracking-widest text-sm border-2 border-black hover:bg-white hover:text-black transition-colors"
            style={{ boxShadow: "5px 5px 0px #CC0000" }}
          >
            Ver cardápio
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 pt-8 border-t-4 border-white w-full">
          {[
            { value: "9+", label: "Anos de Estrada" },
            { value: "500+", label: "Eventos" },
            { value: "100%", label: "Amor ao Hot Dog" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="text-5xl md:text-6xl text-[#CC0000] font-black"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                {stat.value}
              </span>
              <span className="text-white text-xs uppercase tracking-widest font-bold drop-shadow-lg" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-white text-xs uppercase tracking-widest font-bold drop-shadow-lg" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
          Role para ver mais
        </span>
        <ChevronDown size={24} className="text-[#CC0000]" />
      </div>
    </section>
  );
});
