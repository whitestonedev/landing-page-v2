---
title: "React 19 e as Novas Features"
date: "2024-07-15"
time: "19:00"
duration: "2h"
location: "Pedra Branca Tech Park"
address: "Av. Luiz Boiteux Piazza, 1302 - Cachoeira do Bom Jesus, Florianópolis - SC"
tags: ["React", "Frontend", "JavaScript"]
thumb: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
short_description: "Explorando as novidades do React 19 e como aplicá-las em projetos reais."
registration_url: "https://links.whitestonedev.com.br"
---

# React 19 e as Novas Features

O **React 19** trouxe mudanças significativas que vão transformar a forma como desenvolvemos aplicações. Neste evento, vamos explorar as principais novidades e como implementá-las em projetos reais.

## O que vamos abordar

### 1. Server Components
- **O que são**: Componentes que rodam no servidor
- **Benefícios**: Melhor performance e SEO
- **Implementação prática**: Exemplos hands-on

### 2. Actions e useActionState
```tsx
import { useActionState } from 'react';

function MyForm() {
  const [state, submitAction] = useActionState(
    async (previousState, formData) => {
      // Action logic
      return newState;
    },
    initialState
  );
  
  return (
    <form action={submitAction}>
      {/* Form content */}
    </form>
  );
}
```

### 3. Concurrent Features
- **Suspense**: Carregamento de dados mais eficiente
- **Transitions**: Atualizações de interface não-bloqueantes
- **Streaming**: Renderização incremental

### 4. Novas APIs de Otimização
- `use()`: Hook para consumir promessas e contextos
- `useOptimistic()`: Estados otimistas para melhor UX
- `useFormStatus()`: Status de formulários

## Demos Práticas

Durante o evento, vamos construir:

### 1. Aplicação com Server Components
Uma pequena aplicação demonstrando a diferença entre componentes cliente e servidor.

### 2. Sistema de Comentários com Actions
Implementação de um sistema que utiliza as novas Actions do React 19.

### 3. Dashboard com Streaming
Interface que carrega dados progressivamente usando Suspense e Streaming.

## Agenda Detalhada

| Horário | Atividade |
|---------|-----------|
| 19:00 - 19:30 | **Coffee & Networking** - Momento para conhecer outros desenvolvedores |
| 19:30 - 19:45 | **Abertura** - Apresentação da whiteStone_dev e overview do React 19 |
| 19:45 - 20:30 | **Palestra Principal** - React 19: Novidades e Breaking Changes |
| 20:30 - 20:50 | **Demo Prática** - Implementando Server Components do zero |
| 20:50 - 21:00 | **Q&A** - Perguntas e respostas com a audiência |
| 21:00 - 21:15 | **Networking Final** - Continuação das conversas |

## Pré-requisitos

### Conhecimento Técnico
- **React básico**: Hooks, componentes, props
- **JavaScript moderno**: ES6+, async/await
- **Node.js**: Conceitos básicos

### Setup Local (Opcional)
Se quiser acompanhar as demos:

```bash
# Clone do repositório da palestra
git clone https://github.com/whitestonedev/react19-demo
cd react19-demo

# Instalação das dependências
npm install

# Executar o projeto
npm run dev
```

## Sobre o Palestrante

**João Silva** é Senior Frontend Developer na TechCorp, com mais de 8 anos de experiência em React. Contribuidor ativo da comunidade open source e maintainer de bibliotecas populares no NPM.

### Experiência:
- **8+ anos** desenvolvendo com React
- **Contribuidor** oficial do React Testing Library
- **Speaker** em conferências nacionais e internacionais
- **Mentor** de desenvolvedores júnior

## Materiais do Evento

Após o evento, disponibilizaremos:

### 📚 Recursos de Estudo
- Slides da apresentação
- Código fonte dos exemplos
- Links para documentação oficial
- Lista de recursos recomendados

### 🎥 Gravação
O evento será gravado e disponibilizado no nosso canal do YouTube para a comunidade.

## Networking e Oportunidades

Este é um excelente momento para:
- **Conhecer outros desenvolvedores** da região
- **Trocar experiências** e boas práticas
- **Descobrir oportunidades** de trabalho e projetos
- **Formar grupos** de estudo e colaboração

## Patrocinadores

Agradecemos aos nossos parceiros que tornam este evento possível:
- **Pedra Branca Tech Park** - Espaço
- **Café Especial Local** - Coffee break
- **TechCorp** - Liberação do palestrante

## Como Chegar

### 🚗 De Carro
- Estacionamento gratuito disponível
- Entrada pela Av. Luiz Boiteux Piazza

### 🚌 Transporte Público
- Linha 330 (Palhoça - Pedra Branca)
- Ponto mais próximo: "Tech Park"

### 📱 Aplicativos
- Uber/99: "Pedra Branca Tech Park"
- Coordenadas: -27.6245, -48.6357

## Após o Evento

### Continue Aprendendo
- **Grupo no Slack**: Discussões técnicas contínuas
- **Próximos eventos**: React Testing, Performance
- **Meetups mensais**: Toda terceira segunda-feira

### Contribua
- **GitHub**: Contribua com nossos projetos open source
- **Palestras**: Candidate-se para ser palestrante
- **Voluntariado**: Ajude na organização dos eventos

---

**Vamos juntos explorar o futuro do React!** 🚀

*Dúvidas? Entre em contato conosco no Slack da comunidade ou pelo email: eventos@whitestonedev.com.br*
