import { Product } from "../../../domain/Product";

export class ProductNode {
    private product: Product;
    private next: ProductNode | null;
    private key: string;

    public constructor(product: Product, key: string) {
        this.product = product;
        this.next = null;
        this.key = key;
    }

    public getNext() {
        return this.next;
    }

    public setNext(next: ProductNode | null) {
        this.next = next;
    }

    public getProduct() {
        return this.product;
    }

    public getKey() {
        return this.key;
    }
}