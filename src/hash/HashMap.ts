import { Data } from "./Data";
import { hashFunction } from "./hashFunction";

export class HashMap {
    private values: Data[];

    constructor() {
        this.values = [];
    }

    public put(data: Data) {
        const position = data.hashCode();
        if (this.values[position] == null) this.values[position] = data;
    }

    public get(key: number) {
        const position = hashFunction(key);
        return this.values[position];
    }

}