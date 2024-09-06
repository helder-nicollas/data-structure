import { ProductTable } from "./tables/Product";

export class Database {
    public productsTable: ProductTable;

    constructor() {
        this.productsTable = new ProductTable();
    }
}
