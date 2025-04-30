# Hash Map

O hash map possibilita a inserção e a busca a partir de um único passo por meio dos índices ou "palavras-chave". Ele funciona como um índice remissivo de um livro.
Para que o hash map seja eficiente, ele deve possuir uma boa função hash para gerar os índices. Nessa estrutura, os dados possuem um valor chamado hashCode, o qual é calculado a partir de uma chave dada ao elemento. Esses valor é transformado na posição do elemento no vetor. Por causa disso, é possivel acessar os valores a partir de um único passo.

## Problema

Essa estrutura deve ser usada com cuidado por conta das colisões que podem haver com dois elementos que possuem o mesmo hashCode e chaves diferentes.
Dada a função que gera o hashCode sendo feita dessa forma:
```ts
    // src/hash/hashFunction.ts
    export function hashFunction(key: number) {
        return key % 100;
    }
```
Quando os valores abaixo forem inseridos, ambos obterão os mesmo hash codes, mesmo com chaves diferentes.
```ts
        // src/hash/App.ts
        const data01 = new Data(987, 'John'), // hashCode: 87
              data02 = new Data(787, 'Smith') // hasCode: 87
        hashMap.put(data01);
        hashMap.put(data02);
```
Com essa implementação, o elemento <code>data02</code> estaria substituindo o elemento <code>data01</code> gerando assim inconsistência de informações.


## Alternativas para resolver o problema

Uma boa alternativa para resolver o problema de colisão de posições é fazer uma função hash mais eficiente. Porém, mesmo com uma função hash muito eficiente, ainda existe uma possibilidade de um elemento com chave diferente gerar o mesmo hash code de um outro elemento. Para resolver esse problema, pode-se utilizar listas encadeadas (Buckets), onde uma posição poderá possuir vários elementos, eliminando assim a inconsistência de informações no **Hash Map**


## Casos de uso para utilizar hash maps
- Busca rápida por chave
- Contagem de frequência
- Relacionamentos complexos