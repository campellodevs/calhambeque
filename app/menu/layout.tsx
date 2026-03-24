import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://calhambeque.com.br"),
  title: "Cardápio - O Calhambeque | Hot Dog de São Paulo",
  description: "Confira nosso cardápio multilíngue (PT, EN, ES, ZH) com hot dogs artesanais, bebidas e acompanhamentos. Disponível em 4 idiomas.",
  keywords: "cardápio, hot dog, são paulo, multilíngue, calhambeque",
  openGraph: {
    title: "Cardápio - O Calhambeque",
    description: "Hot dogs artesanais de São Paulo em 4 idiomas",
    images: [{
      url: "/images/ocalhambeque(1).jpg",
      width: 200,
      height: 200,
      alt: "Logo Calhambeque",
    }],
    type: "website",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
