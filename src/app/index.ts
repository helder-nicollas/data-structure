import promptSync from 'prompt-sync';
import { Database } from './database/database';
import { ProductMap } from './database/maps/product/product-map';
import { Product } from './domain/Product';
const prompt = promptSync({ sigint: false });


export class App {
    constructor(
        private database: ProductMap
    ) { }

    public start() {
        let choose = 0;
        while (choose != 5) {
            choose = Number(prompt(
                '1- Cadastrar produto\n2- Pesquisar Produto\n3- Deletar produto\n4- Listar produtos\n5- Sair\n'
            ));

            switch (choose) {
                case 1:
                    this.insert();
                    break;
                case 2:
                    this.search();
                    break;
                case 3:
                    this.delete();
                    break;
                case 4:
                    this.list();
                    break;
            }
        }
    }

    public insert() {
        const productName = prompt('Digite o nome do produto: ');
        const unitValue = prompt('Informe o valor unitário: ');

        const product = new Product(productName, Number(unitValue));
        this.database.put(product);
        console.log('Produto cadastrado com sucesso.');
    }

    public search() {
        const name = prompt('Digite o nome do produto: ');
        const product = this.database.get(name);

        if (!product) return console.log('Produto não encontrado!');

        console.log(product);
    }

    public list() {
        console.table(this.database.getAll());
    }

    public delete() {
        const name = prompt('Digite o nome do produto: ');
        const product = this.database.get(name);
        if (!product) return console.log('Produto não encontrado!');

        this.database.delete(name);
        console.log('Produto deletado com sucesso.');
    }
}


const database = new ProductMap(1);
const app = new App(database);

app.start();
