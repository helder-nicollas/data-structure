import { Product } from "../../domain/Product";
import { Sell } from "../../domain/Sell";

export class SellsTable {
    // private sells: Sell[] = [];

    // public insert(
    //     date: Date,
    //     notes: string,
    //     products: Product[]
    // ) {
    //     try {

    //         const tempSells: Sell[] = [];
    //         const tempProducts: Sell[] = [];
    //         const newSell = new Sell(
    //             this.getNextId(),
    //             date,
    //             notes
    //         );

    //         for (let product of products) {
    //             const newProduct = new Product(
                    
    //             )
    //         }

    //         this.sells.push(newSell);
    //     } catch (err: any) {
    //         throw new Error(err.message);
    //     }
    // }

    // public update(productId: number, name: string, unitQuantity: number) {
    //     const productPosition = this.selectPosition(productId);

    //     if (productPosition == -1) throw new Error('Produto não encontrado');

    //     this.products[productPosition]!.setName(name);
    //     this.products[productPosition]!.setUnitValue(unitQuantity);
    // }

    // public delete(productId: number) {
    //     const productPosition = this.selectPosition(productId);

    //     if (productPosition == -1) throw new Error('Produto não encontrado');

    //     for (
    //         let counter = productPosition;
    //         counter < this.products.length;
    //         counter++
    //     ) {
    //         this.products[counter] = this.products[counter + 1];
    //     }

    //     this.products.length = this.products.length - 1;
    // }

    // private getNextId() {
    //     const lastProduct = this.products[this.products.length - 1];

    //     if (!lastProduct) return 1;

    //     return lastProduct.getProductId() + 1;
    // }

    // public selectPosition(productId: number) {
    //     let
    //         start = 0,
    //         end = 0,
    //         mid = 0;

    //     end = this.products.length - 1;

    //     while (start <= end) {
    //         mid = Math.floor((end + start) / 2);

    //         if (productId == this.products[mid].getProductId()) {
    //             return mid;
    //         }

    //         if (productId > this.products[mid].getProductId()) {
    //             start = mid + 1;
    //         } else {
    //             end = mid - 1;
    //         }
    //     }

    //     return -1;
    // }

    // public selectValue(productId: number) {
    //     const position = this.selectPosition(productId);

    //     if (position == -1) return null;

    //     return this.products[position];
    // }

    // public selectAll() {
    //     return this.products;
    // }
}
