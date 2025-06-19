---
title: Desvendando a Lentidão no MongoDB - Guia Prático para Otimizar seus Índices
date: "2020-11-19"
tags: [MongoDB, Database, Performance, Index, Troubleshooting]
author: "Daniel da Rosa"
thumb: /img/blog/thumbs/mongodb.png
short_description: "Aprenda a identificar e resolver lentidão em queries do MongoDB analisando índices e planos de execução na prática."
---

## Seus Índices no MongoDB Estão Turbinados ou Te Deixando na Mão? 

Quem nunca se deparou com aquela lentidão раздрашивающая nas consultas ao banco de dados, não é mesmo? Em um cenário como esse, otimizar os índices do MongoDB pode ser a chave para **turbinar a performance** da sua aplicação! 

Neste artigo, vamos mergulhar em um caso real de troubleshooting de índices no MongoDB. Você vai aprender a identificar gargalos, analisar o plano de execução de queries com o poderoso `explain()` e descobrir como criar índices eficientes para **deixar suas consultas voando baixo!** 

Recentemente, no trabalho, enfrentei um desafio com uma collection no MongoDB que estava apresentando lentidão em algumas consultas.  A collection era grande (4 milhões de documentos), mas a lentidão era **sorrateira**, mascarada em meio a outros processos demorados.

O problema veio à tona com a ajuda do [Sysdig](https://sysdig.com/), que apontou essa collection como a **mais lenta do banco!**  [Quer saber como configurar um agente Sysdig no MongoDB? Clique aqui!](https://docs.sysdig.com/en/mongodb.html)

Para ilustrar a situação, imagine uma collection com 4 milhões de registros de pessoas, seguindo este modelo:

```json
{
    "_id": ObjectId("5fab44b1153579ed0dacdb88"),
    "name": "danidr7",
    "cpf": "12345678900",
    "age": 28,
    "occupation": "programmer",
    "phone": "123456789"
}
```

[Curioso para simular essa situação? Usei este script para gerar dados aleatórios no MongoDB!](https://gist.github.com/danidr7/f4e87ff2548db48001584e4b2466a913)

O primeiro passo foi identificar **quais campos eram mais consultados** nessa collection. Analisando as queries, encontrei os seguintes padrões:

```javascript
// 1. Busca por nome e CPF
db.person.find({ name: 'danidr7', cpf: '12345678900' })

// 2. Busca por profissão e CPF
db.person.find({ occupation: 'programmer', cpf: '12345678900' })
```

Em seguida, verifiquei os índices existentes na collection:

```javascript
$ db.person.getIndexes()
[
    {
        "v" : 2,
        "key" : {
            "_id" : 1
        },
        "name" : "_id_",
        "ns" : "test.person"
    },
    {
        "v" : 2,
        "unique" : true,
        "key" : {
            "name" : 1,
            "cpf" : 1
        },
        "name" : "name_1_cpf_1_idx",
        "ns" : "test.person"
    },
    {
        "v" : 2,
        "key" : {
            "occupation" : 1
        },
        "name" : "occupation",
        "ns" : "test.person"
    }
]
```

Ok, tínhamos um índice composto por 'name' e 'cpf', e outro individual para 'occupation'. Será que esses índices estavam sendo **bem aproveitados**? O que acontecia por trás dos panos quando o MongoDB executava as queries? Para responder essas perguntas, a ferramenta chave é o **[explain()](https://docs.mongodb.com/manual/reference/method/cursor.explain/)**!

O `explain()` é o nosso **detetive de queries!** Ele nos revela o plano de execução da consulta, permitindo analisar se os índices estão sendo utilizados e como a query está performando. Vamos investigar a primeira query:

```javascript
$ db.person.find({name: "danidr7", cpf: "12345678900"}).explain("executionStats")
{
    "queryPlanner" : {
        "plannerVersion" : 1,
        "namespace" : "test.person",
        "indexFilterSet" : false,
        "parsedQuery" : {
            "$and" : [
                {
                    "cpf" : {
                        "$eq" : "12345678900"
                    }
                },
                {
                    "name" : {
                        "$eq" : "danidr7"
                    }
                }
            ]
        },
        "winningPlan" : {
            "stage" : "FETCH",
            "inputStage" : {
                "stage" : "IXSCAN",
                "keyPattern" : {
                    "name" : 1,
                    "cpf" : 1
                },
                "indexName" : "name_1_cpf_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                    "name" : [ ],
                    "cpf" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                    "name" : [
                        "[\"danidr7\", \"danidr7\"]"
                    ],
                    "cpf" : [
                        "[\"12345678900\", \"12345678900\"]"
                    ]
                }
            }
        },
        "rejectedPlans" : [ ]
    },
    "executionStats" : {
        "executionSuccess" : true,
        "nReturned" : 1,
        "executionTimeMillis" : 0,
        "totalKeysExamined" : 1,
        "totalDocsExamined" : 1,
        "executionStages" : {
            "stage" : "FETCH",
            "nReturned" : 1,
            "executionTimeMillisEstimate" : 0,
            "works" : 2,
            "advanced" : 1,
            "needTime" : 0,
            "needYield" : 0,
            "saveState" : 0,
            "restoreState" : 0,
            "isEOF" : 1,
            "docsExamined" : 1,
            "alreadyHasObj" : 0,
            "inputStage" : {
                "stage" : "IXSCAN",
                "nReturned" : 1,
                "executionTimeMillisEstimate" : 0,
                "works" : 2,
                "advanced" : 1,
                "needTime" : 0,
                "needYield" : 0,
                "saveState" : 0,
                "restoreState" : 0,
                "isEOF" : 1,
                "keyPattern" : {
                    "name" : 1,
                    "cpf" : 1
                },
                "indexName" : "name_1_cpf_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                    "name" : [ ],
                    "cpf" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                    "name" : [
                        "[\"danidr7\", \"danidr7\"]"
                    ],
                    "cpf" : [
                        "[\"12345678900\", \"12345678900\"]"
                    ]
                },
                "keysExamined" : 1,
                "seeks" : 1,
                "dupsTested" : 0,
                "dupsDropped" : 0
            }
        }
    },
    "serverInfo" : {
        "host" : "my-host",
        "port" : 27017,
        "version" : "4.2.8",
        "gitVersion" : "43d25964249164d76d5e04dd6cf38f6111e21f5f"
    },
    "ok" : 1
}
```

Ufa! O `explain()` retorna um caminhão de informações! Mas calma, vamos focar no essencial: **`winningPlan`** e **`executionStats`**. [Quer saber o que cada campo significa? A documentação do MongoDB te explica tim-tim por tim-tim!](https://docs.mongodb.com/manual/reference/explain-results/)

O **`winningPlan`** revela o plano de consulta **vencedor**, escolhido pelo otimizador do MongoDB. Ele pode ter até 3 estágios (`inputStage`). Os estágios mais importantes para a nossa análise são:

- **`FETCH`**: Recupera os documentos propriamente ditos, buscando-os a partir das chaves retornadas no estágio anterior.
- **`COLLSCAN`**: Realiza uma varredura completa na collection, documento por documento. **Sinal vermelho! Índices não estão sendo usados!**
- **`IXSCAN`**: Varre as chaves dos índices, buscando de forma otimizada os documentos. **Índices em ação!**

No `winningPlan` do nosso exemplo, vemos os estágios `FETCH` e `IXSCAN`. Ótima notícia! Um índice está sendo usado! O nome dele? `indexName` nos revela: **`name_1_cpf_1`**.

Agora, vamos analisar o **`executionStats`**:

```json
"executionStats" : {
    "executionSuccess" : true,
    "nReturned" : 1,
    "executionTimeMillis" : 0,
    "totalKeysExamined" : 1,
    "totalDocsExamined" : 1,
}
```

- **`nReturned`**: Número de documentos retornados pela consulta.
- **`executionTimeMillis`**: Tempo total de execução da consulta em milissegundos.
- **`totalKeysExamined`**: Número de chaves de índice examinadas. > 0 indica uso de `IXSCAN`.
- **`totalDocsExamined`**: Número de documentos examinados durante a consulta. Pode ocorrer em estágios `FETCH` e `COLLSCAN`.

Com base nos números do `executionStats`, a primeira query está **performando muito bem!** O estágio `IXSCAN` filtrou as chaves de índice de forma eficiente, retornando apenas **1 resultado** para o estágio `FETCH` buscar o documento.

Agora, vamos repetir a análise para a segunda query. Para facilitar a visualização, vamos focar apenas no `executionStats`:

```javascript
$ db.person.find({occupation: "programmer", cpf: "12345678900"}).explain("executionStats")
{
    ...
    "executionStats" : {
        "executionSuccess" : true,
        "nReturned" : 1,
        "executionTimeMillis" : 1101,
        "totalKeysExamined" : 799296,
        "totalDocsExamined" : 799296,
        "executionStages" : {
            "stage" : "FETCH",
            "executionTimeMillisEstimate" : 50,
            "docsExamined" : 799296,
            "filter" : {
                "cpf" : {
                    "$eq" : "12345678900"
                }
            },
            "nReturned" : 1,
            "works" : 799297,
            "advanced" : 1,
            "needTime" : 799295,
            "needYield" : 0,
            "saveState" : 6244,
            "restoreState" : 6244,
            "isEOF" : 1,
            "alreadyHasObj" : 0,
            "inputStage" : {
                "stage" : "IXSCAN",
                "nReturned" : 799296,
                "executionTimeMillisEstimate" : 18,
                "works" : 799297,
                "advanced" : 799296,
                "needTime" : 0,
                "needYield" : 0,
                "saveState" : 6244,
                "restoreState" : 6244,
                "isEOF" : 1,
                "keyPattern" : {
                    "occupation" : 1
                },
                "indexName" : "occupation_1",
                "isMultiKey" : false,
                "multiKeyPaths" : {
                    "occupation" : [ ]
                },
                "isUnique" : false,
                "isSparse" : false,
                "isPartial" : false,
                "indexVersion" : 2,
                "direction" : "forward",
                "indexBounds" : {
                    "occupation" : [
                        "[\"programmer\", \"programmer\"]"
                    ]
                },
                "keysExamined" : 799296,
                "seeks" : 1,
                "dupsTested" : 0,
                "dupsDropped" : 0
            }
        }
    }
}
```

**OPA! 🚨 Sinal vermelho de novo!** Na segunda query, os números do `executionStats` já acendem o alerta:

```json
"executionStats" : {
    "nReturned" : 1,
    "executionTimeMillis" : 1101, // Tempo de execução ALTO!
    "totalKeysExamined" : 799296, // Muitas chaves examinadas!
    "totalDocsExamined" : 799296, // Muitos documentos examinados!
```

Tempo de execução alto, um mar de chaves e documentos examinados... O que aconteceu? Analisando o `executionStages`, o mistério se revela:

No estágio **`IXSCAN`**:

```json
"inputStage" : {
    "stage" : "IXSCAN",
    "nReturned" : 799296, // Retornou MUITOS documentos!
    "indexName" : "occupation_1", // Índice utilizado: occupation_1
    ...
}
```

O índice `occupation_1` foi utilizado, mas retornou **799296 documentos!** Isso porque o índice cobre apenas o campo `occupation`. Ele filtrou por profissão, ok, mas encontrou **todos** os programadores da collection!

No estágio **`FETCH`**:

```json
"executionStages" : {
    "stage" : "FETCH",
    "docsExamined" : 799296, // Examinou MUITOS documentos!
    "nReturned" : 1, // Para retornar APENAS 1!
    ...
}
```

O estágio `FETCH` teve que examinar **TODOS** os 799296 documentos retornados pelo `IXSCAN` para só então encontrar o documento que também correspondia ao filtro de `cpf`! Um **trabalho hercúleo e desnecessário!** Precisamos de um índice mais **inteligente!** 🧠

Vamos criar um **índice composto** que inclua os campos `cpf` e `occupation`:

```javascript
$ db.person.createIndex({cpf: 1, occupation: 1})
{
    "createdCollectionAutomatically" : false,
    "numIndexesBefore" : 3,
    "numIndexesAfter" : 4,
    "ok" : 1
}
```

**Por que um índice composto de `cpf` e `occupation` e não apenas um índice para `cpf`?** O MongoDB escolhe **apenas um índice** por consulta. Precisamos analisar **quais campos são mais relevantes** para o índice. Índices compostos (até 32 campos!) são poderosos para otimizar queries com múltiplos critérios de filtro.

Será que o novo índice fez mágica? ✨ Vamos rodar o `explain()` novamente:

```javascript
$ db.person.find({occupation: "programmer", cpf: "12345678900"}).explain("executionStats")
{
    ...
    "executionStats" : {
        "executionSuccess" : true,
        "nReturned" : 1,
        "executionTimeMillis" : 11, // Tempo de execução LÁ EMBAIXO!
        "totalKeysExamined" : 1,     // Apenas 1 chave examinada!
        "totalDocsExamined" : 1,     // Apenas 1 documento examinado!
        "executionStages" : {
            "stage" : "FETCH",
            "nReturned" : 1,
            "executionTimeMillisEstimate" : 10,
            "works" : 3,
            "advanced" : 1,
            "needTime" : 0,
            "needYield" : 0,
            "saveState" : 0,
            "restoreState" : 0,
            "isEOF" : 1,
            "docsExamined" : 1,
            "alreadyHasObj" : 0,
            "inputStage" : {
                "stage" : "IXSCAN",
                "nReturned" : 1,     // Retornou APENAS 1 documento!
                "executionTimeMillisEstimate" : 10,
                "works" : 2,
                "advanced" : 1,
                "needTime" : 0,
                "needYield" : 0,
                "saveState" : 0,
                "restoreState" : 0,
                "isEOF" : 1,
                "keyPattern" : {
                    "cpf" : 1,
                    "occupation" : 1
                },
                "indexName" : "cpf_1_occupation_1", // Índice composto em ação!
                ...
            }
        }
    },
    ...
    "rejectedPlans" : [ // Planos rejeitados pelo otimizador
        {
            "stage" : "FETCH",
            "filter" : {
                "cpf" : {
                    "$eq" : "12345678900"
                }
            },
            "inputStage" : {
                "stage" : "IXSCAN",
                "keyPattern" : {
                    "occupation" : 1
                },
                "indexName" : "occupation_1", // Plano rejeitado usava o índice antigo!
                ...
            }
        }
    ],
    ...
}
```

**QUE MELHORA INCRÍVEL!** O tempo de resposta despencou de 1101ms para **apenas 11ms!** No `executionStages`, o `IXSCAN` agora utiliza o índice composto `cpf_1_occupation_1` e retorna **apenas 1 chave!** 🎉 O índice composto **resolveu o problema!**

Outro ponto interessante é o **`rejectedPlans`**. Ele lista planos de consulta que foram considerados, mas **rejeitados** pelo otimizador do MongoDB, que optou por um plano mais eficiente. No nosso caso, o `rejectedPlans` mostra um plano que utilizava o índice antigo `occupation_1`. Como esse índice se tornou **obsoleto** para essa query, podemos **removê-lo** da collection!

#### Considerações Finais

Otimizar índices no MongoDB exige **cautela e análise.** Lembre-se:

- O MongoDB usa **apenas um índice por consulta.**
- **Muitos índices impactam a performance de escrita.** Cada índice adiciona um custo extra a cada inserção de documento. [Saiba mais sobre performance de escrita aqui!](https://docs.mongodb.com/manual/core/write-performance/)
- O **`explain()`** é seu melhor amigo na análise de queries! Use-o para entender o plano de execução e identificar gargalos.
- Ferramentas como **Prometheus** ([https://prometheus.io/docs/instrumenting/exporters/](https://prometheus.io/docs/instrumenting/exporters/)) e **Sysdig** ([https://docs.sysdig.com/en/mongodb.html](https://docs.sysdig.com/en/mongodb.html)) são **poderosas** para monitorar a performance do seu banco de dados em um contexto mais amplo e identificar queries lentas que precisam de atenção.

Com as ferramentas e técnicas certas, você pode **dominar a arte da otimização de índices no MongoDB** e garantir que suas aplicações voem em alta performance! **E você, já usou o `explain()` para otimizar suas queries?
