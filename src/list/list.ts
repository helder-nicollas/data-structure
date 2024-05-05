import { Node } from "./Node.js";

export class List {
    private start: Node | null; //Node
    private string: string;

    constructor() {
        this.start = null;
        this.string = '';
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
            throw new Error('Lista vazia!');
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
