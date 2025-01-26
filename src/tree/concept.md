# Árvores Binárias

São estruturas recursivas que iniciam-se por um nó raiz que são distribuídas em nós descendentes que também são árvores. Esses nós guardam informações e têm obrigatoriamente no máximo dois filhos. Curiosidade: As árvores são linked lists aprimoradas.

- Nós filhos sem descendentes são nós folha
- O que torna a árvore eficiente para busca é o critério de inserção
- Todos os elementos à direita da raiz são maiores
- Todos os elementos à esquerda da raiz são menores
- Os dados que são guardados na árvore são índices únicos que identificam informações. Isso significa que não é viável inserir dados duplicados, pois com isso, a árvore binária perderia o seu propósito.


## Funcionamento

Tudo nas árvores binárias funciona de forma recursiva passando as responsabilidades para as sub-árvores. As árvores são eficientes somente se estiverem balanceadas. Se isso não acontecer, a árvore perde seu fundamento e funciona como uma busca sequencial.

### Busca

### Percurso

![alt text](image.png)


Existem quatro maneiras de se percorrer uma árvore binária:
- Pré-ordem: Percorre a raíz, depois todos os elementos da esquerda e por último, todos os elementos da direita
- In-ordem: Percorre a árvore em sentido horário, passando pelos elementos da esquerda, depois a raíz e por último os elementos da direita
- Pós-ordem: Percorre todos os elementos da direita, depois da esquerda e por último a raíz
- In-ordem invertida: testing...

