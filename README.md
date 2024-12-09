# TypeScript Project Template

Template de projeto TypeScript com suporte a PostgreSQL, MongoDB e desenvolvimento em container.

## Características

- TypeScript com configuração otimizada
- Express.js para API REST
- PostgreSQL e MongoDB integrados
- Docker e devcontainer para desenvolvimento consistente
- Hot reload em desenvolvimento
- ESLint e Prettier para qualidade de código
- Estrutura de projeto organizada

## Pré-requisitos

- Docker
- Docker Compose
- VS Code com extensão "Remote - Containers"
- Node.js (opcional, apenas para desenvolvimento local sem Docker)

## Início Rápido

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd template_typescript_project
```

2. Usando VS Code + Devcontainer (Recomendado):
   - Abra o projeto no VS Code
   - Quando solicitado, clique em "Reopen in Container"
   - O container será construído e configurado automaticamente

3. Usando Docker diretamente:
```bash
# Inicie os containers
docker-compose up -d

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Endpoints Disponíveis

- `GET /` - Mensagem de boas-vindas e lista de endpoints
- `GET /health` - Status das conexões com bancos de dados
- `GET /ping` - Endpoint simples para teste de conectividade

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Compila o projeto para produção
- `npm run start` - Executa a versão compilada
- `npm run test` - Executa os testes
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código com Prettier

## Estrutura do Projeto

```
.
├── .devcontainer/          # Configuração do VS Code + Docker
├── src/                    # Código fonte
│   └── index.ts           # Ponto de entrada da aplicação
├── .env                    # Variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo git
├── docker-compose.yml      # Configuração dos serviços
├── Dockerfile             # Configuração do container
├── package.json           # Dependências e scripts
└── tsconfig.json          # Configuração do TypeScript
```

## Configuração

### Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e ajuste as variáveis:

```env
PORT=3000
POSTGRES_HOST=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=dev
MONGO_USER=mongodb
MONGO_PASSWORD=mongodb
```

### Bancos de Dados

- PostgreSQL está disponível em `postgres:5432`
- MongoDB está disponível em `mongodb:27017`

## Desenvolvimento

1. O código fonte fica no diretório `src/`
2. Arquivos de configuração na raiz do projeto
3. Hot reload ativo durante desenvolvimento
4. Logs formatados com emojis para melhor visibilidade

## Docker

Os serviços incluem:
- Node.js (aplicação)
- PostgreSQL (banco relacional)
- MongoDB (banco não-relacional)

Volumes são prefixados com nome do projeto para evitar conflitos.

## VS Code

Extensões incluídas no devcontainer:
- ESLint
- Prettier
- TypeScript
- MongoDB
- PostgreSQL

## Comandos Úteis

```bash
# Reiniciar containers
docker-compose restart

# Ver logs
docker-compose logs -f

# Limpar volumes
docker-compose down -v

# Reconstruir containers
docker-compose up -d --build
```

## Contribuindo

1. Faça o fork do projeto
2. Crie sua branch de feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
