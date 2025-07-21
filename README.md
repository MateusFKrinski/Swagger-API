
# Swagger-API

API RESTful desenvolvida em Node.js e TypeScript com autenticação via JWT. Permite operações CRUD em um catálogo de livros.

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- JWT 
- Swagger
- Docker & Docker Compose
- MongoDB

---

## Estrutura do Projeto

```
src/
│
├── auth/               
│   ├── auth.routes.ts
│   ├── auth.service.ts
│   └── verify.middleware.ts
│
├── books/              
│   ├── book.controller.ts
│   ├── book.schema.ts
│   └── book.service.ts
│
├── user/                
│   ├── user.schema.ts
│   └── user.service.ts
│
├── app.ts                
├── main.ts          
├── routes.ts         
├── swagger.ts        
└── types.d.ts          
```
---

## Instalação


1. Clone o repositório:

```bash
git clone git@github.com:MateusFKrinski/Swagger-API.git
```

2. Instale as dependências:

```bash
yarn install
```

3. Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```bash
JWT_SECRET=<seu_token_jwt>
```

4. Usando com Docker:

```bash
docker compose up -d
```

5. Inicie o servidor de desenvolvimento:

```bash
yarn start
```

A API estará disponível em: ``http://localhost:8080``

Swagger (documentação): ``http://localhost:8080/docs``

---

## Autenticação

Autenticação baseada em JWT.

### Rotas

- `POST /auth/register` — Criação de usuário
- `POST /auth/login` — Geração de token

Use o token JWT no botão Authorize da interface Swagger para autenticar as requisições protegidas.

---

## Endpoints da API

### Livros

| Método | Rota               | Descrição              |
|--------|--------------------|------------------------|
| POST   | `/books`           | Criar um livro         |
| GET    | `/books`           | Listar todos os livros |
| GET    | `/books/:title`   | Buscar por título      |
| PUT    | `/books/:id`      | Atualizar um livro     |
| DELETE | `/books/:id`      | Deletar um livro       |

---

## Teste Rápido

1. Registre um novo usuário: `POST /auth/register`
2. Faça login: `POST /auth/login`
3. Copie o token JWT retornado.
4. Clique em **Authorize** na documentação Swagger e cole o token.
5. Use os endpoints de livros autenticados.

---

## Autor

**Mateus Krinski**  
[GitHub: github.com/MateusFKrinski](https://github.com/MateusFKrinski)