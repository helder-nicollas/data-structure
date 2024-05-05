export class Queue {
    private values: (number | null)[];
    private length: number;
    private start: number;
    private end: number;

    constructor() {
        this.values = [];
        this.length = 0;
        this.start = 0;
        this.end = 0;
    }

    insert(element: number) {
        this.values[this.end] = element;
        this.end++;
        this.length++;
    }

    remove() {
        const element = this.values[this.start];
        this.values[this.start] = null;
        this.start++;
        this.length--;
        return element;
    }

    isEmpty() {
        return this.length == 0;
    }

    isFull() {
        return this.length == 5;
    }

    getValues() {
        return this.values;
    }
}
