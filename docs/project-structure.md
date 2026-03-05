# Estrutura do Projeto

_Gerado pelo Arquitetura Front-end Agent e documentado pelo Documentation Agent._

O projeto foi construído utilizando **React.js com Vite** e **Styled Components**. O foco principal da arquitetura é a modularidade, separação de preocupações e facilidade de manutenção.

## Árvore de Diretórios

```text
/src
 ├── /assets           # Imagens estáticas, ícones ou fontes locais (se houver)
 ├── /components       # Componentes funcionais e modulares da interface
 │    ├── CardProduto  # Card individual do presente com infos e botão
 │    ├── Footer       # Rodapé do site
 │    ├── Header       # Cabeçalho do site
 │    └── PresentsArray# Grade responsiva iteradora de presentes
 ├── /pages            # Páginas da aplicação
 │    └── Home         # Página principal agrupando os componentes do layout
 ├── /styles           # Configurações globais e temas visuais
 │    ├── GlobalStyles.js # Estilos globais (reset CSS usando styled-components)
 │    └── theme.js        # Tokens de design (cores, tipografia, espaçamento)
 ├── /utils            # Funções auxiliares e dados estáticos
 │    └── products.js     # Array estruturado com dados fixos (presentes)
 ├── App.jsx           # Componente raiz englobando ThemeProvider
 └── main.jsx          # Ponto de entrada (Entrypoint) do React no Vite
```

## Decisões Arquiteturais

1. **Styled Components e ThemeProvider**
   - Utilizamos o `styled-components` para encapsular CSS e evitar vazamento ou colisão de classes.
   - O `theme.js` concentra todas as variáveis de design (Cores Premium, Fontes do Google Fonts e Breakpoints de tela), facilitando manutenções futuras orientadas pelo agente especialista de UI/UX.
2. **Dados Isolados (Products Array)**
   - Conforme solicitado para facilitar o lado do Desenvolvedor, o array de presentes foi removido do componente visual e centralizado em `/src/utils/products.js`.
   - Isso permite que qualquer pessoa da equipe logre adicionar, remover ou editar presentes, imagens e links da Shopee sem precisar ler o código React.

3. **Arquitetura Visual Mobile-First**
   - O grid `PresentsArray` e os cartões `CardProduto` foram desenvolvidos com estilos padrões voltados primeiramente para resoluções menores (`mobile-first`) e são escalados para tablets e desktops usando media queries com tokens preestabelecidos (`theme.breakpoints`).
