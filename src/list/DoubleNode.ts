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
