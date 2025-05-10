import { Product } from "../../../domain/Product";
import { ProductBucket } from "./product-bucket";
import { ProductNode } from "./product-node";

export class ProductMap {
    private products: (ProductBucket | null)[] = [];
    private capacity: number;
    private size: number;
    private loadFactor = 0.75;


    public constructor(capacity: number) {
        this.products = new Array<ProductBucket | null>(capacity).fill(null);
        this.capacity = capacity;
        this.size = 0;
    }


    public put(product: Product) {
        const hashCode = this.hash(product.getName());
        const newProductNode = new ProductNode(product, product.getName());
        const isEmptySlot = this.products[hashCode] == null;

        if (isEmptySlot)
            this.products[hashCode] = new ProductBucket(newProductNode);
        else
            this.products[hashCode]!.insert(newProductNode);

        this.size++;

        if ((this.size / this.capacity) > this.loadFactor)
            this.resize();
    }

    private resize() {
        const oldBuckets = this.products;
        this.capacity *= 2;
        this.size = 0;
        this.products = new Array(this.capacity).fill(null);


        for (const bucket of oldBuckets) {
            if (bucket) {
                const products = bucket?.getAllValues();
                for (const product of products) {
                    this.put(product);
                }
            }
        }
    }

    public getAll() {
        let products: Product[] = [];

        for (const bucket of this.products) {
            if (bucket) {
                products = [...products, ...bucket.getAllValues()];
            }
        }

        return products;
    }

    public get(key: string) {
        const position = this.hash(key);
        return this.products[position]?.getNodeValue(key);
    }

    private hash(key: string) {
        let hash = 0;

        for (const char of key) {
            hash = (hash + char.charCodeAt(0)) % this.capacity;
        }

        return hash;
    }

    public delete(key: string) {
        const position = this.hash(key);

        this.products[position]?.delete(key);
    }
}
