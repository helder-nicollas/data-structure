import { hashFunction } from "./hashFunction";

export class Data {
    private key: number;
    private value: string;
    private nextNode: Data | null;
    constructor(key: number, value: string) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }

    public getKey() {
        return this.key;
    }

    public getValue() {
        return this.value;
    }

    public setValue(value: string) {
        this.value = value;
    }

    public setNextNode(data: Data) {
        this.nextNode = data;
    }

    public getNextNode() {
        return this.nextNode;
    }

    public hashCode() {
        return hashFunction(this.key);
    }
}
