# 📦 FullStack-Vault

_Repositório dedicado ao estudo, desenvolvimento e organização de projetos full-stack utilizando diferentes combinações de tecnologias._

## 🧭 Propósito

O **FullStack-Vault** funciona como um cofre de projetos full-stack — cada pasta representa uma combinação de tecnologias backend + frontend.  
O objetivo é documentar minha evolução como desenvolvedor web, explorando arquiteturas, padrões, melhores práticas e integrações entre diferentes stacks.

Este repositório serve para:

- 📚 Consolidar estudos relacionados a desenvolvimento full-stack
- 🧪 Servir como laboratório técnico para testes e experimentos
- 💼 Construir um portfólio sólido e bem organizado
- 🧱 Comparar stacks diferentes e entender suas vantagens e desvantagens
- 🔧 Treinar boas práticas de arquitetura, clean code e integrações

## 🏗️ Estrutura do Repositório

Cada stack possui sua própria pasta, contendo um ou mais projetos completos (backend + frontend).  
Exemplo de organização:

```
/FullStack-Vault/
├── SpringBoot_Com_ReactJS/
│   ├── ProjetoA/
│   │   ├── backend/
│   │   └── frontend/
│   └── ProjetoB/
│       ├── backend/
│       └── frontend/
│
├── Express_Com_ReactJS/
│   └── ProjetoA/
│       ├── backend/
│       └── frontend/
│
├── Fastify_Com_ReactJS/
│   └── ProjetoA/
│       ├── backend/
│       └── frontend/
│
├── NestJS_Com_NextJS/
│    └── ProjetoA/
│       ├── backend/
│       └── frontend/
└──...
```

## 🚀 O Que Cada Projeto Deve Demonstrar

Cada stack pode combinar diferentes tecnologias de backend e frontend.  
Independentemente das escolhas, os projetos devem seguir princípios consistentes de organização, qualidade e boas práticas.

### **Backend**

Independente da linguagem ou framework, espera-se que cada backend demonstre:

- Arquitetura organizada em camadas (controllers, services, repositories, etc.)
- Middlewares, validações e tratamento centralizado de erros
- Integração com bancos SQL ou NoSQL
- Testes automatizados (quando aplicável)
- Autenticação e autorização (JWT, OAuth2, Sessions, RBAC)
- Uso de tipagem forte quando disponível (TypeScript, Java, Go, Rust, etc.)
- Documentação da API (Swagger, Redoc, Postman, etc.)

### **Frontend**

O frontend pode ser desenvolvido com **qualquer framework moderno**  
(React, Vue, Angular, Svelte, Solid, Next.js, Nuxt, etc.).

Independentemente da tecnologia, os projetos devem demonstrar:

- Organização clara de componentes
- Gerenciamento de estado proporcional à complexidade do projeto
- Comunicação com o backend via serviços desacoplados (axios/fetch)
- Estrutura de rotas bem definida
- Formulários com validações e componentes reutilizáveis
- Boas práticas de UI/UX
- Interface responsiva e acessível
- Modularidade e separação de responsabilidades
- Uso preferencial de padrões modernos da respectiva tecnologia  
  (Hooks, Composition API, Signals, RxJS, etc.)

### **Integração**

Toda stack full-stack deve evidenciar a comunicação clara entre backend e frontend, incluindo:

- Consumo estruturado das APIs
- Padronização de contratos (DTOs, schemas, responses)
- Integração segura (CORS adequado, CSRF quando necessário, tokens, cookies)
- Scripts e ferramentas que facilitem o desenvolvimento local
- Deploy local ou orquestrado com Docker (opcional)

## 🧪 Boas Práticas Adotadas

Os projetos do FullStack-Vault seguem diretrizes de qualidade, como:

- Código limpo, modular e padronizado
- Uso consistente de tipagem forte quando aplicável
- Ferramentas de linting e formatação (ESLint, Prettier, etc.)
- Commits organizados e semânticos
- Documentação clara em cada projeto
- Arquitetura escalável e manutenível
- Testes de unidades e/ou integração sempre que possível
