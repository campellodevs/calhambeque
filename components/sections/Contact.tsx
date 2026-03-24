"use client";

import { MessageCircle, Mail, MapPin, Clock, Phone, Zap, UtensilsCrossed, Star, Heart } from "lucide-react";
import { memo } from "react";

export default memo(function Contact() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511934349515";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de contratar o Calhambeque para um evento. Podemos conversar?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="bg-white py-24 border-t-4 border-[#CC0000]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="w-12 h-1 bg-black"></div>
            <span className="text-[#CC0000] text-sm uppercase tracking-widest font-black">
              Vamos Conversar
            </span>
            <div className="w-12 h-1 bg-black"></div>
          </div>
          <h2
            className="text-6xl md:text-7xl text-black uppercase leading-none tracking-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "3px" }}
          >
            Leve o Calhambeque<br />
            <span className="text-[#CC0000]">Para seu Evento</span>
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            Entre em contato agora e garanta o food truck mais charmoso de São Paulo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left — WhatsApp + Phone */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp card */}
            <div className="bg-[#CC0000] border-4 border-black p-8 flex flex-col gap-6 text-white" style={{ boxShadow: "6px 6px 0px black" }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white flex items-center justify-center border-2 border-black">
                  <MessageCircle size={32} className="text-[#CC0000]" />
                </div>
                <div>
                  <h3
                    className="text-3xl text-white uppercase font-black"
                    style={{ fontFamily: "'Bebas Neue', cursive" }}
                  >
                    WhatsApp
                  </h3>
                  <p className="text-white/80 text-xs font-semibold">Resposta rápida</p>
                </div>
              </div>

              <p className="text-white text-sm leading-relaxed font-semibold">
                A forma mais rápida de falar com a gente. Clique abaixo e inicie uma conversa com nossa equipe.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#CC0000] font-black py-4 px-8 text-center uppercase tracking-widest text-sm border-2 border-white hover:bg-[#CC0000] hover:text-white transition-colors"
              >
                Chamar no WhatsApp
              </a>
            </div>

            {/* Call card */}
            <div className="bg-black text-white border-4 border-black p-6 flex items-center gap-4" style={{ boxShadow: "6px 6px 0px #CC0000" }}>
              <div className="w-12 h-12 bg-[#CC0000] flex items-center justify-center border-2 border-black">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase">Ligação Direta</h4>
                <p className="text-white/70 text-xs font-semibold">(11) 9343-9515</p>
              </div>
            </div>
          </div>

          {/* Right — Info cards */}
          <div className="flex flex-col gap-6">
            {[
              { icon: <MapPin size={20} />, label: "Localização", value: "São Paulo, SP", sub: "Atendemos toda a Grande SP" },
              { icon: <Clock size={20} />, label: "Disponibilidade", value: "7 dias por semana", sub: "Diurnos e noturnos" },
              { icon: <Mail size={20} />, label: "E-mail", value: "contato@calhambeque.com.br", sub: "Resposta em até 24h" },
            ].map((info) => (
              <div
                key={info.label}
                className="bg-white border-4 border-black p-6 flex items-start gap-4"
                style={{ boxShadow: "4px 4px 0px black" }}
              >
                <div className="w-10 h-10 bg-[#CC0000] flex items-center justify-center shrink-0 border-2 border-black text-white">
                  {info.icon}
                </div>
                <div>
                  <span className="text-black text-xs uppercase tracking-widest font-black">
                    {info.label}
                  </span>
                  <p className="text-black font-black text-sm mt-1">
                    {info.value}
                  </p>
                  <p className="text-black/60 text-xs mt-1 font-semibold">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose — Centered below */}
        <div className="flex justify-center mt-16">
          <div className="w-full max-w-3xl bg-black text-white border-4 border-black p-8" style={{ boxShadow: "6px 6px 0px #CC0000" }}>
            <div className="flex items-center gap-2 mb-8 justify-center">
              <span className="text-4xl">★</span>
              <span className="text-[#CC0000] text-lg uppercase tracking-widest font-black">
                Por que nos escolher?
              </span>
              <span className="text-4xl">★</span>
            </div>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Zap size={20} className="text-[#CC0000]" />, label: "Estrutura completa" },
                { icon: <UtensilsCrossed size={20} className="text-[#CC0000]" />, label: "Cardápio adaptável" },
                { icon: <Star size={20} className="text-[#CC0000]" />, label: "Experiência" },
                { icon: <Heart size={20} className="text-[#CC0000]" />, label: "Atendimento premium" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-white text-sm font-semibold">
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});
