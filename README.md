# GAZIN BACKEND DESAFIO

# Tecnologias do projeto

- Node.js ^14.18.2
- Typescript
- Prisma ORM
- Sqlite
- Jest

# Instalação das dependências do projeto

Usando Yarn

```
$ yarn
```

Usando npm:

```
$ npm install
```

## Link da API

```
http://localhost:3000
```

## Configuração

### .env

Configuração de variáveis de ambientes que são utilizadas no projeto.

| Chave        | Descrição                           | Padrão            |
| ------------ | ----------------------------------- | ----------------- |
| DATABASE_URL | url de conexão com o banco de dados | `"file:./dev.db"` |

# Uso

Para iniciar aplicação em modo de desenvolvimento

```
$ yarn dev ou npm run dev
```

Para fazer o build da aplicação

```
$ yarn build ou npm run build
```

Para iniciar aplicação em modo produção

```
$ yarn start ou npm run start
```

## Manipulação de erro

O projeto retorna uma mensagem personalizada de acordo com error apresentado na aplicação.

```json
{
  "statusCode": 404,
  "message": "Develop does not exists"
}
```

## Rotas

| rota            | HTTP Método |                                               parâmetros                                                |                                descrição                                 |
| :-------------- | :---------: | :-----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------: |
| `/levels`       |    POST     |                          Corpo da requisição em formato json com campo `level`                          |                              Cria um nível                               |
| `/levels`       |     GET     |                                                    -                                                    |                    Lista todos os niveis cadastrados.                    |
| `/levels/:id`   |     PUT     |                                                    -                                                    |                   Atualiza a informação sobre o nível.                   |
| `/levels/:id`   |   DELETE    |                                              o id do level                                              | Deleta um level, mas o mesmo não pode está associado a um desenvolvedor. |
| `/develops`     |    POST     | Corpo da requisição em formato json com os campos `name`, `sex`,`levelId`,`dateOfBirth`, `age`, `hobby` |                        Cria um novo desenvolvedor                        |
| `/develops`     |     GET     |                                                    -                                                    |                     Lista todos os desenvolvedores.                      |
| `/develops/:id` |     PUT     | Corpo da requisição em formato json com os campos `name`, `sex`,`levelId`,`dateOfBirth`, `age`, `hobby` |               Atualiza as informações de um desenvolvedor.               |
| `/develops/:id` |   DELETE    |                                                    -                                                    |                         Deleta um desenvolvedor.                         |

### Requisições

- `POST /levels`

Request body:

```json
{
  "level": "senior"
}
```

- `GET /levels`

Response body:

```json
[
  {
    "id": 1,
    "level": "Junior"
  },
  {
    "id": 4,
    "level": "Mid-senior"
  },
  {
    "id": 6,
    "level": "CTO"
  },
  {
    "id": 7,
    "level": "CFO"
  }
]
```

- `PUT /levels/1`

Request body:

```json
{
  "level": "CTO"
}
```

`DELETE /levels/1`

Request body:

```json
{}
```

- `POST /develops`

Request body:

```json
{
  "name": "User CTO",
  "sex": "M",
  "levelId": 6,
  "dateOfBirth": "2021-12-25T00:00:00Z",
  "age": 25,
  "hobby": "Code new things again"
}
```

- `GET /levels`

Response body:

```json
[
  {
    "id": 3,
    "levelId": 6,
    "name": "USER TEST",
    "sex": "F",
    "dateOfBirth": "2021-12-25T00:00:00.000Z",
    "age": 25,
    "hobby": "Code new things again",
    "level": {
      "id": 6,
      "level": "CTO"
    }
  }
]
```

- `PUT /develops/3`

Request body:

```json
{
  "age": 24,
  "name": "john Doe"
}
```

`DELETE /develops/3`

Request body:

```json
{}
```

# Teste

[Jest](https://jestjs.io/) foi a escolha para uso no projeto

```
$ yarn test
```

Ou

```
$ npm run test
```
