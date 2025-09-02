# InSync — Portfólio Coletivo

Portfólio coletivo com foco em desempenho, acessibilidade e responsividade. Apresenta a identidade da equipe, skills, experiências/projetos e um formulário de contato.


## Visão Geral
O site é estático (HTML/CSS/JS puros) e segue boas práticas:
- HTML5 semântico, com `header` e `main` definidos.
- Layout responsivo mobile–first com tipografia fluida.
- Interações nativas de JavaScript (sem bibliotecas) para navegação, formulário e usabilidade.

## Demonstração
1. Clone ou baixe este repositório.
2. Abra `index.html` diretamente no navegador.

## Principais Recursos
- __Hero responsivo__ com tipografia fluida (`clamp`).
- __Seção Sobre__ com cartões de perfil.
- __Skills__ em grade fluida (auto-fit/minmax).
- __Projetos__ em cartões com _hover_ e _badges_.
- __Contato__ com formulário validado no cliente.
- __Menu hambúrguer__ acessível em telas pequenas.
- __Voltar ao Topo__ com exibição contextual e rolagem suave.

## Tecnologias
- HTML5
- CSS3 (Grid/Flex, media queries)
- JavaScript (ES6)

## Estrutura do Projeto
```
/ (raiz)
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ script.js
├─ assets/   # ícones e imagens
└─ README.md
```

## Desenvolvimento
- Estilos em `css/style.css`.
- Scripts em `js/script.js`.
- Imagens/ícones em `assets/`.
- Padronização: nomes de classes claros e consistentes; comentários objetivos apenas quando agregam contexto.

## Acessibilidade
- `lang="pt-BR"` no `html`.
- Navegação com `aria-label`, `aria-controls`, `aria-expanded` no menu.
- Links externos usam `rel="noopener noreferrer"`.
- Ícones decorativos com `alt=""` e botões com rótulos acessíveis.
- Foco visível e contraste de cores legível.

## Responsividade
- Layout adaptável para 360–1440px.
- Grades com `repeat(auto-fit, minmax())` para distribuir colunas.
- Ajustes de espaçamento e tipografia em breakpoints.

## SEO Básico
- `<title>` descritivo e `<meta name="description">` em `index.html`.
- Favicon em `assets/logo.png`.
- `<meta name="theme-color">` para PWA/UA.

## Performance
- Imagens não críticas com `loading="lazy"`.
- Um único bundle de CSS e JS simples.

## Interações JavaScript Implementadas
Arquivo: `js/script.js`
- __Menu hambúrguer__ (mobile): abre/fecha, fecha ao clicar fora e com ESC.
- __Validação do formulário__: checagem de campos obrigatórios e mensagens amigáveis.
- __Voltar ao topo__: aparece após rolagem, com rolagem suave ao topo e respeito a `prefers-reduced-motion`.




