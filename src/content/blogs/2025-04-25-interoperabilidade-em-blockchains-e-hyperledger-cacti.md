---
title: "Interoperabilidade em Blockchains e Hyperledger Cacti"
date: "2025-06-10"
authors: ["whiteStone_bot", "Fifo Zatti"]
tags: [Interoperabilidade, Blockchain, Hyperledger Cacti, Web3, Finanças Digitais, Tecnologia Blockchain, CheesecakeLabs]
thumb: /img/blog/posts/edicao7/fifo_thumb.png
short_description: "Explore a importância da interoperabilidade no universo blockchain, os desafios de potencialidade e compatibilidade entre redes, e como o Hyperledger Cacti, um framework modular open-source, busca construir pontes para a colaboração de dados e ativos entre diferentes tecnologias."
---

> Este blogpost foi gerado a partir da **talk apresentada pelo [Fifo](https://www.linkedin.com/in/oififo)** durante a **7ª Edição | Cripto - Especial Fênix**.  
> O conteúdo abaixo reflete os principais pontos e reflexões compartilhadas ao vivo, adaptados para leitura, e aprofunda a visão do palestrante sobre o presente e o futuro da tecnologia blockchain.  
> Assista à apresentação completa no [YouTube](https://www.youtube.com/live/C-YejH6p878?t=6780)

Hoje vamos desbravar um tópico que é, sem dúvida, um dos mais cruciais para a evolução e a adoção massiva das tecnologias blockchain: a interoperabilidade. No mundo onde as blockchains estão se especializando e se tornando cada vez mais diversas, a capacidade de fazer com que elas se comuniquem e trabalhem juntas é fundamental. E para isso, o projeto Hyperledger Cacti surge como uma solução open-source poderosa, que eu tive o prazer de colaborar.


### Interoperabilidade: O Problema Fundamental

Interoperabilidade em blockchains implica em dois problemas fundamentais:
1.  **Como representar um estado interno para blockchains de terceiros?** Isso é vital para que um sistema de interoperação possa atuar sobre dados confiáveis e atualizados.
2.  **Como garantir que a lógica de negócio que opera em múltiplas blockchains seja sólida?** Isso depende do caso de uso específico a ser implementado. Por exemplo, em uma ponte (bridge) entre blockchains, é essencial evitar o gasto duplo (double spend).

Para entender melhor essa complexidade, os pesquisadores do Cacti abordaram o problema sob duas perspectivas principais: a **Potencialidade (P-Levels)** e a **Compatibilidade (C-Levels)**.

#### P-Levels: A Distância Entre as Tecnologias

Os P-Levels analisam a "distância" entre as tecnologias que precisam interagir.

*   **P1: Funcionalidade na Mesma Sub-rede / Rede / Protocolo**
    Aqui, estamos falando de funcionalidades dentro da mesma blockchain, como dois Smart Contracts na mesma Mainnet do Ethereum. Eles falam a mesma linguagem, se entendem da mesma forma e já possuem mecanismos nativos para se comunicar.
*   **P2: Funcionalidade em Sub-redes Diferentes (mas na mesma Rede/Protocolo)**
    Um exemplo são as redes que utilizam sharding, como a Near, onde grupos de nós particionam a informação. Quando um pedaço de uma partição precisa interagir com outro pedaço em outra partição, mesmo sendo na mesma rede, já se exige interoperabilidade.
*   **P3: Funcionalidade em Redes Diferentes (mas no mesmo Protocolo)**
    Imagine uma Mainnet do Ethereum e uma testnet como a Kovan. O código pode ser o mesmo, a informação é a mesma, mas as redes são completamente diferentes e os nós não são os mesmos. A comunicação já é mais complexa e envolve outros validadores.
*   **P4: Funcionalidade em Redes e Protocolos Diferentes**
    Este é o cenário mais complexo, onde você tem, por exemplo, uma solução rodando em Ethereum e outra em Stellar. Elas falam línguas diferentes, o consenso é diferente, e a orquestração para resolver a comunicação é muito maior.

<img src="/img/blog/posts/edicao7/fifo_p_levels.png" />


#### C-Levels: A Compatibilidade entre Entidades

Os C-Levels olham para as partes envolvidas na solução, não apenas a tecnologia:

*   **C1: Compatibilidade Semântica**
    Os sistemas possuem interfaces e APIs que permitem a integração, e suas lógicas de negócio se complementam.
*   **C2: Nível Organizacional**
    As empresas envolvidas precisam querer colaborar e ter incentivos para isso. Um ótimo exemplo são as "âncoras" na Stellar, que são empresas que movem dinheiro e se especializam em certas regiões e regulamentações, colaborando para facilitar transferências globais.
*   **C3: Nível Legal**
    Este é o nível mais desafiador, onde é preciso verificar se existem regulações que impedem a colaboração entre as entidades em diferentes jurisdições.

<img src="/img/blog/posts/edicao7/fifo_c_levels.png" />
<img src="/img/blog/posts/edicao7/fifo_c_levels2.png" style="max-width: 200px; display: block; margin: 0 auto;" />


Ao mapear esses níveis, é possível entender o tamanho e a complexidade do problema que se está atacando, seja construindo uma "casa de madeira de dois cômodos" ou um "prédio comercial com muitas salas".



### Modos de Interoperabilidade: As Pré-Receitas do Cacti

O Hyperledger Cacti oferece "pré-receitas" ou modos de interoperabilidade que buscam encontrar pontos em comum para reuso, independentemente das especificidades de cada caso.

#### **Data Transfer (Transferência de Dados)**
É o modo mais simples, onde dados são copiados de uma DLT para outra, muitas vezes com um passo intermediário de processamento. Oracles são exemplos de empresas que trabalham com isso, movendo dados para dentro ou entre blockchains. O processo geralmente envolve observar o dado, gerar uma prova criptográfica e disponibilizá-lo na outra rede.

#### **Asset Transfer (Transferência de Ativos)**
Aqui, a ideia é mover uma representação de um ativo de uma rede para outra, garantindo a consistência em ambas. Um método comum é o "wrapping", onde fundos são travados na rede original e uma cópia representativa é criada na rede de destino. Pense nas fichas de um cassino: o dinheiro físico está travado na caixa, e as fichas (representações) circulam na mesa de pôquer. Quando as fichas são devolvidas, o dinheiro original é liberado. Exemplos incluem WBTC (Wrapped Bitcoin) e WETH (Wrapped Ethereum).

#### **Asset Exchange (Troca de Ativos)**  
Este é o caso mais genérico e abstrato, onde ativos completamente diferentes são trocados entre redes e tecnologias distintas. Requer muita orquestração e transações complexas.

*   **Exemplo: Hash Time Lock Contract (HTLC)**  
    Um HTLC é um algoritmo que permite a troca de ativos diferentes de forma segura, mesmo em redes distintas, através de mecanismos de travas criptográficas e temporais.  
    *   **Cenário**: Alice possui títulos em rede Drex e quer trocá-los por fundos em Stellar com Charlie.  
    *   **Preparação**:  
        1.  Alice inicializa um contrato no Drex, travando seus títulos com duas condições de liberação: uma chave criptográfica (que só ela tem) e uma trava temporal (se ninguém resgatar em Δt1, o título volta para ela).
        2.  Charlie, na Stellar, vê publicamente essa transação, cria um contrato idêntico (com a mesma trava criptográfica) e também adiciona uma trava temporal, mas com um período menor (Δt2 < Δt1). Se Alice não resgatar, os fundos voltam para ele.
    *   **Execução (se tudo der certo)**:
        1.  Alice usa sua chave criptográfica para resgatar os fundos de Charlie na rede Stellar. Esse processo torna a chave pública.
        2.  Charlie, observando o resgate de Alice, usa a chave agora pública para resgatar os títulos de Alice no Drex. Ele tem um tempo de Δt1 - Δt2 para fazer isso.
    *   **Cancelamento**: Se Alice não resgatar os fundos de Charlie dentro do tempo Δt2, Charlie pode recuperar seus fundos e cancelar a transação. Da mesma forma, se Charlie não resgatar os títulos de Alice dentro de Δt1, Alice pode recuperá-los.

        <img src="/img/blog/posts/edicao7/fifo_preparacao.png" />

    Essa é apenas uma das muitas formas de fazer trocas, mas ilustra a complexidade e a necessidade de orquestração.

### O Projeto Hyperledger Cacti: Um Framework Modular

O projeto Cacti é o resultado da fusão de dois projetos anteriores da Linux Foundation, Cactus e Weaver. Ele não é uma solução pronta, mas um **framework open-source** que oferece um conjunto de ferramentas modulares e reusáveis. A ideia é que qualquer pedaço construído para o Cacti possa ser reaproveitado por toda a comunidade.

<img src="/img/blog/posts/edicao7/fifo_cacti_1.png" />


#### Componentes Principais:

*   **Conectores**: São os tradutores de linguagem. Um conector é um componente que "fala" a linguagem de uma rede específica (por exemplo, um conector Stellar que eu ajudei a desenvolver). Ele executa transações na rede sem entender a lógica de negócio, apenas a sua "linguagem nativa".
*   **Core Operators**: Criam uma linguagem única e abstrata para operações comuns, como "travar um ativo". Assim, mesmo que a forma de travar um ativo seja diferente em Ethereum e Stellar, o core operator traduz essa instrução genérica para as ações específicas de cada rede, permitindo reutilização com múltiplos conectores.
*   **Lógica de Negócio (Orquestração)**: Permite combinar os conectores e core operators para construir soluções complexas. Uma empresa pode rodar tudo com sua própria regra de negócio, ou múltiplas empresas podem colaborar. O framework oferece flexibilidade para orquestrar como esses módulos serão combinados.

<img src="/img/blog/posts/edicao7/fifo_cacti_2.png" />

### O Futuro Híbrido da Interoperabilidade

A visão de longo prazo do Cacti é criar um **ecossistema muito híbrido**, onde diferentes redes (Ethereum, Stellar, outras) podem ser combinadas com múltiplas instâncias do framework, usando componentes específicos ou o framework inteiro, dependendo da necessidade.


Embora seja um projeto com muito trabalho pela frente, o Cacti representa um passo fundamental para a maturidade das blockchains, permitindo que elas cooperem e colaborem, assim como as soluções financeiras tradicionais fazem. A interoperabilidade é o caminho para construir pontes entre diferentes blockchains e possibilitar casos de uso ainda mais impactantes no mundo real.
