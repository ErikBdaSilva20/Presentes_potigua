# Documentação de Componentes

_Gerado pelo Documentation Agent._

Esta documentação descreve os componentes principais utilizados na aplicação de Lista de Casamento e mostra como reutilizá-los ou modificá-los.

## 1. `Header`

Localização: `/src/components/Header`

O cabeçalho principal da aplicação, responsável por exibir o título e um subtítulo acolhedor.

**Props:**

- `title` (string): Título principal. Padrão: "Lista de Presentes".
- `subtitle` (string): Mensagem secundária. Padrão: "Celebre conosco esse momento especial!".

**Exemplo de uso:**

```jsx
<Header title="Nosso Casamento" subtitle="Obrigado por fazer parte!" />
```

## 2. `Footer`

Localização: `/src/components/Footer`

O rodapé da aplicação, exibindo uma mensagem de agradecimento.

**Props:**

- `message` (string): Texto de copyright ou agradecimento. Padrão: "Obrigado por compartilhar este momento conosco!".

**Exemplo de uso:**

```jsx
<Footer message="Feito com carinho pelos noivos." />
```

## 3. `CardProduto`

Localização: `/src/components/CardProduto`

Componente visual que exibe as informações de um único presente. Ele inclui efeitos de hover e um botão de ação com o ícone da Shopee.

**Props:**

- `imagem` (string): URL da imagem do produto.
- `titulo` (string): Nome do presente.
- `descricao` (string): Descrição curta do presente.
- `link` (string): URL de afiliado/produto na Shopee.

**Exemplo de uso:**

```jsx
<CardProduto
  imagem="https://exemplo.com/imagem.jpg"
  titulo="Liquidificador"
  descricao="Potente e versátil."
  link="https://shopee.com.br/produto-exemplo"
/>
```

## 4. `PresentsArray`

Localização: `/src/components/PresentsArray`

Este é o componente de Grid (Grade) que renderiza múltiplos `CardProduto` de forma responsiva. Ele gerencia o layout mobile-first definido pelo UX/UI designer.

**Props:**

- `products` (array): Um array de objetos, onde cada objeto deve ter `id`, `image`, `name`, `description` e `link`.

**Exemplo de uso:**

```jsx
import { products } from '../../utils/products';

<PresentsArray products={products} />;
```

---

_Para dúvidas adicionais, consulte o código-fonte de cada componente e seus respectivos arquivos `styles.js`._
