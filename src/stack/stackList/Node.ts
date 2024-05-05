export class Node {
    private declare number: number;
    private declare nextNode: Node | null;


    setNumber(value: number) {
        this.number = value; 
    }

    getNumber() {
        return this.number;
    }

    setNextNode(value: Node |null) {
        this.nextNode = value;
    }

    getNextNode() {
        return this.nextNode;
    }
}
