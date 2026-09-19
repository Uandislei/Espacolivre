# Espaço Livre

Nova aplicação Next.js do marketplace Espaço Livre.

## Arquitetura
- Next.js App Router
- Supabase Data API com publishable key
- Contrato público: marketplace_spaces
- Solicitações: reservation_requests
- Assinaturas: advertiser_subscriptions

## Desenvolvimento
1. Copie .env.example para .env.local.
2. Preencha NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY com a chave publishable do projeto Supabase.
3. npm install
4. npm run dev

A aplicação antiga permanece preservada no projeto de produção enquanto esta nova base é validada.