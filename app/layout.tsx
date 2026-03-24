import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/context/MenuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O Calhambeque Hot Dog | São Paulo",
  description:
    "O hot dog mais charmoso de São Paulo. Mais de 9 anos levando sabor vintage e estilo nos maiores eventos.",
  keywords: "hot dog, food truck, são paulo, eventos, calhambeque, vintage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: "white", color: "#0A0A0A" }}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}