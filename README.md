# whiteStone_dev – Landing Page V2

Landing page oficial da comunidade [whiteStone_dev](https://whitestonedev.com.br), construída com React, Vite, Tailwind e TypeScript.  
O projeto foi iniciado com Lovable, mas atualmente é desenvolvido e mantido diretamente pela comunidade.

---

## 🔧 Rodando o projeto localmente

Requisitos:
- Node.js (recomendado: v18+)
- npm ou pnpm

```bash
# Clone o repositório
git clone https://github.com/whitestonedev/landing-page-v2.git
cd landing-page-v2

# Instale as dependências
npm install

# Rode o projeto localmente
npm run dev
````

---

## 🤝 Como colaborar

Você pode contribuir com conteúdos ou melhorias no código. Veja como abaixo:

### 📝 Adicionar um novo Blog Post

1. Crie um novo arquivo `.mdx` em `src/content/blogs`.
2. Siga o modelo abaixo para o frontmatter:

```mdx
---
title: "Título do post"
date: "2025-06-10"
author: "Seu Nome"
tags: [React, Comunidade]
thumb: /img/blog/thumbs/exemplo.png
short_description: "Descrição breve que aparece na listagem de posts."
---
Conteúdo do seu post em Markdown e/ou JSX aqui.
```

3. Se for seu primeiro post, adicione também suas informações em `src/data/authors.json`:

```json
{
  "name": "Seu Nome",
  "position": "Cargo",
  "company": "Empresa",
  "linkedin": "https://linkedin.com/in/seu-perfil",
  "github": "https://github.com/seuusuario",
  "image": "https://github.com/seuusuario.png"
}
```

---

### 📅 Adicionar um novo Evento

1. Crie um novo arquivo `.mdx` em `src/content/events`.
2. Use este modelo de frontmatter:

```mdx
---
title: "Nome do evento"
date: "2025-06-15"
time: "19:00"
duration: "2h"
location: "Local do Evento"
address: "Endereço completo"
tags: ["Tech", "Comunidade"]
thumb: "https://statics.whitestonedev.com.br/site/thumb.png"
short_description: "Breve descrição para listagem de eventos."
registration_url: "https://link.inscricao.com"
---
Descrição completa e conteúdo do evento.
```

3. Caso o evento tenha um projeto associado, adicione também no `src/data/projects.json`.

---

### 💼 Adicionar um novo Patrocinador

1. Edite o arquivo `src/data/sponsors.json`.
2. Adicione no seguinte formato:

```json
{
  "name": "Nome da Empresa",
  "thumb": "/img/sponsors/logo.png",
  "short_description": "Breve descrição do que a empresa faz.",
  "sponsor_link": "https://site.da.empresa"
}
```

---

### 🛠 Melhorias no Código

1. Faça um fork do repositório
2. Crie uma branch com nome descritivo: `feat/nome-da-feature` ou `fix/descricao-do-bug`
3. Faça suas alterações
4. Abra um Pull Request com uma descrição clara das mudanças

---

## 🚀 Tecnologias

* [Vite](https://vitejs.dev/)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)

---

## 🌍 Produção

A aplicação foi iniciada no [Lovable](https://lovable.dev), mas atualmente é publicada de forma autônoma.
Deploys são feitos via GitHub Pages.

---

Quer fazer parte da comunidade ou contribuir de outras formas?
Visite [whitestonedev.com.br](https://whitestonedev.com.br) ou fale com a gente pelo [Instagram](https://instagram.com/whitestonedev).


