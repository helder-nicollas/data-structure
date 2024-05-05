export class Node {
    #number;
    #nextNode;


    setNumber(value) {
        this.#number = value; 
    }

    getNumber() {
        return this.#number;
    }

    setNextNode(value) {
        this.#nextNode = value;
    }

    getNextNode() {
        return this.#nextNode;
    }
}
