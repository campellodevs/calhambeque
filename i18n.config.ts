import { notFound } from "next/navigation";

export const defaultLocale = "pt";
export const locales = ["pt", "en", "es", "zh"] as const;
export type Locale = (typeof locales)[number];

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.includes(locale as Locale);
}

// Tradução de labels e UI
export const i18nLabels: Record<Locale, { language: string; flag: string }> = {
  pt: { language: "Português", flag: "🇧🇷" },
  en: { language: "English", flag: "🇺🇸" },
  es: { language: "Español", flag: "🇪🇸" },
  zh: { language: "中文", flag: "🇨🇳" },
};

export const i18nMessages: Record<Locale, Record<string, string>> = {
  pt: {
    home: "Início",
    about: "Sobre",
    experience: "Experiência",
    events: "Eventos",
    gallery: "Galeria",
    contact: "Contato",
    menu: "Cardápio",
    loading: "Carregando...",
    error: "Erro ao carregar página",
    tryAgain: "Tentar Novamente",
  },
  en: {
    home: "Home",
    about: "About",
    experience: "Experience",
    events: "Events",
    gallery: "Gallery",
    contact: "Contact",
    menu: "Menu",
    loading: "Loading...",
    error: "Error loading page",
    tryAgain: "Try Again",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    experience: "Experiencia",
    events: "Eventos",
    gallery: "Galería",
    contact: "Contacto",
    menu: "Menú",
    loading: "Cargando...",
    error: "Error al cargar la página",
    tryAgain: "Intentar de nuevo",
  },
  zh: {
    home: "首页",
    about: "关于",
    experience: "经验",
    events: "活动",
    gallery: "相册",
    contact: "联系",
    menu: "菜单",
    loading: "加载中...",
    error: "页面加载错误",
    tryAgain: "重试",
  },
};
