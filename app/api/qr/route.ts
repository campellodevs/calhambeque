import { NextRequest, NextResponse } from "next/server";

// Cache simples para QR codes
const qrCache = new Map<string, Uint8Array>();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    const size = parseInt(searchParams.get("size") || "200");

    if (!url) {
      return NextResponse.json(
        { error: "URL parameter is required" },
        { status: 400 }
      );
    }

    // Validar tamanho
    if (size < 50 || size > 500) {
      return NextResponse.json(
        { error: "Size must be between 50 and 500" },
        { status: 400 }
      );
    }

    const cacheKey = `${url}-${size}`;

    // Verificar cache
    if (qrCache.has(cacheKey)) {
      const cachedBuffer = qrCache.get(cacheKey);
      if (cachedBuffer) {
        return new NextResponse(Buffer.from(cachedBuffer), {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }
    }

    // Importar dinâmico para evitar problemas de SSR
    const QRCode = require("qrcode");

    // Gerar QR code
    const qrImage = await QRCode.toBuffer(url, {
      errorCorrectionLevel: "H",
      type: "image/png",
      width: size,
      margin: 1,
      color: {
        dark: "#0A0A0A",
        light: "#FFFFFF",
      },
    });

    // Cachear por 1 hora
    if (qrCache.size > 100) {
      const firstKey = qrCache.keys().next().value;
      if (firstKey) {
        qrCache.delete(firstKey);
      }
    }
    qrCache.set(cacheKey, new Uint8Array(qrImage));

    return new NextResponse(qrImage, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
        "Content-Disposition": 'attachment; filename="qrcode.png"',
      },
    });
  } catch (error) {
    console.error("Erro ao gerar QR Code:", error);
    
    return NextResponse.json(
      { error: "Erro ao gerar QR Code" },
      { status: 500 }
    );
  }
}
