# Espaço Livre — Arquitetura

## Princípio

Construir um núcleo pequeno e explícito. O legado não participa do fluxo novo.

## Núcleo aproveitado

### Supabase
- `profiles`: identidade e dados básicos do anunciante.
- `spaces`: armazenamento atual dos anúncios; já possui campos de marketplace para espaço/equipamento.
- `marketplace_spaces`: contrato público atual de anúncios aprovados/ativos.
- `advertiser_subscriptions`: base para assinatura do anunciante.

### Next.js
- App Router.
- Server Components para páginas públicas.
- Supabase JS para acesso ao Data API.
- Vercel como hospedagem.

## Núcleo novo

### `listing_events`
Eventos de aquisição:
- `view`;
- `whatsapp_click`.

Campos mínimos:
- id;
- listing_id;
- event_type;
- created_at;
- session_id opcional.

Não armazenar conteúdo de conversa do WhatsApp.

## Contrato público

A aplicação deve consumir apenas o conjunto necessário:

- id;
- title;
- description;
- listing_type;
- listing_subtype;
- market_category;
- market_subcategories;
- city;
- state;
- neighborhood;
- image_url;
- image_urls;
- price_label;
- price_per_hour;
- price_per_day;
- capacity;
- amenities;
- included_items;
- quantity_available;
- requires_quote;
- coverage_city;
- coverage_state;
- service_mode;
- equipment_delivery_mode;
- whatsapp;
- verified/public approval state.

## Publicação

Um anúncio público precisa estar:
- `approval_status = approved`;
- `is_active = true`.

O contrato público não deve expor campos financeiros, KYC, dados administrativos ou estruturas de reserva.

## Autorização

- Visitante anônimo: leitura apenas do catálogo público.
- Anunciante autenticado: cria/edita os próprios anúncios.
- Administrador: modera anúncios.
- Assinatura: anunciante lê o próprio registro.
- Métricas: anunciante lê métricas dos próprios anúncios; escrita de evento deve ser controlada.

## Legado isolado

Não usar pelo novo frontend:
- bookings;
- reservations;
- reservas;
- reservation_requests;
- pagamentos;
- payment_webhook_logs;
- mercadopago_webhook_events;
- repasses;
- repasses_host;
- cart_orders;
- cart_order_items;
- disponibilidade;
- fixed_slots;
- space_availability;
- bloqueios e calendários transacionais;
- fluxos antigos de serviços que não fazem parte do catálogo novo.

Essas estruturas podem permanecer temporariamente para preservar dados históricos, mas não fazem parte da arquitetura do produto novo.

## Decisão de reconstrução

Não corrigir a antiga jornada de reserva. Ela contradiz o novo modelo de negócio.

O frontend público será reconstruído em torno de anúncio + descoberta + WhatsApp.

A tabela `spaces` será reaproveitada no MVP porque já contém os campos de marketplace necessários. Uma tabela `listings` nova só deve ser criada se a evolução do produto provar que `spaces` virou uma limitação real.

## Segurança

- Nenhum service role no cliente.
- Chave publishable somente via variável de ambiente.
- Sem fallback de credenciais no código.
- RLS obrigatório nas tabelas expostas.
- Views públicas devem expor somente dados de catálogo.
- Ativar proteção contra senhas vazadas quando a autenticação entrar em produção.
