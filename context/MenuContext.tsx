"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  menuTranslations,
  MenuItem,
  Language,
  MenuData,
} from "@/data/menu";

interface MenuContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  menuData: MenuData;
  updateItem: (id: string, updates: Partial<MenuItem>) => void;
  resetMenu: () => void;
}

const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const [customMenus, setCustomMenus] = useState<
    Partial<Record<Language, MenuData>>
  >({})

  const menuData: MenuData =
    customMenus[language] ?? menuTranslations[language];

  const updateItem = useCallback(
    (id: string, updates: Partial<MenuItem>) => {
      const current = customMenus[language] ?? menuTranslations[language];

      const updatedItems = current.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      );

      setCustomMenus((prev) => ({
        ...prev,
        [language]: {
          ...current,
          items: updatedItems,
        },
      }));
    },
    [language, customMenus]
  );

  const resetMenu = useCallback(() => {
    setCustomMenus((prev) => {
      const updated = { ...prev };
      delete updated[language];
      return updated;
    });
  }, [language]);

  return (
    <MenuContext.Provider
      value={{
        language,
        setLanguage,
        menuData,
        updateItem,
        resetMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu(): MenuContextType {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu deve ser usado dentro de <MenuProvider>");
  }
  return context;
}