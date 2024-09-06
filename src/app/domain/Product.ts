export class Product {
    private productId: number;
    private name: string;
    private unitValue: number;
    private stockQuantity: number;

    public constructor(
        productId: number,
        name: string, 
        unitValue: number
    ) {
        this.productId = productId;
        this.name = name;
        this.unitValue = unitValue;
        this.stockQuantity = 0;
    }

    public getProductId() {
        return this.productId;
    }    

    public getName() {
        return this.name;
    }

    public setName(newName: string) {
        this.name = newName;
    }

    public getUnitValue() {
        return this.unitValue;
    }

    public setUnitValue(newUnitValue: number) {
        this.unitValue = newUnitValue;
    }

    public getStockQuantity() {
        return this.stockQuantity;
    }

}
