# Espaço Livre — Mapa de limpeza

## Preservado

### Código
- Next.js/App Router.
- configuração TypeScript.
- cliente Supabase.
- base visual será refeita.
- rotas públicas serão reconstruídas.

### Banco
- `profiles`;
- `spaces`;
- `marketplace_spaces`;
- `advertiser_subscriptions`.

### Histórico
A branch `archive/pre-lean-rebuild-2026-09-19` preserva o estado anterior ao rebuild.

## Removido do produto novo

Rotas e componentes de:
- solicitar reserva;
- confirmação de reserva;
- pagamentos de locação;
- repasses;
- calendário transacional;
- negociação via formulário interno.

## Legado de banco

Não apagar tabelas legadas apenas porque estão antigas. Primeiro retirar dependências do aplicativo novo.

Após o novo MVP estar estável, fazer uma segunda limpeza com:
1. inventário de dependências;
2. backup/retensão definida;
3. remoção em blocos;
4. advisors;
5. testes de regressão.

## Candidatos fortes a descarte futuro

Estruturas de teste, backups temporários, tabelas transacionais antigas e tabelas financeiras sem função no novo produto.

A remoção física de cada uma deve ocorrer somente depois de confirmar que nenhum fluxo, view, função, foreign key ou integração ainda depende dela.

## Regra para continuar outro dia

O ponto de continuidade é este documento + `docs/ROADMAP.md`.

Não é necessário reauditar todo o legado para continuar o desenvolvimento do núcleo.
