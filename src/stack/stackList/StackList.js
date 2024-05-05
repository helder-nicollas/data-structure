import { Node } from "./Node.js";

export class StackList {
    #top = new Node();

    constructor() {
        this.#top = null;
    }


    push(number) {
        const newNode = new Node();
        newNode.setNumber(number);
        newNode.setNextNode(null);

        this.#top = newNode;
    }

    pop() {
        const number = this.#top.getNumber();
        this.#top = this.#top.getNextNode();
        return number;
    }


    isEmpty() {
        return this.#top == null;
    }

    print() {

    }
}
