import { Data } from "./Data";
import { hashFunction } from "./hashFunction";

export class HashMap {
    private values: Data[];

    constructor() {
        this.values = [];
    }

    public put(data: Data) {
        const position = data.hashCode();
        let node: Data | null = this.values[position];

        const isEmpty = node == null;

        if (isEmpty) return this.values[position] = data;

        while (node?.getNextNode() != null) {
            if (data.getKey() == node.getKey()) return node.setValue(data.getValue());
            node = node.getNextNode();
        }

        if (!node?.getNextNode())
            if (data.getKey() == node?.getKey())
                return node?.setValue(data.getValue());

        node?.setNextNode(data);
    }

    public get(key: number) {
        const position = hashFunction(key);
        let value: Data | null = this.values[position];

        if (value.getKey() == key) return value;
        while (value?.getNextNode() != null) {
            value = value.getNextNode();
            if (value != null && value?.getKey() == key) return value;
        }

        return null;
    }

}