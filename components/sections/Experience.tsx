"use client";

import { Flame, Shield, Sparkles, Users, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Experience() {
  const [storyProgress, setStoryProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const features = [
    {
      icon: <Flame size={24} className="text-[#CC0000]" />,
      title: "Preparo na Hora",
      description: "Tudo ao vivo, na sua frente",
    },
    {
      icon: <Shield size={24} className="text-[#CC0000]" />,
      title: "Ingredientes Selecionados",
      description: "Qualidade acima de tudo",
    },
    {
      icon: <Users size={24} className="text-[#CC0000]" />,
      title: "Experiência Única",
      description: "Ponto de encontro garantido",
    },
    {
      icon: <Sparkles size={24} className="text-[#CC0000]" />,
      title: "Estilo Vintage",
      description: "Pura nostalgia dos anos 50",
    },
  ];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="experiencia" className="bg-white py-12 border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="w-12 h-1 bg-black"></div>
            <span className="text-black text-sm uppercase tracking-widest font-black">
              O conceito
            </span>
            <div className="w-12 h-1 bg-black"></div>
          </div>
          <h2
            className="text-6xl md:text-7xl text-black uppercase leading-none tracking-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "3px" }}
          >
            Uma Experiência<br />
            <span className="text-[#CC0000]">COMPLETA</span>
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            Não é só comida. É show, é memória, é estilo de vida.
          </p>
        </div>

        {/* Features Bars + Stories Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-4 items-start">
          {/* Features Bars - Left Side */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 bg-white border-4 border-black p-4 experience-card"
                style={{ boxShadow: "3px 3px 0px black" }}
              >
                <div className="w-14 h-14 bg-[#CC0000] flex items-center justify-center shrink-0 border-2 border-black feature-icon">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-black font-black text-xs mb-1 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-black text-xs font-semibold">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stories - Right Side */}
          <div className="stories-container flex flex-col items-center gap-4">
            {/* Stories Video Container */}
            <div
              className="stories-video relative w-full max-w-xs overflow-hidden rounded-2xl border-4 border-[#CC0000] bg-black"
              style={{ aspectRatio: "9/16", boxShadow: "0 0 15px rgba(204, 0, 0, 0.5)" }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ transform: "scale(1.1)" }}
                onPlay={() => setStoryProgress(0)}
              >
                <source src="/images/calhambequinho.mp4" type="video/mp4" />
              </video>

              {/* Story Progress Bar */}
              <div className="absolute top-2 left-12 right-4 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#CC0000] transition-all duration-100"
                  style={{
                    width: `${storyProgress}%`,
                  }}
                ></div>
              </div>

              {/* Profile Logo - Top Left */}
              <div className="absolute top-3 left-3 w-10 h-10 bg-white border-2 border-[#CC0000] rounded-full overflow-hidden flex items-center justify-center" style={{ boxShadow: "2px 2px 0px black" }}>
                <Image
                  src="/images/ocalhambeque(1).jpg"
                  alt="O Calhambeque"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Texto Seal - Top Center */}
              <div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#CC0000] text-white px-1 py-1 rounded-full font-black text-xs uppercase whitespace-nowrap"
                style={{ boxShadow: "2px 2px 0px black" }}
              >
                Recado do calhambequinho
              </div>

              {/* Mute Button - Top Right */}
              <button
                onClick={toggleMute}
                className="absolute top-3 right-3 w-10 h-10 bg-[#CC0000] border-2 border-white flex items-center justify-center text-white font-black hover:bg-white hover:text-[#CC0000] transition-all rounded-full"
                style={{ boxShadow: "2px 2px 0px black" }}
                title={isMuted ? "Desmutar" : "Mutar"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              {/* Story Badge */}
              <div
                className="absolute bottom-4 left-4 bg-[#CC0000] text-white px-4 py-2 rounded-full font-black text-xs uppercase"
                style={{ boxShadow: "2px 2px 0px black" }}
              >
                ★ Hot Dog ★
              </div>
            </div>

            {/* Interaction hint */}
            <p className="text-black text-xs font-semibold text-center mt-2">
              Toque para interagir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
