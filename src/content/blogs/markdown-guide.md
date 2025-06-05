---
title: Guia Completo de Markdown
date: 2024-03-20
author: João Silva
author_id: joao-silva
tags: [markdown, guia, tutorial]
banner_link: https://placehold.co/1200x400/2563eb/FFFFFF/png
short_description: Um guia completo mostrando todos os recursos disponíveis no Markdown, incluindo GitHub Flavored Markdown (GFM)
---

# Guia Completo de Markdown

Este é um guia completo que demonstra todos os recursos disponíveis no Markdown, incluindo GitHub Flavored Markdown (GFM).

## Títulos

# Título H1
## Título H2
### Título H3
#### Título H4
##### Título H5
###### Título H6

## Ênfase

*Texto em itálico* ou _texto em itálico_
**Texto em negrito** ou __texto em negrito__
***Texto em negrito e itálico*** ou ___texto em negrito e itálico___
~~Texto riscado~~

## Listas

### Lista não ordenada

* Item 1
* Item 2
  * Subitem 2.1
  * Subitem 2.2
* Item 3

### Lista ordenada

1. Primeiro item
2. Segundo item
   1. Subitem 2.1
   2. Subitem 2.2
3. Terceiro item

### Lista de tarefas (GFM)

- [x] Tarefa concluída
- [ ] Tarefa pendente
- [ ] Outra tarefa pendente

## Links e Imagens

### Links

[Link simples](https://www.example.com)
[Link com título](https://www.example.com "Título do link")
[Link com referência][referencia]

[referencia]: https://www.example.com "Título do link com referência"

### Imagens

#### Formatos de Imagem

![Imagem PNG](https://placehold.co/600x400/2563eb/FFFFFF/png "Imagem PNG")
![Imagem JPEG](https://placehold.co/600x400/2563eb/FFFFFF/jpeg "Imagem JPEG")
![Imagem WebP](https://placehold.co/600x400/2563eb/FFFFFF/webp "Imagem WebP")
![Imagem GIF](https://placehold.co/600x400/2563eb/FFFFFF/gif "Imagem GIF")
![Imagem AVIF](https://placehold.co/600x400/2563eb/FFFFFF/avif "Imagem AVIF")
![Imagem SVG](https://placehold.co/600x400/2563eb/FFFFFF/svg "Imagem SVG")

#### Cores e Tamanhos

![Imagem Pequena](https://placehold.co/300x200/2563eb/FFFFFF/png "Imagem Pequena")
![Imagem Média](https://placehold.co/600x400/2563eb/FFFFFF/png "Imagem Média")
![Imagem Grande](https://placehold.co/1200x800/2563eb/FFFFFF/png "Imagem Grande")

#### Diferentes Cores

![Azul](https://placehold.co/600x400/2563eb/FFFFFF/png "Azul")
![Verde](https://placehold.co/600x400/22c55e/FFFFFF/png "Verde")
![Vermelho](https://placehold.co/600x400/ef4444/FFFFFF/png "Vermelho")
![Roxo](https://placehold.co/600x400/a855f7/FFFFFF/png "Roxo")
![Laranja](https://placehold.co/600x400/f97316/FFFFFF/png "Laranja")

#### Imagens com Referência

![Imagem com referência][imagem1]
![Outra imagem com referência][imagem2]

[imagem1]: https://placehold.co/600x400/2563eb/FFFFFF/png "Imagem com referência"
[imagem2]: https://placehold.co/600x400/22c55e/FFFFFF/png "Outra imagem com referência"

## Citações

> Esta é uma citação simples.
> 
> > Esta é uma citação aninhada.
> 
> Continuação da citação principal.

## Código

### Código inline

Use `código inline` para destacar trechos de código.

### Blocos de código

```javascript
// Exemplo de código JavaScript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao('Mundo'));
```

```python
# Exemplo de código Python
def saudacao(nome):
    return f"Olá, {nome}!"

print(saudacao("Mundo"))
```

## Tabelas (GFM)

| Nome | Idade | Profissão |
|------|-------|-----------|
| João | 25    | Desenvolvedor |
| Maria | 30   | Designer |
| Pedro | 28    | Analista |

### Alinhamento de colunas

| Alinhado à esquerda | Centralizado | Alinhado à direita |
|:-------------------|:------------:|-------------------:|
| Conteúdo           | Conteúdo     | Conteúdo          |
| Mais conteúdo      | Mais conteúdo| Mais conteúdo     |

## Linhas horizontais

---

***

___

## Notas de rodapé (GFM)

Aqui está uma nota de rodapé[^1].

[^1]: Esta é a nota de rodapé.

## Emojis (GFM)

:smile: :heart: :rocket: :tada:

## Menções e Referências (GFM)

@usuario  
#issue    
@organizacao/repositorio#123  

## URLs automáticas

https://www.example.com  
<https://www.example.com>

## Escape de caracteres

\* Asterisco  
\` Backtick  
\# Hashtag  
\- Hífen  
\. Ponto  
\! Ponto de exclamação  

## HTML inline

<div style="color: blue;">
  Este é um texto em <span style="color: red;">azul</span> com uma palavra em <span style="color: red;">vermelho</span>.
</div>

## Definições

Termo  
: Definição do termo

Outro termo  
: Definição do outro termo

## Conclusão

Este guia demonstra todos os recursos disponíveis no Markdown e GitHub Flavored Markdown. Use-o como referência ao criar seus próprios posts! 