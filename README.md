# Bora Lá UAI Turismo

Site estático em HTML, CSS e JavaScript puro. O briefing completo de produto está em [readme.md](readme.md).

## Estrutura

- `index.html`, `sobre.html`, `passeios.html`, `como-chegar.html`, `contato.html`, `avaliacoes.html`: páginas do site.
- `css/style.css`: identidade visual, responsividade e acessibilidade.
- `js/main.js`: navegação compartilhada, WhatsApp e lista de passeios persistida no navegador.
- `js/passeios.js`, `js/contato.js`: filtros e formulário.
- `imagens/`: imagens fornecidas para a marca e destinos.

## Testar localmente

Abra `index.html` no navegador ou sirva a pasta por um servidor estático local. Não há etapa de build nem dependências para instalar.

## Publicar no GitHub Pages

1. Envie os arquivos do projeto para um repositório GitHub.
2. Em **Settings → Pages**, escolha a branch e a pasta que contém `index.html` (geralmente `/ (root)`).
3. Salve e aguarde a publicação. O site usa caminhos relativos e pode ficar em um subdiretório.
4. Depois de definir o domínio final, atualize `sitemap.xml` com URLs absolutas e adicione a diretiva `Sitemap:` em `robots.txt`. Canonical e URL de compartilhamento OG poderão ser acrescentadas então.

## Dados a confirmar com a agência

Duração e detalhes operacionais dos city tours; duração, distância, dificuldade, terreno e recomendações da travessia; roteiro e condições de visitação; números/documentos CADASTUR e WFA. O site sinaliza esses itens como pendentes e direciona o visitante ao atendimento para consultar disponibilidade e valores.
