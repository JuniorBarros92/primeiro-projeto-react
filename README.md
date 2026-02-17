# Dogs — Projeto React

Aplicação front-end criada com React + Vite que replica as funcionalidades do site Dogs:

- Feed de fotos com paginação
- Área de autenticação (login / logout)
- Upload de fotos pelo usuário
- Perfil do usuário com estatísticas (gráficos usando Victory)

**Começando**

- **Pré-requisitos:** Node.js 18+ e npm ou yarn
- **Instalação:**

```bash
npm install
```

- **Executar em desenvolvimento:**

```bash
npm run dev
```

- **Build de produção:**

```bash
npm run build
```

- **Preview do build:**

```bash
npm run preview
```

**Scripts úteis**
- **`dev`**: inicia o servidor Vite em modo de desenvolvimento
- **`build`**: gera os arquivos de produção
- **`preview`**: serve o build gerado
- **`lint`**: executa o ESLint

**Principais arquivos e pastas**
- `src/` : código-fonte React
- `src/components/` : componentes da UI (Header, Footer, Feed, Login, Perfil, Foto...)
- `src/Hooks/useFetch.jsx` : hook para requisições HTTP
- `src/api.jsx` : helpers para endpoints da API
- `src/components/User/UserStatsGraphs.jsx` : gráficos de estatísticas (Victory)

**Configurações importantes**
- O projeto consome a API pública em `https://dogsapi.origamid.dev/json` (definida em `src/api.jsx`).
- As rotas do cliente usam `react-router-dom` (apenas um `BrowserRouter` no ponto de entrada `src/index.jsx`).

Se quiser que eu alinhe o README com o conteúdo exato do seu site (texto, imagens, links), cole aqui o texto/URL que deseja usar e eu atualizo o arquivo.
