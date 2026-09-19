# Espaço Livre — Estado do banco

## Núcleo novo aplicado em 19/09/2026

O Supabase recebeu três migrations para o rebuild:

- `20260919214527_create_lean_marketplace_core`
- `20260919214744_tighten_public_listing_view`
- `20260919214750_simplify_public_listing_view`

O estado final contém:

### `listing_events`
Eventos públicos de aquisição:
- `view`
- `whatsapp_click`

RLS:
- INSERT para `anon` e `authenticated`, limitado a anúncios aprovados/ativos;
- SELECT somente para o dono do anúncio.

### `marketplace_listings`
View pública com `security_invoker = true`.

Expõe somente os campos necessários para descoberta e contato. Não expõe `owner_id`, dados financeiros ou dados de autenticação.

### Situação dos dados
Na verificação de 19/09/2026, os 10 registros existentes em `spaces` estavam `blocked` e inativos. Portanto, o catálogo público novo retorna zero anúncios até que anúncios válidos sejam cadastrados/aprovados.

## Segurança herdada
O banco ainda possui estruturas antigas fora do núcleo novo. Os advisors continuam apontando principalmente essas estruturas legadas.

Não tratar os avisos legados como bloqueadores do novo frontend enquanto essas tabelas estiverem fora do fluxo.

## Próxima sincronização de migrations
As migrations foram aplicadas diretamente no projeto para validar o desenho. Ao sincronizar o repositório Supabase local, gerar os arquivos de migration pelo CLI/fluxo oficial antes de tentar reproduzir o banco em outro ambiente.
