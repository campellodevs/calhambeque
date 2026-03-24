"use client";

import { useState, memo } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    emoji: "/images/1.png",
    title: "O Calhambeque",
    description: "Nosso carrinho vintage",
    isImage: true,
  },
  {
    id: 2,
    emoji: "/images/8.png",
    title: "Hot Dog Premium",
    description: "Preparo artesanal",
    isImage: true,
  },
  {
    id: 3,
    emoji: "/images/3.png",
    title: "São Paulo Expo",
    description: "Evento marcante",
    isImage: true,
  },
  {
    id: 4,
    emoji: "/images/4.png",
    title: "Mestre no Preparo",
    description: "Com arte e técnica",
    isImage: true,
  },
  {
    id: 5,
    emoji: "/images/5.png",
    title: "Salão do Automóvel",
    description: "Multidão feliz",
    isImage: true,
  },
  {
    id: 6,
    emoji: "/images/6.png",
    title: "Nossa galera!",
    description: "Dia especial",
    isImage: true,
  },
];

export default memo(function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-white py-24 border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-4 text-black">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="w-12 h-1 bg-black"></div>
            <span className="text-[#CC0000] text-sm uppercase tracking-widest font-black">
              Momentos
            </span>
            <div className="w-12 h-1 bg-black"></div>
          </div>
          <h2
            className="text-6xl md:text-7xl text-black uppercase leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "3px" }}
          >
            Nossa<br />
            <span className="text-[#CC0000]">GALERIA</span>
          </h2>
        </div>

        {/* Info Text */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <ZoomIn size={24} className="text-[#CC0000]" />
          <p className="text-center text-black font-black text-lg uppercase tracking-widest" style={{ fontFamily: "'Bebas Neue', cursive" }}>
            Clique nas fotos para ampliar
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelected(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(index);
                }
              }}
              aria-label={`Abrir foto de ${item.title}`}
              className={`bg-white border-4 border-black cursor-pointer group transition-all hover:shadow-lg hover:border-[#CC0000] overflow-hidden relative ${
                index === 0 ? "col-span-2 md:col-span-1" : ""
              }`}
              style={{
                minHeight: index === 0 ? "280px" : "200px",
                boxShadow: "4px 4px 0px black",
              }}
            >
              {item.isImage ? (
                <>
                  <div className="w-full h-full relative">
                    <Image
                      src={item.emoji}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4">
                    <div className="bg-[#CC0000] border-2 border-black px-3 py-2 inline-block min-w-full text-center" style={{ boxShadow: "3px 3px 0px black" }}>
                      <p className="text-white text-center font-black text-sm uppercase" style={{ fontFamily: "'Bebas Neue', cursive" }}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 group-hover:bg-[#CC0000] transition-colors">
                  <span className={`${index === 0 ? "text-7xl" : "text-6xl"} mb-2`}>
                    {item.emoji}
                  </span>
                  <p className="text-black text-center font-black text-sm group-hover:text-white">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/60 text-xs uppercase tracking-widest font-bold">
          Clique para ampliar | Em breve: mais fotos
        </p>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Ampliação de foto da galeria"
        >
          <div
            className="relative bg-white border-4 border-black w-full max-w-sm p-8 flex flex-col items-center justify-center gap-4"
            style={{ boxShadow: "8px 8px 0px #CC0000", minHeight: "400px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems[selected].isImage ? (
              <Image src={`${galleryItems[selected].emoji}?t=${Date.now()}`} alt={galleryItems[selected].title} width={150} height={150} unoptimized />
            ) : (
              <span className="text-9xl" aria-hidden="true">{galleryItems[selected].emoji}</span>
            )}
            <h3
              className="text-2xl text-black uppercase text-center font-black"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              {galleryItems[selected].title}
            </h3>
            <p className="text-black text-center font-semibold">
              {galleryItems[selected].description}
            </p>

            {/* Controls */}
            <button
              onClick={() => setSelected(selected === 0 ? galleryItems.length - 1 : selected - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#CC0000] border-2 border-black flex items-center justify-center text-white font-black hover:bg-red-700"
              aria-label="Foto anterior"
              style={{ boxShadow: "2px 2px 0px black" }}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={() => setSelected(selected === galleryItems.length - 1 ? 0 : selected + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#CC0000] border-2 border-black flex items-center justify-center text-white font-black hover:bg-red-700"
              aria-label="Próxima foto"
              style={{ boxShadow: "2px 2px 0px black" }}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-[#CC0000] border-2 border-black flex items-center justify-center text-white font-black"
              aria-label="Fechar galeria"
              style={{ boxShadow: "2px 2px 0px black" }}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
});
