# Requinte Coffee Buffet — Landing Page

Landing page premium em Next.js 15 (App Router), TypeScript, Tailwind CSS,
Framer Motion e Lucide React.

## Rodar

```bash
npm install
npm run dev
```

Producao:

```bash
npm run build
npm start
```

## Configuracao obrigatoria antes de publicar

Copie `.env.local.example` para `.env.local` e preencha:

| Variavel | Para que serve |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numero em formato internacional, so digitos (ex.: `5561999999999`). Alimenta o botao flutuante, os CTAs e o envio do formulario. **Sem ele, todos os links de WhatsApp caem no Instagram** — nenhum telefone foi inventado no codigo. |
| `NEXT_PUBLIC_SITE_URL` | Dominio publico. Usado em canonical, Open Graph, sitemap e structured data. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail comercial exibido no rodape (opcional). |

## Conteudo pendente

Todo texto do site vive em [`content/site.ts`](content/site.ts). Nada foi
inventado: onde faltava informacao oficial ficou um marcador visivel.

Procure por `[INSERIR` e `[INFORMACAO A CONFIRMAR` para achar tudo de uma vez:

```bash
grep -n "\[INSERIR\|\[INFORMACAO A CONFIRMAR" content/site.ts
```

Pendencias atuais:

- historia oficial da empresa, equipe e ano de fundacao (secao Sobre);
- endereco, horario de atendimento e e-mail (rodape);
- respostas de FAQ sobre minimo de convidados, contratacao, deslocamento e
  formatos de casamento;
- depoimentos reais. A secao de prova social ja esta pronta: basta adicionar
  objetos `{ quote, author, role }` em `testimonialsSection.items` que ela passa
  a exibir os depoimentos no lugar do aviso.

## Imagens

As 17 fotos originais foram renomeadas e organizadas em
`public/images/requinte/` com nomes semanticos (`requinte-01-mesa-panoramica.jpg`
etc.). Os originais continuam em `imagens_fic/` e nao sao usados pela aplicacao.

Cada foto tem `alt` descritivo e categoria (gastronomia, eventos, ambientes,
detalhes) definidos em `content/site.ts`. Para trocar uma foto de secao, basta
apontar outra chave de `photos` — nenhum componente precisa mudar.

## Estrutura

```text
app/
  layout.tsx        metadata, fontes, structured data (Schema.org LocalBusiness)
  page.tsx          composicao das secoes
  globals.css       tokens, botoes, campos de formulario
  sitemap.ts        sitemap.xml
  robots.ts         robots.txt
components/         uma secao por arquivo + Reveal e Lightbox compartilhados
content/site.ts     todo o conteudo editorial
lib/                helper do WhatsApp e hook de montagem dos overlays
public/images/requinte/
```

## Formulario de orcamento

O envio monta uma mensagem com todos os campos e abre o WhatsApp em nova aba,
depois mostra a confirmacao na propria pagina. Nao ha backend nem banco de
dados. Para receber os pedidos por e-mail ou CRM, troque o corpo de `onSubmit`
em [`components/QuoteForm.tsx`](components/QuoteForm.tsx) por uma chamada a uma
API route.

## Notas tecnicas

- `framer-motion` esta fixado em `~11.18.2`. A linha 12.x nao hidrata as
  animacoes nesta combinacao de Next 15 + React 19 — a pagina renderiza no
  estado inicial (elementos invisiveis). Nao suba a versao sem testar no
  navegador.
- Os overlays em tela cheia (lightbox e menu mobile) usam
  `lib/useMountTransition.ts` em vez de `AnimatePresence`: com React 19 em
  StrictMode o `AnimatePresence` pode nao desmontar o filho apos a saida,
  deixando um overlay invisivel por cima da pagina e bloqueando os cliques.
- Acessibilidade: HTML semantico, skip link, foco visivel, foco preso no
  lightbox, `ESC` fecha lightbox e menu, setas navegam carrossel e lightbox,
  todos os controles com `aria-label`, `prefers-reduced-motion` respeitado.
- Sem overflow horizontal em 320, 375, 430, 768, 1024, 1280, 1440, 1920 px.
