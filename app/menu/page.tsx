"use client";

import { Suspense } from "react";
import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useMenu } from "@/context/MenuContext";
import { Language } from "@/data/menu";
import { QRCodeCanvas } from "qrcode.react";
import { Download, Globe } from "lucide-react";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { language, setLanguage, menuData } = useMenu();
  const [mounted, setMounted] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  // Montar component
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sincronizar URL com Context (separado para evitar infinite loop)
  useEffect(() => {
    if (!mounted) return;
    
    const urlLang = searchParams.get("lang") as Language | null;
    const validLangs: Language[] = ["pt", "en", "es", "zh"];
    
    if (urlLang && validLangs.includes(urlLang)) {
      if (language !== urlLang) {
        setLanguage(urlLang);
      }
    } else if (!urlLang && typeof window !== "undefined") {
      // Usar setTimeout para evitar re-render excessivo
      const timer = setTimeout(() => {
        router.push(`/menu?lang=${language}`);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [searchParams, mounted, language, setLanguage, router]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    router.push(`/menu?lang=${lang}`);
  };

  const downloadQRCode = () => {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;

    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      const size = 300;
      canvas.width = size;
      canvas.height = size;

      const svgString = new XMLSerializer().serializeToString(svg);
      const img = document.createElement("img");
      img.onload = () => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `calhambeque-menu-${language}.png`;
        link.click();
      };
      img.src = "data:image/svg+xml;base64," + btoa(svgString);
    } catch (error) {
      console.error("Erro ao baixar QR Code:", error);
    }
  };

  if (!mounted) return null;

  const currentUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/menu?lang=${encodeURIComponent(language)}`
    : "";

  // Agrupar itens por categoria
  const itemsByCategory = menuData.items.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, typeof menuData.items>
  );

  return (
    <main className="bg-black min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* LOGO */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-8">
            <Image
              src="/images/ocalhambeque(1).jpg"
              alt="Calhambeque Logo"
              width={200}
              height={200}
              className="h-40 md:h-48 w-auto object-contain rounded-full"
              style={{
                filter: "drop-shadow(0 0 20px #CC0000) drop-shadow(0 0 40px #CC0000)",
                borderRadius: "50%",
              }}
              unoptimized
            />
          </div>
        </div>


        <div className="text-center mb-16">
          <h1
            className="text-6xl md:text-7xl text-white uppercase font-black mb-6 tracking-tight"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            Cardápio
          </h1>
          <p className="text-white/80 text-lg">O melhor hot dog de São Paulo</p>
        </div>

        {/* LANGUAGE SELECTOR */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              aria-label={`Mudar idioma para ${lang.label}`}
              aria-pressed={language === lang.code}
              className={`flex items-center gap-2 px-6 py-3 border-4 font-black uppercase tracking-widest transition-all duration-300 ${
                language === lang.code
                  ? "bg-[#CC0000] text-white border-white"
                  : "bg-white text-black border-black hover:border-[#CC0000]"
              }`}
              style={{ boxShadow: "4px 4px 0px black" }}
            >
              <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
              <span className="hidden sm:inline text-sm">{lang.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* MENU CONTENT */}
          <div className="lg:col-span-2">
            {(Object.keys(itemsByCategory) as (keyof typeof itemsByCategory)[]).map((category) => (
              <div key={category} className="mb-12">
                <h2
                  className="text-4xl md:text-5xl text-[#CC0000] uppercase font-black mb-8 tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                >
                  {menuData.categories[category as keyof typeof menuData.categories]}
                </h2>

                <div className="space-y-6">
                  {itemsByCategory[category].map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border-4 border-black p-6 hover:border-[#CC0000] transition-all duration-300 hover:shadow-lg"
                      style={{ boxShadow: "4px 4px 0px black" }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">{item.emoji}</span>
                            <h3
                              className="text-2xl text-black font-black uppercase"
                              style={{ fontFamily: "'Bebas Neue', cursive" }}
                            >
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-black/70 text-sm leading-relaxed mb-3">
                            {item.description}
                          </p>
                        </div>
                        <div
                          className="bg-[#CC0000] text-white px-4 py-2 font-black text-lg whitespace-nowrap"
                          style={{ boxShadow: "2px 2px 0px black" }}
                        >
                          {item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* QR CODE SIDEBAR */}
          <div className="lg:col-span-1">
            <div
              className="bg-white border-4 border-black p-8 sticky top-8"
              style={{ boxShadow: "6px 6px 0px #CC0000" }}
            >
              <div className="flex items-center gap-2 mb-6 justify-center">
                <Globe size={24} className="text-[#CC0000]" />
                <h3
                  className="text-2xl text-[#CC0000] font-black uppercase"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                >
                  QR Code
                </h3>
              </div>

              {/* QR CODE */}
              <div
                ref={qrRef}
                className="bg-white p-4 border-2 border-black flex items-center justify-center mb-6"
                style={{ boxShadow: "2px 2px 0px black" }}
              >
                <QRCodeCanvas
                  value={currentUrl}
                  size={200}
                  level="H"
                  includeMargin={false}
                  fgColor="#0A0A0A"
                  bgColor="#FFFFFF"
                />
              </div>

              <button
                onClick={downloadQRCode}
                aria-label="Baixar código QR do cardápio em PNG"
                title="Baixar QR Code como imagem PNG"
                className="w-full bg-[#CC0000] text-white font-black py-4 px-4 uppercase tracking-widest border-2 border-black hover:bg-white hover:text-[#CC0000] transition-all flex items-center justify-center gap-2"
                style={{ boxShadow: "3px 3px 0px black" }}
              >
                <Download size={20} aria-hidden="true" />
                Baixar QR
              </button>

              {/* INFO */}
              <div className="mt-6 pt-6 border-t-4 border-black">
                <p className="text-black text-xs font-semibold text-center leading-relaxed">
                  Escaneie este código para acessar o cardápio em{" "}
                  <span className="font-black text-[#CC0000]">
                    {languages.find((l) => l.code === language)?.label}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen flex items-center justify-center"><p className="text-white">Carregando...</p></div>}>
      <MenuContent />
    </Suspense>
  );
}
