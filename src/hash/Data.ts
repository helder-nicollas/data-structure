import { hashFunction } from "./hashFunction";

export class Data {
    constructor(
        private key: number,
        private value: string
    ) { }

    public getKey() {
        return this.key;
    }

    public getValue() {
        return this.value;
    }

    public setValue(value: string) {
        this.value = value;
    }

    public hashCode() {
        return hashFunction(this.key);
    }
}
