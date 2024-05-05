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
