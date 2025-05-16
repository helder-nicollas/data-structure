import { Product } from "../../../domain/Product";
import { ProductNode } from "./product-node";

export class ProductBucket {
    private start: ProductNode | null = null;

    public constructor(node: ProductNode) {
        this.start = node;
    }

    public insert(node: ProductNode) {
        if (this.isEmpty()) {
            this.start = node;
            return;
        }

        let auxNode = this.start;
        while(auxNode?.getNext() != null) {
            auxNode = auxNode!.getNext();
        }

        auxNode?.setNext(node);
    }

    public delete(key: string) {
        if (this.isEmpty()) {
            throw new Error('A lista está vazia.');
        }

        if (this.start?.getKey() == key) {
            this.start = this.start.getNext();
            return;
        }

        let prevNode = this.start;
        let currentNode = this.start?.getNext();

        while(currentNode != null) {
            if (currentNode.getKey() == key) {
                prevNode?.setNext(currentNode.getNext());
                return;
            }
            prevNode = currentNode;
            currentNode = currentNode.getNext();
        }

        throw new Error('Nenhum produto encontrado. ');
    }

    public isEmpty() {
        return this.start == null;
    }

    public getNodeValue(key: string) {
        if (this.isEmpty()) throw new Error('A lista está vazia.');

        let auxNode = this.start;

        while(auxNode != null) {
            if (auxNode.getKey() == key)
                return auxNode.getProduct();

            auxNode = auxNode.getNext();
        }

        return null;
    }

    public getAllValues() {
        const products: Product[] = [];

        if (this.isEmpty()) return products;


        let auxNode = this.start;

        while (auxNode != null) {
            products.push(auxNode.getProduct());
            auxNode = auxNode.getNext();
        }

        return products;
    }
}