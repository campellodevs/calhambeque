# 🚗 O Calhambeque - Hot Dog Food Truck Website

Uma landing page moderna e responsiva para o food truck "O Calhambeque", com sistema de cardápio multilíngue, QR codes dinâmicos e suporte a PWA.

## 🎯 Features

- ✅ **Design Vintage 50s** - Estética retrô com preto, branco e vermelho
- ✅ **Multilíngue** - Suporte a PT, EN, ES, ZH (Português, Inglês, Espanhol, Mandarim)
- ✅ **QR Code Dinâmico** - Geração de QR codes por idioma
- ✅ **PWA Ready** - Instalável como app nativo
- ✅ **Analytics** - Tracking automático com Vercel Analytics
- ✅ **Acessibilidade** - WCAG 2.1 compliant (aria-labels, keyboard nav)
- ✅ **SEO Otimizado** - Metadata, Open Graph, JSON-LD structured data
- ✅ **Error Handling** - Error Boundary com UI customizada
- ✅ **APIs** - Contact form + QR code server-side generator

## 🛠️ Stack Técnico

- **Framework**: Next.js 16+ (App Router)
- **Linguagem**: TypeScript
- **Styling**: TailwindCSS 4.x
- **Estado**: React Context API
- **Analytics**: Vercel Analytics
- **PWA**: next-pwa
- **i18n**: next-intl (estrutura pronta)
- **QR Code**: qrcode.react + qrcode (server)

## 📦 Dependências Principais

```json
{
  "next": "^16.2.1",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "typescript": "^5",
  "tailwindcss": "^4.2.2",
  "@tailwindcss/postcss": "^4.2.2",
  "@vercel/analytics": "latest",
  "qrcode.react": "^4.2.0",
  "qrcode": "^1.x",
  "next-pwa": "^5.x",
  "next-intl": "^3.x",
  "lucide-react": "^1.0.1"
}
```

## 🚀 Getting Started

### Instalação

```bash
# Clonar e instalar
git clone <repo>
cd calhambeque
npm install
```

### Desenvolvimento

```bash
# Rodar servidor de desenvolvimento (Turbopack)
npm run dev

# Acessar em http://localhost:3000
```

### Build & Deploy

```bash
# Build com webpack (compatível com Turbopack)
npm run build

# Testar prod localmente
npm start

# Deploy para Vercel (recomendado)
vercel deploy --prod
```

## 📁 Estrutura do Projeto

```
app/
├── layout.tsx                 # Root layout com Analytics, ErrorBoundary, PWA
├── globals.css               # Variáveis CSS, animações, componentes Tailwind
├── page.tsx                  # Homepage
├── menu/
│   ├── layout.tsx           # Metadata para /menu
│   └── page.tsx             # Sistema de cardápio multilíngue
└── api/
    ├── contact/route.ts     # Webhook de contatos com rate limiting
    └── qr/route.ts          # Gerador de QR code no servidor

components/
├── sections/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Events.tsx
│   ├── Gallery.tsx          # Galeria com lightbox
│   ├── Contact.tsx
│   └── Footer.tsx

context/
├── MenuContext.tsx          # Context do cardápio multilíngue
└── ErrorBoundary.tsx        # Error handling

data/
└── menu.ts                  # Dados de cardápio em 4 idiomas

public/
├── manifest.json            # PWA manifest
├── images/
│   ├── ocalhambeque(1).jpg  # Logo
│   ├── 1.png - 6.png        # Fotos da galeria
│   └── ...

.github/
└── workflows/
    └── ci-cd.yml            # GitHub Actions (lint, build, test)
```

## 🔑 Variáveis de Ambiente

Criar arquivo `.env.local`:

```env
# Contato
NEXT_PUBLIC_WHATSAPP_NUMBER=5511934349515

# Analytics (opcional)
# NEXT_PUBLIC_SENTRY_DSN=

# Webhooks (opcional)
# WEBHOOK_URL=https://hook.make.com/...
```

## 🎨 Customização

### Cores
Editar `app/globals.css`:
```css
@theme {
  --color-brand-red: #cc0000;
  --color-brand-black: #0a0a0a;
  --color-brand-white: #f5f5f5;
}
```

### Tipografia
Fontes já importadas em `app/layout.tsx`:
- **Bebas Neue** - Títulos (vintage)
- **Inter** - Body text

### Cardápio
Editar `data/menu.ts` - estrutura pronta para 4 idiomas

## ✨ Features Principais

### 1. Cardápio Multilíngue (/menu)
- Seletor de idiomas: PT/EN/ES/ZH
- URL baseada em params: `/menu?lang=pt`
- QR code dinâmico por idioma
- Download de QR em PNG
- Agrupamento automático por categoria

### 2. Galeria com Lightbox
- Grid responsivo
- Modal em tela cheia
- Navegação com setas
- Cache bypass com timestamp

### 3. Contato
- WhatsApp direto (já configurado)
- Form pronto em `/api/contact`
- Rate limiting integrado
- Validação de email

### 4. PWA
- Instalável em desktop/mobile
- Modo offline (com service worker)
- Icons customizados
- Manifest automaticamente registrado

## 🧪 Testing

```bash
# Lint
npm run lint

# Build
npm run build

# Deploy Preview (Vercel)
vercel --prod
```

## 📊 Performance

Core Web Vitals:
- ✅ LCP < 2.5s (Largest Contentful Paint)
- ✅ FID < 100ms (First Input Delay)
- ✅ CLS < 0.1 (Cumulative Layout Shift)

Otimizações:
- Next.js Image optimization
- PWA caching (fonts, images)
- Turbopack para dev rápido
- Code splitting automático

## 🔒 Segurança

- ✅ Rate limiting em `/api/contact`
- ✅ Validação de entrada (email)
- ✅ URL encoding em QR codes
- ✅ Error Boundary para não expor erros
- ✅ CSP headers prontos para Vercel

## 📱 Responsive Design

- Mobile first approach
- Tailwind breakpoints
- Touch-friendly buttons
- Adaptive images com `sizes`

## 🚀 Roadmap

- [ ] Integração com banco de dados (Supabase/Firebase)
- [ ] Sistema de pedidos online
- [ ] Integração com sistemas de pagamento
- [ ] Dashboard de gerenciamento
- [ ] Implementar i18n com `/[locale]/` routes
- [ ] Integração com Sentry para monitoramento
- [ ] Email marketing (SendGrid)

## 📞 Suporte

Para dúvidas ou problemas:
1. Verificar logs em `.next/` 
2. Revisar `/api/contact` para forma de contato
3. GitHub Issues para bugs

## 📄 Licença

Privado - O Calhambeque 2026

---

**Deploy Recomendado:** [Vercel](https://vercel.com)

**Build Command:** `npm run build`

**Start Command:** `npm start`

**Environment:** Node 18+ LTS
