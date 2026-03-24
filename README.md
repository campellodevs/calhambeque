# O Calhambeque Hot Dog

> O hot dog mais charmoso de São Paulo — agora também na web.
<img width="1871" height="810" alt="image" src="https://github.com/user-attachments/assets/6fee3e6a-0590-4536-ab64-13ca7d6e70b8" />


---

## Sobre o projeto

O **O Calhambeque** é um food truck temático inspirado em carros clássicos, com mais de 9 anos de estrada, marcando presença nos maiores eventos de São Paulo.

Este projeto nasceu com dois objetivos:

* Criar uma presença digital moderna e profissional
* Resolver um problema real: cardápio multilíngue para eventos com QR Code

---

## O que torna esse projeto especial?

Não é apenas uma landing page.

É uma solução pensada para eventos reais.

### Diferenciais:

* Cardápio em múltiplos idiomas (PT, EN, ES, ZH)
* QR Code dinâmico por idioma
* Experiência rápida e responsiva
* Design inspirado em carros vintage (Hot Wheels + retrô)
* Estrutura escalável e pronta para evoluir

---

## Demonstração


(https://calhambeque.vercel.app/)
---

## Tecnologias utilizadas

* React.js
* Next.js (App Router)
* TypeScript
* TailwindCSS
* Axios
* Context API
* QR Code Generator

---

## Estrutura do projeto

```id="q9x8pl"
/app
  page.tsx
  /menu

/components
  /sections
  /menu

/context
/data
/public
```

---

## Funcionalidade principal: Cardápio inteligente

A página `/menu` permite:

* Seleção de idioma via interface
* URL única por idioma:

  ```
  /menu?lang=pt
  /menu?lang=en
  /menu?lang=es
  /menu?lang=zh
  ```
* Geração automática de QR Code
* Uso direto em eventos físicos

Isso permite que clientes escaneiem o QR Code e acessem o cardápio no idioma correto.

---

## Design e Experiência

O design foi construído com base em:

* Preto profundo (#0A0A0A)
* Branco suave (#F5F5F5)
* Vermelho vibrante (#CC0000)
* Destaques em dourado (#FFD700)

Tipografia:

* Bebas Neue (identidade retrô)
* Inter (legibilidade moderna)

---

## Responsividade

* Mobile-first
* Totalmente adaptado para eventos
* Navegação simples e direta

---

## Como rodar o projeto

```bash id="1d9z5w"
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Start produção
npm start
```

---

## Boas práticas aplicadas

* Componentização
* Separação de responsabilidades
* Uso de Context API
* Tipagem com TypeScript
* Estrutura escalável
* Performance otimizada

---

## Roadmap (próximos passos)

* Deploy na Vercel
* Integração com WhatsApp real
* Upload de imagens dinâmicas
* Painel admin para editar cardápio
* Analytics de acessos via QR Code

---

## Insight do projeto

Esse projeto pode evoluir para:

* Um SaaS de cardápio digital para eventos
* Solução para food trucks e feiras
* Plataforma de experiência gastronômica

---

## Autor

Lucca Campello Rodrigues dos Santos

* Engenharia de Software
* Desenvolvedor Fullstack
* Focado em criar soluções reais com tecnologia

Contato:

* Email: [luccacampello21@gmail.com](mailto:luccacampello21@gmail.com)
* GitHub: https://github.com/campellodevs

---

## Conclusão

Mais do que um site, esse projeto representa:

* Resolver um problema real
* Criar uma experiência
* Construir algo com identidade

---

"Não é só um hot dog. É uma experiência sobre rodas."
