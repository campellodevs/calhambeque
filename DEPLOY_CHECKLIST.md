# 🚀 DEPLOY CHECKLIST - O Calhambeque

## ✅ PRÉ-DEPLOY (Antes de subir para produção)

### Código & Compilação
- [ ] `npm run build` compila sem erros
- [ ] `npm run lint` sem warnings críticos
- [ ] Todos os TypeScript errors resolvidos
- [ ] Testes locais em `npm run dev` OK

### Configuração
- [ ] `.env.local` criado e preenchido
  - [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` correto
  - [ ] `WEBHOOK_URL` configurado (opcional)
- [ ] `next.config.ts` com turbopack config
- [ ] `public/manifest.json` com dados corretos
- [ ] Favicon em `public/images/ocalhambeque(1).jpg`

### SEO & Metadata
- [ ] `metadataBase` em layouts (para Open Graph)
- [ ] Títulos e descriptions específicos por página
- [ ] JSON-LD Structured Data validado
- [ ] OG images com dimensions corretos (1200x630)
- [ ] Sitemap.xml (opcional - Vercel auto-gera)

### Performance
- [ ] Imagens otimizadas e com `sizes` prop
- [ ] Lazy loading em imagens não-críticas
- [ ] PWA service worker funcional
- [ ] Cache headers configurados

### Acessibilidade
- [ ] aria-labels em botões interativos
- [ ] Contraste de cores OK (WCAG AA mínimo)
- [ ] Keyboard navigation testada
- [ ] Screen reader testado (opcional)

### Segurança
- [ ] Nenhuma credential/API key exposta em código
- [ ] `.env.local` no `.gitignore`
- [ ] Rate limiting em `/api/contact` ativo
- [ ] Validação de entrada em forms
- [ ] CORS headers configurados (se necessário)

### Analytics & Monitoring
- [ ] Vercel Analytics conectado
- [ ] Sentry (opcional) - se ativado
- [ ] Error tracking funcional

---

## 🌐 DEPLOY EM VERCEL (Recomendado)

### Passo 1: Preparar repositório
```bash
git init
git add .
git commit -m "Initial commit - Calhambeque website"
git remote add origin https://github.com/seu-repo/calhambeque.git
git push -u origin main
```

### Passo 2: Conectar ao Vercel
```bash
# Opção A: CLI
npm i -g vercel
vercel login
vercel

# Opção B: Dashboard
# Ir para https://vercel.com/new
# Selecionar repositório GitHub
```

### Passo 3: Variáveis de Ambiente
No Vercel Dashboard > Settings > Environment Variables:
```
NEXT_PUBLIC_WHATSAPP_NUMBER = 5511934349515
WEBHOOK_URL = https://hook.make.com/... (opcional)
```

### Passo 4: Deploy
```bash
# Automático quando fizer push para main
# Ou manualmente:
vercel deploy --prod
```

---

## 🔧 POST-DEPLOY (Depois de subir)

### Testes em Produção
- [ ] Site acessível em https://seu-dominio.com
- [ ] Carregamento rápido (LCP < 2.5s)
- [ ] Todas as imagens carregando
- [ ] Galeria funcionando (lightbox)
- [ ] Menu multilíngue funcionando
- [ ] QR code gerando corretamente
- [ ] WhatsApp link funcionando
- [ ] Analytics rastreando pageviews

### Mobile
- [ ] Responsividade em mobile OK
- [ ] PWA instalável (Add to Home Screen)
- [ ] Touch interactions OK
- [ ] Orientação landscape/portrait OK

### Navegadores
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Validação Técnica
- [ ] Google PageSpeed Insights > 90
- [ ] Lighthouse Audit > 90
- [ ] Mobile-Friendly test OK
- [ ] Google Search Console conectado
- [ ] Sitemap submetido

---

## 📧 CONFIGURAÇÕES ADICIONAIS (Opcional)

### Email de Contato
[ ] Configurar resposta automática em `/api/contact`:
```bash
npm install resend
# ou
npm install sendgrid
```

### Banco de Dados (para persistência)
[ ] Supabase / Firebase:
```bash
npm install @supabase/supabase-js
```

### Monitoramento
[ ] Sentry para error tracking:
```bash
npm install @sentry/nextjs
```

### Analytics Avançado
[ ] Google Analytics 4
[ ] Hotjar para heatmaps

---

## 🎯 DOMÍNIO CUSTOMIZADO

### 1. Registrar Domínio
- GoDaddy, Namecheap, etc
- Recomendado: `calhambeque.com.br`

### 2. Apontar para Vercel
No provider de DNS:
```
CNAME: www → cname.vercel-dns.com
A: @ → 76.76.19.89
AAAA: @ → 2610:7f8:3::3:0:0:1
```

### 3. Configurar em Vercel
Vercel Dashboard > Domains > Add Domain

### 4. Certificado SSL
Vercel auto-gera Let's Encrypt (grátis)

---

## 🚨 TROUBLESHOOTING COMUM

### Build falha
```bash
npm run build -- --webpack  # Força webpack em vez de Turbopack
```

### Dev lento
- Verificar se C:\Users\lucca\calhambeque\.next é local
- Fechar Chrome DevTools se aberto
- `npx next telemetry disable`

### Analytics não trackeia
- Verificar se `@vercel/analytics` está em layout.tsx
- Aguardar 5 min após deploy

### PWA não instala
- Verificar manifest.json
- Testar em HTTPS (não localhost)
- Chrome DevTools > Application > Manifest

---

## 📋 CHECKLIST FINAL

```bash
# Template para validar antes de produção
npm run lint
npm run build
npm start  # Teste local em prod mode
# Abrir browser e testar todas as features
```

---

## 🎉 VOCÊ ESTÁ PRONTO!

Quando tudo passar neste checklist, seu site está 100% pronto para produção! 🚀

**Dúvidas?** Consulte:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
