import { Node } from "./Node.js";

export class StackList {
    private top: Node | null;

    constructor() {
        this.top = null;
    }


    push(value: number) {
        const newNode = new Node();
        newNode.setNumber(value);
        newNode.setNextNode(null);

        this.top = newNode;
    }

    pop() {
        const number = this.top?.getNumber();
        this.top = this.top!.getNextNode();
        return number;
    }


    isEmpty() {
        return this.top == null;
    }

    print() {

    }
}
