export class Stack {
    #values;
    #finalLength;

    constructor() {
        this.#values = new Array(8);
        this.#finalLength = 0;
    }

    push(number) {
        this.#values[this.#finalLength] = number;
        this.#finalLength++;
    }

    isEmpty() {
        return this.#finalLength == 0;
    }

    isFull() {
        return this.#finalLength == 8;
    }

    pop() {
        const number = this.#values[this.#finalLength - 1];
        this.#values[this.#finalLength] = null;
        this.#finalLength--;
        return number;
    }

    get values() {
        return this.#values;
    }
}
