import promptSync from 'prompt-sync';
import { Database } from './database/database';
import { ProductTable } from './database/tables/Product';
const prompt = promptSync({ sigint: false });


export class App {
//     constructor(
//         private database: Database
//     ) { }

//     public start() {
//         let choose = 0;
//         while (choose != 5) {
//             choose = Number(prompt(
//                 '1- Cadastrar produto\n2- Editar Produto\n3- Deletar produto\n4- Listar produtos\n5- Sair\n'
//             ));

//             switch (choose) {
//                 case 1:
//                     this.insert();
//                     break;
//                 case 2:
//                     this.update();
//                     break;
//                 case 3:
//                     this.delete();
//                     break;
//                 case 4:
//                     this.print();
//                     break;
//             }
//         }
//     }

//     public insert() {
//         const productName = prompt('Digite o nome do produto: ');
//         const unitQuantity = prompt('Informe o valor unitário: ');
//         this.database.insert(productName, Number(unitQuantity));
//     }

//     public update() {
//         const productId = Number(prompt('Informe o identificador do produto: '));
//         if (!productId || isNaN(productId))
//             return console.log('Identificador inválido!');

//         const productToUpdate = this.database.selectValue(productId);

//         if (!productToUpdate) return console.log('Produto não encontrado!');

//         const productName = prompt('Digite o novo nome do produto: ');
//         const unitQuantity = Number(prompt('Informe o novo valor unitário: '));
//         this.database.update(productId, productName, unitQuantity);
//     }

//     public delete() {
//         const productId = Number(prompt('Informe o identificador do produto: '));
//         if (!productId || isNaN(productId))
//             return console.log('Identificador inválido!');

//         const productToDelete = this.database.selectValue(productId);

//         if (!productToDelete) return console.log('Produto não encontrado!');

//         this.database.delete(productId);
//     }

//     public print() {
//         const products = this.getSortedProducts('UnitValue');
//         console.table(products);
//     }

//     public getSortedProducts(by: 'Name' | 'UnitValue') {
//         const products = this.database.selectAll();
//         let counter, value, iteration;


//         for (iteration = 0; iteration < products.length; iteration++) {
//             value = products[iteration];
//             for (
//                 counter = iteration - 1;
//                 (counter >= 0) && ((products[counter])[`get${by}`]() > value[`get${by}`]());
//                 counter--
//             ) {
//                 products[counter + 1] = products[counter];
//             }
//             products[counter + 1] = value;
//         }

//         console.log(products);

//         return products;
//     }
}


// const database = new Database();
// const app = new App(database);

// app.start();
