# Espaço Livre — Produto

## 1. Propósito

O Espaço Livre é um marketplace de descoberta e geração de contatos para quem está organizando festas e eventos.

A plataforma ajuda o visitante a encontrar anúncios relevantes — espaços, equipamentos e itens para eventos — entender a oferta e falar diretamente com o anunciante.

## 2. Modelo de negócio

A receita da plataforma vem exclusivamente da assinatura do anunciante.

A plataforma não intermedeia o pagamento do aluguel/locação do item anunciado.

### A plataforma não faz
- reserva ou confirmação de locação;
- cobrança do cliente do anúncio;
- comissão sobre locação;
- split de pagamento;
- repasse/payout;
- reembolso;
- disputa financeira;
- calendário transacional;
- checkout de reserva.

### A plataforma faz
- catálogo e descoberta;
- publicação de anúncios;
- destaque de anúncios conforme plano;
- contato por WhatsApp;
- métricas de visualização e cliques no WhatsApp;
- assinatura do anunciante;
- moderação/publicação do anúncio.

## 3. Público

### Visitante
Pessoa organizando uma festa ou evento e procurando o que precisa.

### Anunciante
Pessoa ou empresa que oferece espaço, equipamento ou item diretamente relacionado a festas e eventos.

## 4. Regra de catálogo

Só entram anúncios que resolvam uma necessidade real de organização de festa/evento.

Exemplos:
- salões, chácaras, sítios, espaços para eventos;
- mesas e cadeiras;
- tendas;
- brinquedos infláveis;
- equipamentos para eventos;
- itens e estruturas para festa.

Não entram ofertas sem relação direta com a organização do evento.

## 5. Jornada do visitante

1. Home.
2. Busca por localização e necessidade.
3. Categorias rápidas.
4. Resultados.
5. Página do anúncio.
6. Clique em "Chamar no WhatsApp".
7. Negociação direta com o anunciante.

Mapa e favoritos são recursos posteriores; não bloqueiam o MVP.

## 6. Jornada do anunciante

1. Landing para anunciar.
2. Escolha do plano.
3. Conta.
4. Cadastro do anúncio.
5. Envio para revisão.
6. Publicação.
7. Recebimento de contatos por WhatsApp.
8. Acompanhamento de visualizações e cliques.

## 7. Conversão principal

A conversão do visitante é o contato no WhatsApp.

Mensagem padrão sugerida:
"Olá! Vi seu anúncio no Espaço Livre e gostaria de saber mais detalhes."

## 8. MVP

Obrigatório:
- Home;
- busca;
- categorias;
- catálogo;
- página do anúncio;
- WhatsApp;
- autenticação;
- cadastro/edição de anúncio;
- aprovação/publicação;
- assinatura do anunciante;
- dashboard simples;
- métricas de views e WhatsApp clicks.

Posterior:
- mapa;
- favoritos;
- ranking/recomendação;
- automações avançadas;
- recursos transacionais.

## 9. Vocabulário

O domínio público usa **anúncio/listing**, não apenas "espaço".

Um anúncio pode ser:
- `space`;
- `equipment`;
- `event_item`.

A tabela legada `spaces` pode continuar como armazenamento físico do MVP, mas a aplicação deve tratar a entidade como anúncio.
