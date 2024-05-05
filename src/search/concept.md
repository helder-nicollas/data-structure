# Algorítmos de busca

## Busca linear

A busca linear é um modelo de busca que consiste em percorrer todos os elementos em busca de um valor.
O grande problema desse modelo de busca é a quantidade de dados que ela vai precisar iterar sobre. Isso pode causar um tempo de execução muito alto, trazendo assim um grande perda de performance.

```js
    public linearSearch(value: number) {
        for (let counter = 0; counter < this.values.length; counter++) {
            if (value == this.values[counter]) {
                return counter;
            }
        }
        return -1;
    }
```

## Busca Binária

É uma busca que exige que os dados estejam classificados (crescente ou decrescente). Ela consiste em:

-   Dividir o vetor pela metade
-   Verificar se o valor buscado está no centro da divisão
-   Descartar uma das metades considerando se o valor procurado é maior ou menor que o centro da divisão

A quantidade de iterações no pior caso sempre será melhor que a busca linear.
A grande desvantagem desse tipo de busca é que o vetor precisa estar classificado, algo que pode tomar muito processamento em conjunto com a busca binária.

```js
        public binarySearch(value: number) {
        let start: number, end: number, mid: number;

        start = 0;
        end = this.values.length - 1;

        while (start <= end) {
            mid = Math.floor((start + end) / 2);

            if (value == this.values[mid]) {
                return mid;
            }

            if (value > this.values[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

        }

        return -1;
    }
```
