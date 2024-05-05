# Lista Encadeada

É uma lista que trabalha através de ponteiros onde um elemento aponta para o próximo elemento da lista.
A lista possui dentro os nós dentro dela, e esses nós possuem a informação e uma referência para o próximo nó da lista, diferente da filha e da fila que trabalham com vetores como estratégia de armazenamento.

Suas principais funções: Insert, Remove, isEmpty, Print

### Classe Node (Nó)

```ts
export class Node {
    private number: number | null;
    private nextNode: Node | null;

    constructor() {
        this.number = null;
        this.nextNode = null;
    }

    setNumber(value: number) {
        this.number = value;
    }

    getNumber() {
        return this.number;
    }

    setNextNode(node: Node | null) {
        this.nextNode = node;
    }

    getNextNode() {
        return this.nextNode;
    }
}
```

### Classe List (Lista)

```ts
export class List {
    private start: Node | null; //Node
    private string: string;

    constructor() {
        this.start = null;
        this.string = "";
    }

    insert(number: number) {
        let newNode = new Node();
        newNode.setNumber(number);
        newNode.setNextNode(null);

        if (this.start == null) {
            this.start = newNode;
        } else {
            let auxNode: Node | null = this.start;

            while (auxNode?.getNextNode() != null) {
                auxNode = auxNode?.getNextNode();
            }

            auxNode?.setNextNode(newNode);
        }
    }

    remove() {
        if (this.start != null) {
            if (this.start.getNextNode() == null) this.start = null;
            else {
                this.start = this.start.getNextNode();
            }
        } else {
            throw new Error("Lista vazia!");
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("A lista está vazia");
            return;
        }

        let auxNode = this.start;
        while (auxNode != null) {
            console.log("Número " + auxNode.getNumber());
            auxNode = auxNode.getNextNode();
        }
    }

    isEmpty() {
        return this.start == null;
    }

    inlinePrint() {
        if (this.isEmpty()) {
            console.log("A lista está vazia");
            return;
        }
        let auxNode = this.start;

        while (auxNode != null) {
            this.string += `Número ${auxNode.getNumber()}, `;
            auxNode = auxNode.getNextNode();
        }

        console.log(this.string);
    }
}
```


# Lista Circular Duplamente Encadeada

É um tipo de lista onde o nó possui a informação e dois ponteiros onde um deles aponta para o próximo nó e o outro aponta para o nó anterior.
Nesse tipo de lista, o último elemento aponta para o primeiro elemento da lista como próximo elemento. No início, o elemento anterior do primeiro elemento dessa lista aponta para o último elemento da lista.  Por causa desses fatores que ela se chama circular.


### Classe DoubleNode (Duplo Nó)

```ts
export class DoubleNode {
    private declare number: number | null;
    private declare previousNode: DoubleNode;
    private declare nextNode: DoubleNode;

    constructor() {
    }

    public setNumber(value: number) {
        this.number = value;
    }

    public getNumber() {
        return this.number;
    }

    public setPreviousNode(node: DoubleNode) {
        this.previousNode = node;
    }

    public getPreviousNode() {
        return this.previousNode;
    }

    public setNextNode(node: DoubleNode) {
        this.nextNode = node;
    }

    public getNextNode() {
        return this.nextNode;
    }

}

```


### Classe DoublyLinkedList (Lista Duplamente Encadeada)

```ts
    export class DoublyLinkedList {
    private declare start: DoubleNode | null;    


    constructor() {
        this.start = null;
    }


    public isEmpty() {
        return this.start == null;
    }

    public insert(number: number) {
        const newNode = new DoubleNode();
        newNode.setNumber(number);
        
        if (this.isEmpty()) {
            newNode.setNextNode(newNode);
            newNode.setPreviousNode(newNode);
            this.start = newNode;
            return;
        }
                
        let auxNode = this.start!;
        
        while(auxNode.getNextNode() != this.start) {
            auxNode = auxNode.getNextNode();
        }

        auxNode.setNextNode(newNode); // O último elemento da lista recebe o novo como o próximo
        newNode.setPreviousNode(auxNode); // O novo recebe o antigo úiltimo elemento como o anterior
        newNode?.setNextNode(this.start); // O próximo item do novo elemento é o início
        this.start.setPreviousNode(newNode); //Se a lista não está vazia, o início recebe o novo elemento como anterior
    }

    public print() {
        let auxNode = this.start;

        do {
            console.log(auxNode?.getNumber());
            auxNode = auxNode!.getNextNode();
        } while (auxNode != this.start)
    }

    public remove() {
        if (this.isEmpty()) console.log('A lista está vazia');
        let auxNode = this.start?.getPreviousNode();
        auxNode = auxNode?.getPreviousNode();
        auxNode?.setNextNode(this.start!);
        this.start?.setPreviousNode(auxNode!);
    }
}

```