# Desafio: Lista de Personagens de Harry Potter

Aplicação React simples que consome a HP-API e lista os nomes dos personagens.

## O que já tem
- Busca personagens em `https://hp-api.onrender.com/api/characters`
- Exibe somente os nomes dos personagens
- Mostra estados de carregamento e erro

## Evoluções sugeridas (para implementar)
- Campo de busca por nome (com debounce opcional)
- Paginação simples (ex.: 20 nomes por página)
- Filtro por casa usando `https://hp-api.onrender.com/api/characters/house/:house`
- Contador de resultados visíveis
- Ordenação alfabética com toggle crescente/decrescente
- Tratamento de erros com botão “Tentar novamente”
- Abrir uma caixinha (modal) ao clicar no nome:
  - Mostrar foto (se tiver), nome, casa, espécie e ator
  - Fechar ao clicar fora, no X ou usando a tecla Esc
- Favoritos: marcar alguns nomes e guardar no navegador
- Trocar tema claro/escuro
- Etiqueta de cor com a casa ao lado do nome
- Página de detalhes para um personagem
- Atalhos de teclado (ex.: Enter para abrir/fechar a caixinha)
- Baixar a lista atual em um arquivo

## Como clonar e rodar
- Pré-requisitos: git, Node.js e npm instalados
  - git: https://git-scm.com/downloads
  - Node.js (LTS): https://nodejs.org/
  - npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- Passos:
  1. Abra um terminal na pasta onde deseja clonar
  2. `git clone https://github.com/rickhc3/hp-react.git`
  3. `cd hp-react`
  4. `npm install`
  5. `npm run dev`
  6. Abra no navegador a URL local exibida no terminal
