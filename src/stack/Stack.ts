export class Stack {
    private values: (number | null)[];
    private finalLength: number;

    constructor() {
        this.values = new Array(8);
        this.finalLength = 0;
    }

    public push(value: number) {
        this.values[this.finalLength] = value;
        this.finalLength++;
    }

    public isEmpty() {
        return this.finalLength == 0;
    }

    public isFull() {
        return this.finalLength == 8;
    }

    public pop() {
        const number = this.values[this.finalLength - 1];
        this.values[this.finalLength] = null;
        this.finalLength--;
        return number;
    }

    public getValues() {
        return this.values;
    }
}
