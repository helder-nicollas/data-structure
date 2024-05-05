export class Queue {
    #values;
    #length;
    #start;
    #end;

    constructor() {
        this.#values = new Array(5);
        this.#length = 0;
        this.#start = 0;
        this.#end = 0;
    }

    insert(element) {
        this.#values[this.#end] = element;
        this.#end++;
        this.#length++;
    }

    remove() {
        const element = this.#values[this.#start];
        this.#values[this.#start] = null;
        this.#start++;
        this.#length--;
        return element;
    }

    isEmpty() {
        return this.#length == 0;
    }

    isFull() {
        return this.#length == 5;
    }

    get values() {
        return this.#values;
    }
}
