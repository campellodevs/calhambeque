"use client";

import { Building2, Car, Crown, Briefcase } from "lucide-react";
import { memo } from "react";

export default memo(function Events() {
  const eventTypes = [
    {
      icon: <Building2 size={28} className="text-white" />,
      title: "Feiras &\nExposições",
      description: "São Paulo Expo, Anhembi, Expo Center Norte",
    },
    {
      icon: <Car size={28} className="text-white" />,
      title: "Eventos\nAutomotivos",
      description: "Salão do Automóvel, Concessionárias, Lançamentos",
    },
    {
      icon: <Crown size={28} className="text-white" />,
      title: "Casamentos &\nFestas",
      description: "Casamentos, Aniversários, Formaturas, Confraternizações",
    },
    {
      icon: <Briefcase size={28} className="text-white" />,
      title: "Eventos\nCorporativos",
      description: "Happy Hours, Convenções, Team Building, Lançamentos",
    },
  ];

  return (
    <section id="eventos" className="bg-black py-24 border-t-4 border-[#CC0000]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 text-white">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="w-12 h-1 bg-[#CC0000]"></div>
            <span className="text-[#CC0000] text-sm uppercase tracking-widest font-black">
              Onde já estivemos
            </span>
            <div className="w-12 h-1 bg-[#CC0000]"></div>
          </div>
          <h2
            className="text-6xl md:text-7xl text-white uppercase leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "3px" }}
          >
            Eventos que<br />
            <span className="text-[#CC0000]">MARCARAM</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-semibold">
            De grandes feiras a celebrações íntimas. O Calhambeque sempre presente com o mesmo sabor e estilo.
          </p>
        </div>

        {/* Event types grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {eventTypes.map((type) => (
            <div
              key={type.title}
              className="bg-[#CC0000] border-4 border-black p-6 flex flex-col gap-4 text-white"
              style={{ boxShadow: "5px 5px 0px black" }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-black border-2 border-white flex items-center justify-center">
                {type.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-white text-xl uppercase mb-2 font-black whitespace-pre-line"
                  style={{ fontFamily: "'Bebas Neue', cursive", lineHeight: "1.1" }}
                >
                  {type.title}
                </h3>
                <p className="text-white/90 text-xs leading-relaxed font-semibold">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white border-4 border-black p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ boxShadow: "8px 8px 0px black" }}>
          <div>
            <h3
              className="text-4xl md:text-5xl text-black uppercase font-black"
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
            >
              Seu evento<br />nessa lista?
            </h3>
            <p className="text-black/60 text-sm mt-2 font-semibold">
              Entre em contato e garanta o Calhambeque.
            </p>
          </div>
          <a
            href="#contato"
            className="shrink-0 bg-[#CC0000] text-white font-black py-4 px-10 uppercase tracking-widest text-sm border-2 border-black hover:bg-red-700 transition-colors"
            style={{ boxShadow: "4px 4px 0px black" }}
          >
            Conversar Agora
          </a>
        </div>
      </div>
    </section>
  );
});
