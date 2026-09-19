# Espaço Livre

Marketplace de descoberta e geração de contatos para festas e eventos.

## Produto

O visitante encontra espaços, equipamentos e itens relevantes para seu evento e negocia diretamente com o anunciante pelo WhatsApp.

O Espaço Livre não processa o pagamento da locação, não cobra comissão, não gerencia reserva e não opera repasses.

A receita da plataforma é a assinatura do anunciante.

## Stack

- Next.js App Router
- TypeScript
- Supabase Auth + Data API
- Vercel

## Núcleo de dados

- `profiles`
- `spaces` — armazenamento dos anúncios no MVP
- `marketplace_listings` — contrato público enxuto
- `advertiser_subscriptions` — assinatura do anunciante
- `listing_events` — views e cliques no WhatsApp

## Documentação

- `docs/PRODUCT.md`
- `docs/ARCHITECTURE.md`
- `docs/CLEANUP.md`
- `docs/ROADMAP.md`

## Desenvolvimento

1. Copie `.env.example` para `.env.local`.
2. Preencha `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
3. Execute `npm install`.
4. Execute `npm run dev`.

A branch `archive/pre-lean-rebuild-2026-09-19` preserva o estado anterior ao rebuild.
