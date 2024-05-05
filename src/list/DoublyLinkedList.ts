import { DoubleNode } from "./DoubleNode";

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

