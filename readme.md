# PROJETO WEB — BORA LÁ UAI TURISMO

## 1. PAPEL E OBJETIVO

Atue como desenvolvedor web sênior, arquiteto de interfaces, designer UI/UX especializado em turismo, especialista em conversão, SEO local, acessibilidade e desenvolvimento frontend.

Desenvolva um site multipage completo, profissional, responsivo e funcional para a agência **Bora Lá UAI Turismo**, localizada na região de São João del-Rei e Tiradentes, Minas Gerais.

O responsável pela empresa é Rafael Rosa, guia de turismo na região.

O principal objetivo do site é transformar visitantes em clientes interessados nos passeios, facilitando o contato e as reservas pelo WhatsApp da agência.

O site deve transmitir:
- Confiança e profissionalismo.
- Acolhimento e hospitalidade mineira.
- Aventura, cultura, história e contato com a natureza.
- Facilidade para conhecer os passeios e organizar uma viagem.
- Valorização do patrimônio histórico, cultural e natural de Minas Gerais.

Não desenvolva somente uma landing page, wireframe, protótipo ou demonstração estática.

Implemente páginas HTML independentes, navegação real entre páginas, componentes visuais consistentes, interações funcionais, carrinho de passeios persistente, integração com WhatsApp e recursos de acessibilidade.

## 2. ANÁLISE INICIAL DO PROJETO

Antes de programar:

1. Inspecione a estrutura de diretórios existente.
2. Localize a pasta `imagens` e identifique o logotipo e todas as fotografias disponíveis.
3. Analise os nomes, formatos, dimensões e conteúdos visuais dos arquivos para associar cada imagem ao destino correto.
4. Preserve os arquivos originais e utilize os caminhos relativos corretos.
5. Identifique se já existem arquivos HTML, CSS, JavaScript ou configurações que devam ser preservados.
6. Não exclua, substitua ou recrie arquivos sem necessidade.
7. Apresente um breve plano de implementação e, em seguida, execute o desenvolvimento completo.

Não invente fotografias locais, avaliações, certificações, informações comerciais ou dados de contato.

Quando uma informação estiver ausente, implemente a estrutura visual necessária sem apresentar dados fictícios como se fossem verdadeiros.

## 3. TECNOLOGIA E ARQUITETURA

Utilize desenvolvimento frontend tradicional com:

- HTML5 semântico.
- CSS3 moderno.
- JavaScript puro, sem frameworks desnecessários.
- Flexbox e CSS Grid.
- SVG para ícones quando apropriado.
- LocalStorage para persistência do carrinho.
- URLs e links externos funcionais.

Não utilize React, Next.js, Vue, Angular, TypeScript ou ferramentas que exijam uma arquitetura de aplicação desnecessária.

O site deve funcionar como um projeto estático, com arquivos organizados e adequado à publicação no GitHub Pages ou em hospedagem estática equivalente.

Estrutura sugerida:

/
├── index.html
├── sobre.html
├── passeios.html
├── como-chegar.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── passeios.js
│   └── contato.js
├── imagens/
├── favicon.svg
├── robots.txt
└── sitemap.xml

Adapte essa estrutura ao projeto existente e não duplique arquivos ou diretórios desnecessariamente.

O CSS global deve controlar identidade visual, tipografia, cores, cabeçalho, rodapé, botões, cartões e responsividade.

## 4. IDENTIDADE VISUAL

Utilize o logotipo existente na pasta `imagens`.

As fotografias existentes de Tiradentes, São João del-Rei e Serra de São José devem ser utilizadas prioritariamente nas respectivas seções.

Direção criativa:

- Turismo premium acessível, com identidade mineira contemporânea.
- Design editorial, elegante, acolhedor e visualmente marcante.
- Fotografias grandes, com protagonismo dos destinos.
- Espaçamento generoso e hierarquia tipográfica clara.
- Elementos visuais inspirados em mapas, trilhas, arquitetura colonial e paisagens mineiras, sem exageros decorativos.
- Ícones discretos e consistentes.
- Cartões modernos com bordas suaves e sombras sutis.
- Animações leves, com preferência por transições naturais.
- Contraste adequado entre textos, fundos e botões.

Paleta sugerida:
- Verde-escuro ou verde-floresta como cor institucional.
- Tons terrosos e areia como cores de apoio.
- Off-white para fundos.
- Um tom quente de destaque para chamadas de ação.

Ajuste a paleta conforme as cores do logotipo.

Evite aparência de template genérico, excesso de gradientes, animações exageradas, ícones aleatórios, excesso de elementos sobre as fotografias ou grandes blocos de texto sobre imagens.

## 5. CABEÇALHO GLOBAL

Crie um cabeçalho consistente em todas as páginas, contendo:

- Logotipo da Bora Lá UAI.
- Links para Início, Passeios, Quem somos e Contato.
- Link para Como chegar, sem escondê-lo em menus secundários desnecessários.
- Botão destacado “Fazer reserva”.
- Indicador de quantidade de passeios no carrinho.
- Menu mobile funcional.
- Destaque visual para a página atual.
- Acessibilidade por teclado e identificação clara dos elementos interativos.

O botão “Fazer reserva” deve levar à página de passeios.

O contador deve refletir a quantidade de passeios distintos selecionados no carrinho.

O cabeçalho poderá permanecer fixo durante a rolagem, desde que isso não prejudique a área útil da tela nem cubra títulos e âncoras.

O menu mobile deverá abrir, fechar, permitir navegação por teclado e fechar após a seleção de uma página.

## 6. PÁGINA INICIAL — index.html

### 6.1 Hero principal

Crie uma seção de abertura impactante, utilizando uma fotografia real da pasta `imagens` que represente adequadamente Tiradentes, São João del-Rei ou a região da Serra de São José.

As cidades históricas devem ser as protagonistas visuais.

O hero deve conter:

- Fotografia de alta qualidade.
- Título principal com apelo emocional.
- Subtítulo que apresente os passeios culturais e as experiências na natureza.
- Botão primário “Ver passeios”.
- Botão secundário “Reserve pelo WhatsApp”.
- Pequenos indicadores relacionados à região da Estrada Real, cultura, história e natureza.

Sugestão de título:

“Minas Gerais tem histórias que merecem ser vividas.”

Sugestão de subtítulo:

“Explore Tiradentes, São João del-Rei e a Serra de São José com quem conhece os caminhos, as histórias e os encantos da região.”

O botão “Ver passeios” deve abrir `passeios.html`.

O botão de WhatsApp deve abrir uma conversa com a agência, utilizando o número oficial informado neste briefing.

Não esconda a fotografia atrás de excesso de texto, overlays escuros ou elementos decorativos.

A composição deve funcionar especialmente bem em dispositivos móveis.

### 6.2 Descubra a região

Crie uma seção editorial sobre os destinos atendidos.

Apresente três blocos:

A. Tiradentes:
- Arquitetura colonial.
- Igrejas e patrimônio histórico.
- Ruas de pedra e experiências culturais.
- Gastronomia mineira e tradições locais.

B. São João del-Rei:
- História e patrimônio arquitetônico.
- Igrejas, construções históricas e tradições culturais.
- Memória, arte e identidade mineira.

C. Serra de São José:
- Trilhas e contato com a natureza.
- Mirantes e paisagens.
- Cachoeiras, quando contempladas no roteiro e nas condições de visitação.
- Experiências de aventura acompanhadas de orientação adequada.

Não invente fatos históricos específicos ou prometa acesso a atrações que não façam parte dos passeios oferecidos.

### 6.3 Cultura e gastronomia mineira

Apresente uma seção que valorize a experiência de conhecer Minas Gerais por meio da culinária, da hospitalidade, da arquitetura, das tradições e das paisagens.

Utilize fotografias adequadas, textos curtos e links para os passeios relacionados.

### 6.4 Passeios em destaque

Apresente três cartões para:

1. City Tour em Tiradentes.
2. City Tour em São João del-Rei.
3. Travessia da Serra de São José.

Cada cartão deverá ter fotografia, título, descrição breve, informações operacionais disponíveis e botão “Conhecer passeio”.

O botão deverá direcionar para a seção correspondente em `passeios.html`.

### 6.5 Por que viajar com a Bora Lá UAI?

Crie uma seção com diferenciais que possam ser sustentados pelas informações reais da empresa, como:

- Conhecimento da região.
- Atendimento próximo e personalizado.
- Experiências culturais e de natureza.
- Orientação para organizar a visita.
- Contato direto com o responsável pelos passeios.

Não crie números de clientes atendidos, anos de experiência, prêmios ou estatísticas sem comprovação.

### 6.6 Avaliações de clientes

Inclua uma seção para avaliações reais do Google.

Utilize o link oficial de pesquisa e perfil da empresa informado neste briefing.

Não invente depoimentos, nomes de clientes, notas ou quantidade de avaliações.

Caso não exista integração oficial disponível para recuperar as avaliações, utilize um botão “Ver avaliações no Google”, direcionando para a página informada.

A seção deverá continuar visualmente consistente mesmo sem avaliações incorporadas.

### 6.7 Chamada final

Crie uma seção de encerramento convidando o visitante a escolher um passeio e entrar em contato pelo WhatsApp.

## 7. PÁGINA QUEM SOMOS — sobre.html

Conte a história da Bora Lá UAI Turismo e apresente seu responsável.

Informações fornecidas:

“Sou Rafael Rosa, guia de Turismo na região de São João del-Rei e Tiradentes, MG. Sou proprietário da Bora Lá UAI Turismo, empresa voltada para o turismo emissivo.”

A empresa trabalha com experiências de turismo cultural, city tours e atividades de natureza na região.

Crie uma página humana e profissional, com:

- Apresentação de Rafael Rosa.
- História e propósito da agência.
- Relação com a cultura e os destinos de Minas Gerais.
- Filosofia de atendimento e experiência do viajante.
- Fotografia do guia, caso exista nos arquivos.
- Área para credenciais e registros profissionais.
- Área para avaliações reais do Google.
- CTA para conhecer os passeios.
- CTA para entrar em contato pelo WhatsApp.

O proprietário informou possuir credenciais relacionadas ao CADASTUR e WFA.

Não invente números de registro, validade, categoria, certificações ou detalhes de formação.

Utilize apenas os dados que possam ser confirmados nos materiais existentes. Se os documentos ou números não estiverem disponíveis, apresente as credenciais de forma discreta, sem alegações técnicas não verificadas, ou deixe a área preparada para preenchimento posterior.

## 8. PÁGINA DE PASSEIOS — passeios.html

Esta é uma das páginas mais importantes para a conversão.

Apresente os três passeios em cartões de alta qualidade, com fotografias reais da pasta `imagens`.

Cada passeio deverá possuir:

- Fotografia.
- Nome.
- Descrição.
- Duração.
- Informações práticas.
- Dificuldade, quando aplicável.
- Botão “Reservar agora”.
- Botão “Adicionar ao carrinho”.
- Indicação visual quando já estiver selecionado.

### 8.1 City Tour em Tiradentes

Apresente uma descrição envolvente sobre o passeio cultural pela cidade.

Sugestões de temas, desde que façam parte do roteiro real:

- Centro histórico.
- Arquitetura colonial.
- Igrejas e patrimônio cultural.
- História e tradições locais.

Inclua duração e informações operacionais apenas quando confirmadas.

### 8.2 City Tour em São João del-Rei

Apresente o passeio como uma experiência para conhecer a história e o patrimônio da cidade.

Sugestões de temas, desde que façam parte do roteiro real:

- Centro histórico.
- Igrejas e arquitetura.
- Tradições culturais.
- Memória histórica da cidade.

Inclua duração e informações operacionais apenas quando confirmadas.

### 8.3 Travessia da Serra de São José

Apresente o passeio de natureza com foco em trilhas, paisagens, mirantes e cachoeiras quando contemplados no itinerário.

Exiba campos para:

- Duração.
- Distância, quando confirmada.
- Nível de dificuldade.
- Tipo de terreno.
- Orientações de preparação.
- Condições climáticas e requisitos específicos, quando aplicáveis.

O nível de dificuldade deverá ser um dos seguintes: baixa, média ou intensa.

Não escolha arbitrariamente o nível, a distância ou a duração. Procure esses dados nos materiais existentes. Se não estiverem disponíveis, mantenha a informação identificada como pendente de confirmação, sem publicar estimativas como fatos.

### 8.4 Filtros

Implemente filtros reais, com JavaScript, para categorias como:

- Todos os passeios.
- Turismo cultural.
- Natureza e aventura.

Os filtros deverão funcionar sobre os cartões já renderizados, sem recarregar a página.

O estado visual do filtro ativo deve ser perceptível.

Se não houver duração ou dificuldade confirmada para um passeio, não apresente filtros que induzam o visitante a interpretar esses dados como existentes.

### 8.5 Reserva individual pelo WhatsApp

Cada cartão deverá ter um botão “Reservar agora”.

Ao clicar, abrir o WhatsApp da agência com uma mensagem previamente preenchida, mencionando o passeio escolhido.

Exemplo de mensagem:

“Olá, Bora Lá UAI! Tenho interesse em reservar o City Tour em Tiradentes. Poderiam me informar as próximas datas disponíveis, os valores e as condições do passeio?”

Utilize o número oficial fornecido neste briefing.

A mensagem deve ser codificada corretamente para funcionar em dispositivos móveis e desktops.

Não afirme que uma reserva foi confirmada. O botão inicia uma solicitação de atendimento.

## 9. CARRINHO FUNCIONAL DE PASSEIOS

Implemente um carrinho de passeios que funcione em todas as páginas.

O carrinho deverá:

- Permitir adicionar passeios.
- Permitir remover passeios.
- Impedir duplicações do mesmo passeio.
- Atualizar automaticamente o contador no cabeçalho.
- Manter os itens ao navegar entre páginas.
- Preservar os itens após recarregar a página, utilizando LocalStorage.
- Exibir um resumo dos passeios selecionados.
- Permitir continuar explorando o catálogo.
- Disponibilizar a ação “Solicitar pelo WhatsApp”.

O carrinho deve funcionar como uma lista de interesse e solicitação de orçamento, e não como um checkout de pagamento.

Não invente preços, descontos, taxas, disponibilidade ou sistema de pagamento.

Quando o visitante clicar em “Solicitar pelo WhatsApp”, gere uma mensagem com todos os passeios selecionados e solicite informações sobre datas, valores e disponibilidade.

Após abrir o WhatsApp, não limpe automaticamente o carrinho. O usuário deverá poder revisar sua seleção e decidir quando removê-la.

Trate corretamente os casos de carrinho vazio e indisponibilidade do LocalStorage.

## 10. PÁGINA COMO CHEGAR — como-chegar.html

Crie uma página informativa e prática para ajudar o visitante a planejar a chegada a São João del-Rei e Tiradentes.

Divida o conteúdo em três modalidades.

### 10.1 Avião

Pesquise e identifique o aeroporto comercial mais conveniente para chegar à região, considerando voos regulares, disponibilidade e deslocamento terrestre.

Informe:

- Nome do aeroporto.
- Cidade e estado.
- Distância rodoviária aproximada até São João del-Rei e Tiradentes, quando confirmada.
- Opções de transporte terrestre a partir do aeroporto.
- Link para mapa ou rota.

Diferencie aeroportos comerciais de aeroportos regionais sem voos regulares, quando relevante.

Não afirme que existe voo direto ou serviço de transporte específico sem verificar.

### 10.2 Carro

Apresente um roteiro de chegada a partir de Belo Horizonte.

Inclua:

- Distância aproximada por estrada.
- Tempo estimado de viagem, se verificado.
- Principais rodovias utilizadas.
- Link para abrir a rota no Google Maps.
- Orientação para continuar até Tiradentes, quando necessário.

Deixe claro que distância e duração podem variar conforme o ponto de partida, a rota e as condições de trânsito.

### 10.3 Ônibus

Pesquise as empresas que efetivamente operam viagens para a rodoviária de São João del-Rei.

Apresente, quando confirmado:

- Nome das viações.
- Principais cidades de origem atendidas.
- Link oficial para consulta de horários e passagens.
- Endereço ou localização da rodoviária.
- Orientação para o deslocamento posterior até Tiradentes.

Não invente empresas, linhas, horários, tarifas ou frequências.

Se os dados mudarem com frequência, informe que devem ser confirmados diretamente com a empresa.

Finalize com uma chamada para contato pelo WhatsApp para o visitante esclarecer dúvidas sobre como organizar sua chegada.

## 11. PÁGINA FALE CONOSCO — contato.html

Apresente os canais oficiais da Bora Lá UAI Turismo.

WhatsApp e telefone:
(32) 99948-2571

Instagram:
https://www.instagram.com/boralauai_turismomg/

Facebook:
https://www.facebook.com/boralauaitrips/?ref=PROFILE_EDIT_xav_ig_profile_page_web#

YouTube:
https://www.youtube.com/@BoraLaUaiTurismoMG

Google:
https://www.google.com/search?hl=pt-BR&authuser=0&sxsrf=AJOqlzX1Va9hQyJ1Q713joP-41jfUeVUeg:1674669073635&q=Bora+L%C3%A1+Uai+Turismo+MG+%F0%9F%94%BA&ludocid=16461983676770552334&gsas=1&lsig=AB86z5VD7_aqOs9e6F4zSolhpiVS&kgs=9e12eaf0a67214a9&shndl=-1&shem=lssle&source=sh/x/kp/local/2

Crie:

- Botão de WhatsApp em destaque.
- Telefone clicável usando `tel:`.
- Links para todas as redes sociais.
- Botão para consultar avaliações no Google.
- Formulário simples para contato.
- Mensagens claras de validação.

O formulário poderá coletar nome, passeio de interesse e mensagem.

Como o projeto será estático, não simule um backend. Ao enviar, valide os campos no navegador e prepare uma mensagem para o WhatsApp, permitindo que o visitante revise e envie a solicitação.

Todos os links externos devem funcionar e, quando abertos em outra aba, utilizar os atributos de segurança adequados.

## 12. SEO LOCAL

Otimize todas as páginas para buscas relacionadas a:

- Bora Lá UAI Turismo.
- Guia de turismo em Tiradentes MG.
- Guia de turismo em São João del-Rei MG.
- City tour em Tiradentes.
- City tour em São João del-Rei.
- Travessia da Serra de São José.
- Trilhas na Serra de São José.
- Turismo cultural em Minas Gerais.

Implemente:

- Títulos HTML únicos para cada página.
- Meta descriptions específicas.
- Um H1 principal por página.
- Hierarquia correta de títulos.
- URLs e nomes de arquivos claros.
- Textos alternativos descritivos nas imagens.
- Links internos entre páginas relacionadas.
- Canonical URLs somente quando o domínio definitivo for conhecido.
- Open Graph para compartilhamento em redes sociais.
- Sitemap XML e robots.txt adequados ao domínio definitivo.
- Dados estruturados pertinentes, como TouristInformationCenter ou LocalBusiness somente quando o tipo e as informações forem apropriados e confirmados.

Não invente endereço físico, coordenadas, horários de funcionamento, preços, notas ou dados empresariais para completar o SEO.

Considere que o site poderá ser publicado em um subdiretório do GitHub Pages. Evite caminhos absolutos que quebrem a navegação nesse ambiente.

## 13. ACESSIBILIDADE E RESPONSIVIDADE

O site deve funcionar em celulares, tablets e desktops.

Implemente:

- HTML semântico.
- Navegação por teclado.
- Foco visível.
- Contraste adequado.
- Botões com nomes acessíveis.
- Labels para formulários.
- Textos alternativos nas imagens.
- Estados de interação perceptíveis.
- Respeito à preferência `prefers-reduced-motion`.
- Layout sem rolagem horizontal indesejada.
- Imagens responsivas e dimensionadas corretamente.
- Áreas de toque confortáveis em dispositivos móveis.

## 14. DESEMPENHO E QUALIDADE

Priorize carregamento rápido e estabilidade visual.

- Otimize as imagens sem destruir sua qualidade.
- Utilize lazy loading nas imagens fora da primeira área visível.
- Não aplique lazy loading indiscriminadamente à imagem principal do hero.
- Defina dimensões ou proporções para evitar mudanças inesperadas no layout.
- Evite bibliotecas pesadas.
- Não adicione dependências externas sem necessidade.
- Garanta que todos os arquivos e links funcionem.
- Evite erros no console.
- Trate corretamente os estados vazios e as falhas de interação.

## 15. RODAPÉ GLOBAL

Crie um rodapé presente em todas as páginas, contendo:

- Logotipo.
- Breve descrição da agência.
- Links para todas as páginas.
- Telefone e WhatsApp.
- Redes sociais.
- Link para avaliações do Google.
- Direitos autorais com ano atualizado automaticamente.
- Atalho para voltar ao início da página.

## 16. CRITÉRIOS DE ACEITAÇÃO

O projeto só estará concluído quando:

1. Todas as páginas estiverem implementadas.
2. A navegação entre as páginas funcionar.
3. O menu mobile funcionar.
4. O cabeçalho e o rodapé forem consistentes.
5. As imagens corretas da pasta existente forem utilizadas.
6. Os filtros de passeios funcionarem.
7. Os botões de reserva abrirem o WhatsApp com mensagens corretas.
8. O carrinho adicionar, remover e persistir passeios.
9. O contador do carrinho estiver sincronizado entre as páginas.
10. O pedido de orçamento reunir todos os passeios selecionados.
11. Os links de contato e redes sociais funcionarem.
12. O formulário validar os campos e gerar a mensagem para o WhatsApp.
13. A navegação funcionar quando o projeto estiver em um subdiretório.
14. O layout for testado em larguras de celular, tablet e desktop.
15. Não existirem links quebrados, erros críticos no console ou dados fictícios apresentados como reais.
16. As informações de transporte e as credenciais forem verificadas ou identificadas como pendentes.
17. As instruções para publicação forem registradas em um README.md.

## 17. ENTREGA E RELATÓRIO FINAL

Implemente o projeto diretamente no diretório atual, respeitando os arquivos existentes.

Ao terminar:

- Liste os arquivos criados e modificados.
- Explique a estrutura final.
- Informe quais funcionalidades foram implementadas e testadas.
- Liste os dados que ainda dependem de confirmação da agência.
- Informe eventuais limitações encontradas.
- Forneça instruções para testar localmente e publicar no GitHub Pages.

Não declare uma funcionalidade como concluída sem implementá-la e testá-la.

Priorize uma experiência de turismo visualmente memorável, confiável, rápida e orientada à conversão pelo WhatsApp.
