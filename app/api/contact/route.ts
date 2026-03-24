import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

// Rate limiting simples em memória
const requestLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 5; // máximo 5 requisições por minuto

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) || [];
  
  // Remove timestamps antigos
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW);
  
  if (validTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  validTimestamps.push(now);
  requestLog.set(ip, validTimestamps);
  
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    // Parse da requisição
    const body: ContactPayload = await req.json();

    // Validação básica
    if (!body.email || !body.message) {
      return NextResponse.json(
        { error: "Email e mensagem são obrigatórios" },
        { status: 400 }
      );
    }

    // Sanitização
    const sanitizedEmail = body.email.trim().toLowerCase();
    const sanitizedMessage = body.message.trim().substring(0, 1000);

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Aqui você pode:
    // 1. Salvar no banco de dados
    // 2. Enviar email
    // 3. Chamar webhook externo (Make, Zapier, etc)
    // 4. Enviar para sistema de CRM

    // Exemplo: enviar webhook para Make/Zapier
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: body.name || "Sem nome",
          email: sanitizedEmail,
          phone: body.phone || "Sem telefone",
          message: sanitizedMessage,
          timestamp: new Date().toISOString(),
          ip,
        }),
      });
    }

    // Log do contato (em produção, salvar no banco)
    console.log(`[CONTATO] ${sanitizedEmail}: ${sanitizedMessage.substring(0, 50)}...`);

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada com sucesso! Você receberá uma resposta em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    
    return NextResponse.json(
      { error: "Erro ao processar sua mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

// Verificar saúde do endpoint
export async function GET() {
  return NextResponse.json({ status: "ok" });
}
