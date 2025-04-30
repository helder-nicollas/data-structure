export class Product {
    private name: string;
    private unitValue: number;
    private stockQuantity: number;

    public constructor(
        name: string, 
        unitValue: number
    ) {
        this.name = name;
        this.unitValue = unitValue;
        this.stockQuantity = 0;
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
