import { Element } from "./Element";
import { AvlTree } from "./avl-tree";

class App {
    public main() {
        const element = new Element(0);
        const tree = new AvlTree(new Element(10));
        tree.insert(new Element(5));
        tree.insert(new Element(1));
        tree.insert(new Element(8));
        tree.insert(new Element(15));
        tree.insert(new Element(12));
        tree.insert(new Element(18));


        console.log(`The element 8 ${tree.search(8) ? 'exists' : 'do not exists'}`);


        element.setValue(10);

        tree.remove(element);
        tree.printInOrder();
    }
}

const app = new App();

app.main();