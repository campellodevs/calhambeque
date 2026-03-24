import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { ErrorBoundary } from "@/context/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://calhambeque.com.br"),
  title: "O Calhambeque Hot Dog | São Paulo",
  description:
    "O hot dog mais charmoso de São Paulo. Mais de 9 anos levando sabor vintage e estilo nos maiores eventos.",
  keywords: "hot dog, food truck, são paulo, eventos, calhambeque, vintage",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "O Calhambeque Hot Dog | São Paulo",
    description: "O hot dog mais charmoso de São Paulo",
    images: [
      {
        url: "/images/ocalhambeque(1).jpg",
        width: 200,
        height: 200,
        alt: "Calhambeque Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#CC0000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Calhambeque" />
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
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "O Calhambeque",
              image: "/images/ocalhambeque(1).jpg",
              description: "O hot dog mais charmoso de São Paulo. Mais de 9 anos levando sabor vintage e estilo.",
              telephone: "+5511934349515",
              url: "https://calhambeque.com.br",
              address: {
                "@type": "PostalAddress",
                addressCity: "São Paulo",
                addressCountry: "BR",
                addressRegion: "SP",
              },
              priceRange: "R$ 18,00 - R$ 32,00",
              areaServed: {
                "@type": "City",
                name: "São Paulo",
              },
            }),
          }}
        />
      </head>
      <body style={{ backgroundColor: "white", color: "#0A0A0A" }}>
        <ErrorBoundary>
          <MenuProvider>{children}</MenuProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}