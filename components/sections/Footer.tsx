"use client";

import { useState } from "react";
import { ChevronUp, Heart, Mail, MessageCircle, X } from "lucide-react";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const contactInfo = [
    {
      icon: <Heart size={28} />,
      label: "Instagram",
      value: "@lucca.campello",
      href: "https://instagram.com/lucca.campello",
    },
    {
      icon: <MessageCircle size={28} />,
      label: "WhatsApp",
      value: "(11) 99349-5934",
      href: "https://wa.me/5511993495934",
    },
    {
      icon: <Mail size={28} />,
      label: "Email",
      value: "campellodeveloper@gmail.com",
      href: "mailto:campellodeveloper@gmail.com",
    },
  ];

  return (
    <>
      <footer className="bg-black border-t-4 border-[#CC0000] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Welcome Message */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-6xl text-white uppercase font-black tracking-tight"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              Esperamos você pra
              <br />
              <span className="text-[#CC0000]">comer aqui conosco</span>
            </h1>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* COPYRIGHT */}
            <div className="flex-1 bg-white border-4 border-black p-8" style={{ boxShadow: "6px 6px 0px #CC0000" }}>
              <p className="text-black text-xs uppercase tracking-widest font-black mb-2">
                © {new Date().getFullYear()} O Calhambeque Hot Dog
              </p>
              <p className="text-black text-xs font-bold">
                Todos os direitos reservados. Com muito charme nas ruas de SP.
              </p>
            </div>

            {/* BACK TO TOP */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-[#CC0000] border-4 border-black p-6 flex items-center justify-center text-white font-black hover:bg-white hover:text-[#CC0000] transition-all"
              style={{ boxShadow: "6px 6px 0px black" }}
              title="Voltar ao topo"
            >
              <ChevronUp size={32} />
            </a>

            {/* DEVELOPER */}
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 bg-white border-4 border-black p-8 text-center cursor-pointer hover:border-[#CC0000] hover:shadow-lg transition-all"
              style={{ boxShadow: "6px 6px 0px #CC0000" }}
            >
              <p className="text-black text-xs uppercase tracking-widest font-black mb-3">
                Desenvolvido por
              </p>
              <span
                className="text-[#CC0000] text-3xl font-black uppercase block"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                lucca campello
              </span>
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white border-4 border-black p-8 w-full max-w-sm flex flex-col items-center gap-8"
            style={{ boxShadow: "12px 12px 0px black" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-[#CC0000] border-2 border-black flex items-center justify-center text-white font-black"
              style={{ boxShadow: "2px 2px 0px black" }}
            >
              <X size={16} />
            </button>

            {/* Title */}
            <h2
              className="text-4xl md:text-5xl text-black uppercase text-center font-black mt-2"
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
            >
              Quer um site<br />igual esse?
            </h2>

            {/* Contact icons */}
            <div className="flex gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-black border-4 border-black flex items-center justify-center text-[#CC0000] hover:bg-[#CC0000] hover:text-black transition-all"
                  title={info.label}
                  style={{ boxShadow: "4px 4px 0px #CC0000" }}
                >
                  {info.icon}
                </a>
              ))}
            </div>

            {/* Contact details */}
            <div className="w-full space-y-3 text-center">
              {contactInfo.map((info) => (
                <div key={info.label} className="bg-white border-3 border-black p-3">
                  <p className="text-black text-xs uppercase tracking-widest font-black mb-1">
                    {info.label}
                  </p>
                  <p className="text-black text-sm font-bold">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="w-full">
              <p
                className="text-3xl text-[#CC0000] font-black uppercase text-center mb-4"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                Entre em contato!
              </p>
              <a
                href="https://wa.me/5511993495934"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#CC0000] text-white font-black py-4 px-8 uppercase tracking-widest text-sm border-2 border-black hover:bg-black hover:text-[#CC0000] transition-colors text-center block"
                style={{ boxShadow: "4px 4px 0px black" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}