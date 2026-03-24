"use client";

import { Award, Clock, MapPin, Truck } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

export default memo(function About() {
  const highlights = [
    {
      icon: <Clock size={28} className="text-[#CC0000]" />,
      title: "9+ Anos",
      description: "Desde 2015 rodando São Paulo",
    },
    {
      icon: <Truck size={28} className="text-[#CC0000]" />,
      title: "Vintage",
      description: "Um calhambeque de verdade",
    },
    {
      icon: <MapPin size={28} className="text-[#CC0000]" />,
      title: "Eventos",
      description: "Presença nas maiores festas de SP",
    },
    {
      icon: <Award size={28} className="text-[#CC0000]" />,
      title: "Artesanal",
      description: "Tudo feito com muito amor",
    },
  ];

  return (
    <section id="sobre" className="bg-black py-24 border-t-4 border-[#CC0000]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-1 bg-[#CC0000]"></div>
            <span className="text-[#CC0000] text-sm uppercase tracking-widest font-black">
              Nossa história
            </span>
            <div className="flex-1 h-1 bg-[#CC0000]"></div>
          </div>
          <h2
            className="text-6xl md:text-7xl text-white uppercase leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "3px" }}
          >
            Mais que um<br />
            <span className="text-[#CC0000]">FOOD TRUCK</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */}
          <div className="flex flex-col gap-6 text-white">
            <p className="text-lg leading-relaxed font-semibold">
              O Calhambeque nasceu em 2015 da paixão por carros antigos e gastronomia de rua. É um calhambeque de verdade — aquele carro antigo transformado em cozinha ambulante que chama atenção só de estar lá.
            </p>
            <p className="text-lg leading-relaxed font-semibold">
              Mas o que faz o Calhambeque especial é o respeito artesanal. Cada hot dog é feito na hora, com ingredientes selecionados, pão brioche fresco e molhos exclusivos criados por nossa equipe.
            </p>
            <div className="flex items-center gap-3 py-4 border-t-2 border-b-2 border-[#CC0000] my-4">
              <Image 
                src="/images/unnamed.png" 
                alt="Calhambeque" 
                width={40} 
                height={40}
                loading="lazy"
              />
              <span className="text-2xl text-[#CC0000] font-black" style={{ fontFamily: "'Bebas Neue', cursive" }}>
                AUTÊNTICO, CHARMOSO!
              </span>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-white border-4 border-black p-8" style={{ boxShadow: "8px 8px 0px #CC0000" }}>
              <div
                className="text-7xl text-[#CC0000] mb-4 font-black"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                9+
              </div>
              <p className="text-black text-2xl font-black mb-2 uppercase">
                Anos de experiência
              </p>
              <p className="text-black text-sm leading-relaxed font-semibold mb-6">
                Uma marca com história, presença garantida nos maiores eventos de São Paulo.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Artesanal", "Vintage", "Eventos", "SP", "Hot Dog"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-[#CC0000] text-white text-xs px-3 py-2 font-black border border-black"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white border-4 border-black p-6 flex flex-col gap-4 text-center"
              style={{ boxShadow: "4px 4px 0px black" }}
            >
              <div className="flex justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-black font-black text-xl mb-1 uppercase">
                  {item.title}
                </h3>
                <p className="text-black text-xs font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
