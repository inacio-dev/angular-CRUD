# Angular CRUD

Este repositório implementa um sistema CRUD (Create, Read, Update, Delete) utilizando **Angular**, um framework moderno para criação de aplicações web dinâmicas. O projeto inclui suporte a **SSR (Server-Side Rendering)**, estilos com **TailwindCSS**, e gerenciadores de estado com **TanStack Query**.

## Sobre o Projeto

**angular-crud** é um projeto desenvolvido para demonstrar as funcionalidades básicas de operações CRUD em uma aplicação Angular moderna, integrando ferramentas robustas para desenvolvimento e desempenho otimizado.

### Principais Tecnologias

- **Angular** (v17+)
- **SSR (Server-Side Rendering)**
- **TailwindCSS** (para estilos)
- **TanStack Query** (para gerenciamento de estados assíncronos)
- **Express** (para servidor SSR)

## Estrutura do Projeto

```plaintext
angular-CRUD-main/
├── src/                  # Código-fonte principal
│   ├── app/             # Componentes, módulos e serviços
│   ├── assets/          # Arquivos estáticos (imagens, fontes, etc.)
│   ├── environments/    # Configurações para diferentes ambientes
├── angular.json          # Configuração do Angular CLI
├── tailwind.config.js    # Configuração do TailwindCSS
├── package.json          # Dependências do projeto
└── README.md             # Documentação do projeto
```

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd angular-CRUD-main
```

### 2. Instale as dependências

Com **pnpm** (recomendado):

```bash
pnpm install
```

Ou com **npm**:

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Porta para o servidor
PORT=4200
```

### 4. Execute o servidor de desenvolvimento

Com **pnpm**:

```bash
pnpm start
```

Ou com **npm**:

```bash
npm run start
```

A aplicação estará disponível em [http://localhost:4200](http://localhost:4200).

### 5. Renderização no Servidor (SSR)

Para rodar o projeto com SSR:

```bash
npm run dev:ssr
```

Acesse: [http://localhost:4000](http://localhost:4000).

## Scripts Disponíveis

- **`start`**: Inicia o projeto em modo de desenvolvimento.
- **`build`**: Gera a aplicação para produção.
- **`test`**: Executa os testes unitários.
- **`lint`**: Verifica o código com o ESLint.
- **`dev:ssr`**: Inicia o servidor SSR para desenvolvimento.

## Dependências Principais

### Produção
- `@angular/core`
- `@angular/router`
- `@angular/ssr`
- `rxjs`
- `express`

### Desenvolvimento
- `@angular-devkit/build-angular`
- `@angular-eslint/eslint-plugin`
- `eslint`
- `karma`
- `prettier`
- `tailwindcss`

## Testes

Execute os testes unitários com:

```bash
npm run test
```

Certifique-se de configurar o ambiente corretamente antes de rodar os testes.
