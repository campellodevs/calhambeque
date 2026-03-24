export type Language = "pt" | "en" | "es" | "zh";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "classic" | "special" | "drinks" | "sides";
  emoji: string;
}

export interface MenuData {
  categories: {
    classic: string;
    special: string;
    drinks: string;
    sides: string;
  };
  items: MenuItem[];
}

export const menuTranslations: Record<Language, MenuData> = {
  pt: {
    categories: {
      classic: "Clássicos",
      special: "Especiais",
      drinks: "Bebidas",
      sides: "Acompanhamentos",
    },
    items: [
      {
        id: "1",
        name: "Hot Dog Tradicional",
        description: "Pão brioche, salsicha artesanal, molho especial, batata palha e mostarda",
        price: "R$ 18,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "2",
        name: "Hot Dog Completo",
        description: "Pão brioche, salsicha artesanal, cheddar, bacon crocante, cebola caramelizada e molho especial",
        price: "R$ 26,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "3",
        name: "Calhambeque Dog",
        description: "Nosso carro-chefe! Salsicha artesanal defumada, cheddar derretido, bacon, picles, cebola roxa e molho secreto",
        price: "R$ 32,00",
        category: "special",
        emoji: "⭐",
      },
      {
        id: "4",
        name: "Hot Dog Veggie",
        description: "Salsicha de ervas, pão integral, cream cheese, tomate seco e rúcula",
        price: "R$ 24,00",
        category: "special",
        emoji: "🌿",
      },
      {
        id: "5",
        name: "Batata Frita",
        description: "Porção de batata frita crocante com sal e ervas",
        price: "R$ 14,00",
        category: "sides",
        emoji: "🍟",
      },
      {
        id: "6",
        name: "Onion Rings",
        description: "Anéis de cebola empanados e crocantes",
        price: "R$ 16,00",
        category: "sides",
        emoji: "🧅",
      },
      {
        id: "7",
        name: "Refrigerante",
        description: "Coca-Cola, Guaraná ou Sprite (350ml)",
        price: "R$ 8,00",
        category: "drinks",
        emoji: "🥤",
      },
      {
        id: "8",
        name: "Suco Natural",
        description: "Laranja, limão ou maracujá",
        price: "R$ 10,00",
        category: "drinks",
        emoji: "🍊",
      },
    ],
  },

  en: {
    categories: {
      classic: "Classics",
      special: "Specials",
      drinks: "Drinks",
      sides: "Sides",
    },
    items: [
      {
        id: "1",
        name: "Traditional Hot Dog",
        description: "Brioche bun, artisan sausage, special sauce, shoestring potatoes and mustard",
        price: "R$ 18,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "2",
        name: "Full Hot Dog",
        description: "Brioche bun, artisan sausage, cheddar, crispy bacon, caramelized onions and special sauce",
        price: "R$ 26,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "3",
        name: "Calhambeque Dog",
        description: "Our signature! Smoked artisan sausage, melted cheddar, bacon, pickles, red onion and secret sauce",
        price: "R$ 32,00",
        category: "special",
        emoji: "⭐",
      },
      {
        id: "4",
        name: "Veggie Hot Dog",
        description: "Herb sausage, whole grain bun, cream cheese, sun-dried tomato and arugula",
        price: "R$ 24,00",
        category: "special",
        emoji: "🌿",
      },
      {
        id: "5",
        name: "French Fries",
        description: "Crispy fries with salt and herbs",
        price: "R$ 14,00",
        category: "sides",
        emoji: "🍟",
      },
      {
        id: "6",
        name: "Onion Rings",
        description: "Crispy battered onion rings",
        price: "R$ 16,00",
        category: "sides",
        emoji: "🧅",
      },
      {
        id: "7",
        name: "Soft Drink",
        description: "Coca-Cola, Guaraná or Sprite (350ml)",
        price: "R$ 8,00",
        category: "drinks",
        emoji: "🥤",
      },
      {
        id: "8",
        name: "Fresh Juice",
        description: "Orange, lemon or passion fruit",
        price: "R$ 10,00",
        category: "drinks",
        emoji: "🍊",
      },
    ],
  },

  es: {
    categories: {
      classic: "Clásicos",
      special: "Especiales",
      drinks: "Bebidas",
      sides: "Acompañamientos",
    },
    items: [
      {
        id: "1",
        name: "Hot Dog Tradicional",
        description: "Pan brioche, salchicha artesanal, salsa especial, papas paja y mostaza",
        price: "R$ 18,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "2",
        name: "Hot Dog Completo",
        description: "Pan brioche, salchicha artesanal, cheddar, tocino crocante, cebolla caramelizada y salsa especial",
        price: "R$ 26,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "3",
        name: "Calhambeque Dog",
        description: "¡Nuestra estrella! Salchicha ahumada artesanal, cheddar derretido, tocino, pepinillos, cebolla morada y salsa secreta",
        price: "R$ 32,00",
        category: "special",
        emoji: "⭐",
      },
      {
        id: "4",
        name: "Hot Dog Veggie",
        description: "Salchicha de hierbas, pan integral, queso crema, tomate seco y rúcula",
        price: "R$ 24,00",
        category: "special",
        emoji: "🌿",
      },
      {
        id: "5",
        name: "Papas Fritas",
        description: "Porción de papas fritas crocantes con sal y hierbas",
        price: "R$ 14,00",
        category: "sides",
        emoji: "🍟",
      },
      {
        id: "6",
        name: "Aros de Cebolla",
        description: "Aros de cebolla apanados y crocantes",
        price: "R$ 16,00",
        category: "sides",
        emoji: "🧅",
      },
      {
        id: "7",
        name: "Refresco",
        description: "Coca-Cola, Guaraná o Sprite (350ml)",
        price: "R$ 8,00",
        category: "drinks",
        emoji: "🥤",
      },
      {
        id: "8",
        name: "Jugo Natural",
        description: "Naranja, limón o maracuyá",
        price: "R$ 10,00",
        category: "drinks",
        emoji: "🍊",
      },
    ],
  },

  zh: {
    categories: {
      classic: "经典款",
      special: "特色款",
      drinks: "饮料",
      sides: "小食",
    },
    items: [
      {
        id: "1",
        name: "传统热狗",
        description: "布里欧修面包，手工香肠，特制酱料，薯条丝和芥末",
        price: "R$ 18,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "2",
        name: "豪华热狗",
        description: "布里欧修面包，手工香肠，切达奶酪，脆培根，焦糖洋葱和特制酱料",
        price: "R$ 26,00",
        category: "classic",
        emoji: "🌭",
      },
      {
        id: "3",
        name: "卡拉姆贝克特色热狗",
        description: "招牌菜！烟熏手工香肠，融化切达奶酪，培根，泡菜，红洋葱和秘制酱料",
        price: "R$ 32,00",
        category: "special",
        emoji: "⭐",
      },
      {
        id: "4",
        name: "素食热狗",
        description: "香草香肠，全麦面包，奶油奶酪，番茄干和芝麻菜",
        price: "R$ 24,00",
        category: "special",
        emoji: "🌿",
      },
      {
        id: "5",
        name: "薯条",
        description: "香脆薯条配盐和香草",
        price: "R$ 14,00",
        category: "sides",
        emoji: "🍟",
      },
      {
        id: "6",
        name: "洋葱圈",
        description: "香脆裹粉洋葱圈",
        price: "R$ 16,00",
        category: "sides",
        emoji: "🧅",
      },
      {
        id: "7",
        name: "软饮料",
        description: "可口可乐，瓜拉纳或雪碧 (350ml)",
        price: "R$ 8,00",
        category: "drinks",
        emoji: "🥤",
      },
      {
        id: "8",
        name: "鲜榨果汁",
        description: "橙汁，柠檬汁或百香果汁",
        price: "R$ 10,00",
        category: "drinks",
        emoji: "🍊",
      },
    ],
  },
};

export const languageLabels: Record<Language, { flag: string; label: string }> = {
  pt: { flag: "🇧🇷", label: "Português" },
  en: { flag: "🇺🇸", label: "English" },
  es: { flag: "🇪🇸", label: "Español" },
  zh: { flag: "🇨🇳", label: "中文" },
};