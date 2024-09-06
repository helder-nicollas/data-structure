# Algoritmos de ordenação

## Bubble Sort

É um algoritmo que leva os elementos mais "pesados" para o fundo do vetor, deixando os elementos mais leves no início. Ele faz uma verificação de dois em dois elementos, garantindo que a cada iteração, os maiores elementos sempre fiquem no final do vetor. Com isso, após cada iteração, o número de elementos no vetor de verificação é menor.


## Selection Sort

Este algoritmo é um pouco mais complexo. Ele possui a seguinte lógica a cada iteração:
- Fixa um elemento;
- Procura um elemento menor a partir do elemento fixado + 1;
- Quando acha este elemento, faz a troca.

Este algoritmo é um pouco mais rápido que o Bubble Sort porque ele faz apenas uma troca por iteração.


## Insertion Sort

O algoritmo de inserção consiste em:
- Pegar um valor com base na iteração;
- Ir movendo os valores maiores do que o valor guardado para o final do vetor;
- Colocar o valor guardado na menor posição com base no seu tamanho.


## Quick Sort

Este algoritmo é considerado um dos mais rápidos quando o assunto é ordenação. O **Quick Sort** é um algoritmo recursivo que consiste em separar uma referência (Pivô) e deixar todos os elementos menores do que ele à esquerda e todos os elementos maiores do que ele à direita. Para isso, é necessário criar dois métodos: **partition** e o próprio **quickSort**
