# Desafio: Lista de Personagens de Harry Potter

Este projeto é um exercício simples em React para iniciar com consumo de API e estilização básica usando Tailwind. A página inicial lista apenas os nomes dos personagens da HP-API.

## Objetivo inicial (o que já está pronto)
- Buscar personagens em `https://hp-api.onrender.com/api/characters`
- Exibir uma lista contendo somente os nomes dos personagens
- Mostrar estados de carregamento e erro

Arquivos principais:
- Componente: `src/App.jsx`
- Entrada: `src/main.jsx`
- HTML: `index.html`

## Ideias para implementar
Aqui vão sugestões para você evoluir a página conforme quiser:
- Campo de busca por nome (com debounce opcional)
- Paginação simples (ex.: 20 nomes por página)
- Filtro por casa usando `https://hp-api.onrender.com/api/characters/house/:house`
- Contador de resultados visíveis
- Ordenação alfabética com toggle crescente/decrescente
- Tratamento de erros com botão “Tentar novamente”

## Regras e dicas
- Use componentes funcionais e hooks (`useState`, `useEffect`)
- Evite bibliotecas extras; use o que já está no projeto
- Estilize com classes do Tailwind (via CDN já incluído)
- Mantenha o código simples e legível

## Referência da API
- Todos os personagens: `GET /api/characters`
- Por casa: `GET /api/characters/house/:house`

## Como rodar
- Use seu fluxo atual para abrir no navegador
- Não é necessário instalar nada adicional para o básico

## Como clonar o repositório
- Pré-requisitos: Node.js LTS e um gerenciador de pacotes (npm).
- Passos:
  1. Abra um terminal na pasta onde deseja clonar.
  2. Execute: `git clone https://github.com/rickhc3/hp-react.git`
  3. Entre na pasta: `cd hp-react`
  4. Instale dependências: `npm install`
  5. Inicie o servidor: `npm run dev`
  6. Abra a URL local indicada no terminal no navegador.

Observação: este projeto atualmente carrega o Tailwind via CDN no `index.html`. Para migrar para processamento via PostCSS/Tailwind v4, instale `@tailwindcss/postcss`, ajuste `postcss.config.js` e reative o `import './index.css'` em `src/main.jsx`.

## Funcionalidades sugeridas (para evoluir o exercício)
- Abrir uma caixinha (modal) ao clicar no nome:
  - Mostrar foto (se tiver), nome, casa, espécie e ator
  - Fechar ao clicar fora, no X ou usando a tecla Esc
- Campo de busca por nome
- Filtro por casa (Gryffindor, Hufflepuff, Ravenclaw, Slytherin)
- Dividir em páginas (ex.: 20 nomes por página) ou “ver mais” rolando
- Ordenar nomes de A–Z ou Z–A
- Mostrar “carregando...” enquanto busca os dados
- Mostrar quantos resultados estão aparecendo
- Botão “Tentar novamente” quando der erro
- Favoritos: marcar alguns nomes e guardar no navegador
- Trocar tema claro/escuro
- Colocar uma etiqueta de cor com a casa ao lado do nome
- Página de detalhes para um personagem
- Atalhos de teclado (ex.: Enter para abrir/fechar a caixinha)
- Baixar a lista atual em um arquivo
