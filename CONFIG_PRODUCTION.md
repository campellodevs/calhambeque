# ⚙️ CONFIGURAÇÃO FINAL DE PRODUÇÃO

## 1. VARIÁVEIS DE AMBIENTE

### `.env.local` (Já criado)
```env
# WhatsApp Business
NEXT_PUBLIC_WHATSAPP_NUMBER=5511934349515

# Webhooks (opcional - para integração com Make.com, Zapier)
# WEBHOOK_URL=https://hook.make.com/...

# Sentry (opcional - para error monitoring)
# NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...

# API URLs (se usar backend externo)
# NEXT_PUBLIC_API_URL=https://api.seu-dominio.com
```

### `.env.production` (Vercel)
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511934349515
# Mesmo conteúdo de .env.local ou valores específicos de produção
```

---

## 2. DOMÍNIO & DNS

### Registro Recomendado
```
Domínio: calhambeque.com.br
Provider: Vercel (mais fácil) ou seu registrador usual

Se usar registrador próprio:
- Tipo: CNAME
- Nome: www
- Valor: cname.vercel-dns.com
- TTL: 3600

Alternativa IPv4:
- Tipo: A
- Nome: @
- Valor: 76.76.19.89
```

### Vercel Dashboard
1. Projeto > Settings > Domains
2. Add Domain > calhambeque.com.br
3. Vercel auto-configura certificado SSL (Let's Encrypt)
4. Redirecionamento automático http → https

---

## 3. METADADOS PARA PRODUÇÃO

### Atualizar em `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  // Domínio correto
  metadataBase: new URL("https://calhambeque.com.br"),
  
  // SEO
  title: "O Calhambeque - Restaurante Vintage em São Paulo",
  description: "Restaurante retrô com pratos autorais e atmosfera dos anos 50. Cardápio multilíngue, ambiente vintage, localização privilegiada.",
  
 
  openGraph: {
    title: "O Calhambeque",
    description: "Restaurante Vintage - Pratos Autorais",
    images: ["/images/og-image.jpg"],
    type: "website",
    url: "https://calhambeque.com.br",
  },
  
  
  twitter: {
    card: "summary_large_image",
    title: "O Calhambeque",
    description: "Restaurante Vintage em São Paulo",
    images: ["/images/og-image.jpg"],
  },
};
```

### Criar OG Image
- Arquivo: `/public/images/og-image.jpg`
- Tamanho: **1200 x 630 pixels** (teste em Facebook Sharing Debugger)
- Conteúdo: Logo/foto do restaurante com branding
- Formato: JPG (mais leve que PNG)

---

## 4. PERFORMANCE PRODUCTION

### Next.js Built-in
```bash
npm run build  # Compila tudo
npm start      # Inicia servidor otimizado
```

### Monitorar Métricas
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms (Core Web Vitals)
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 600ms

Vercel fornece relatório automático no dashboard.

### PWA Service Worker
Já configurado em `next.config.ts`:
```javascript
runtimeCaching: [
  {
    urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
    handler: 'CacheFirst', // Cache imagens por 1 ano
  },
  {
    urlPattern: /\.(?:png|jpg|jpeg|gif|webp|svg)$/i,
    handler: 'CacheFirst', // Cache por 30 dias
  },
]
```

---

## 5. ANALYTICS & MONITORING

### Vercel Analytics (Ativo)
- Automático no Root Layout
- Rastreia Core Web Vitals
- Dashboard em: https://vercel.com/dashboard/[seu-projeto]/analytics

### Google Search Console (Recomendado)
```bash
1. Ir para https://search.google.com/search-console
2. Adicionar propriedade: https://calhambeque.com.br
3. Verificar propriedade com DNS TXT ou arquivo HTML
4. Submeter Sitemap
5. Aguardar indexação (24-48h)
```

### Google Analytics 4 (Opcional)
```bash
npm install @react-google-analytics
```

Adicionar a `app/layout.tsx`:
```tsx
import GoogleAnalytics from '@react-google-analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Sentry Error Monitoring (Opcional)
```bash
npm install @sentry/nextjs
```

---

## 6. SEGURANÇA

### Headers de Segurança
Adicionar ao `next.config.ts`:
```typescript
const config: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Previne clickjacking
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### Rate Limiting (Já implementado)
- `/api/contact`: 5 requisições por IP por minuto
- Ideal para prevenir spam/DDoS

### Validação de Email (Já implementado)
```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  return new Response('Email inválido', { status: 400 })
}
```

### HTTPS (Grátis no Vercel)
- Certificado Let's Encrypt auto-renovado
- Redirect HTTP → HTTPS automático
- HSTS headers configurados

---

## 7. EMAIL DE CONTATO (Webhook)

### Integração com Make.com (Zapier alternativa)

1. **Criar webhook em Make.com:**
   - Create > Webhook > Create
   - Copiar URL

2. **Configurar em `.env.production`:**
   ```env
   WEBHOOK_URL=https://hook.make.com/q1a2w3e4r5t6y7u8i9o0
   ```

3. **Make.com recebe JSON:**
   ```json
   {
     "name": "João Silva",
     "email": "joao@email.com",
     "message": "Gostaria de uma reserva",
     "phone": "11934349515"
   }
   ```

4. **Ações em Make.com:**
   - Enviar e-mail de confirmação
   - Registrar em planilha Google Sheets
   - Notificar via Telegram/WhatsApp
   - Adicionar evento em Calendário

---

## 8. BACKUP & VERSIONING

### GitHub (Recomendado)
```bash
# Fazer commits regularmente
git add .
git commit -m "Production-ready: v1.0.0"
git push origin main

# Criar release
git tag -a v1.0.0 -m "Production Release"
git push origin v1.0.0
```

### Vercel Deployments
- Automático em cada push
- Histórico completo em dashboard
- Rollback com 1 clique

---

## 9. CI/CD GITHUB ACTIONS

### Arquivo: `.github/workflows/ci-cd.yml` (Já criado)

Faz:
1. ✅ Lint e TypeScript check
2. ✅ Build test em Node 18 e 20
3. ✅ Security audit (npm vulnerabilities)
4. ✅ Deploy automático para Vercel

### Configurar GitHub Secrets
1. https://github.com/seu-repo/settings/secrets/actions
2. Add secret:
   - Nome: `VERCEL_TOKEN`
   - Valor: Token gerado em Vercel > Settings > Tokens
3. Add secret:
   - Nome: `VERCEL_PROJECT_ID`
   - Valor: ID do projeto (em `.vercel/project.json` após `vercel link`)

---

## 10. RESPONSIVE DESIGN VERIFICAÇÃO

### Breakpoints (Tailwind)
```
sm: 640px   (Smartphone)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large Desktop)
```

### Testar em:
- iPhone 12 (390x844)
- iPad (768x1024)
- Desktop (1920x1080)

Usar Chrome DevTools > Device Toolbar

---

## 11. DEPLOY WORKFLOW

### Primeira vez (Setup)
```bash
# 1. Clone repo
git clone https://github.com/seu-repo/calhambeque.git
cd calhambeque

# 2. Install & build
npm install
npm run build

# 3. Deploy
vercel deploy --prod
```

### Atualizações futuras
```bash
git add .
git commit -m "Feature: novo layout da galeria"
git push origin main
# Vercel auto-deploya em 30-60 segundos
```

---

## 12. CHECKLIST FINAL ANTES DE GO LIVE

- [ ] `npm run build` sem erros
- [ ] `npm run lint` OK
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio apontado para Vercel
- [ ] SSL/HTTPS funcionando
- [ ] OG image (1200x630) criada
- [ ] Google Search Console ao menos iniciado
- [ ] Analytics conectado
- [ ] Telefone WhatsApp verificado
- [ ] Webhook testado (optional)
- [ ] Testado em mobile
- [ ] Acionado em pelo menos 3 navegadores
- [ ] Lighthouse score > 90
- [ ] GitHub Actions rodando
- [ ] README_COMPLETO.md & DEPLOY_CHECKLIST.md criados

---

## 🎯 RESUMO RÁPIDO

```bash
# Prepare
npm run build
npm run lint

# Push
git add . && git commit -m "v1.0.0" && git push

# Deploy (automático via GitHub Actions)
# Vercel recebe push, testa, compila, deploya

# Monitorar
# - https://vercel.com/dashboard
# - https://search.google.com/search-console
# - Core Web Vitals em dashboard Vercel
```

## 📞 SUPORTE

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind: https://tailwindcss.com/docs

---

**Status: ✅ PRONTO PARA PRODUÇÃO**

Seu site foi otimizado para performance, segurança e SEO. Siga este guia e você terá uma presença online profissional de 1º nível! 🚀
