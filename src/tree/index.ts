import { Element } from "./Element";
import { Tree } from "./Tree";

class App {
    public main() {
        const tree = new Tree(new Element(10));
        tree.insert(new Element(5));
        tree.insert(new Element(1));
        tree.insert(new Element(8));
        tree.insert(new Element(15));
        tree.insert(new Element(12));
        tree.insert(new Element(18));


        console.log(`The element 8 ${tree.search(8) ? 'exists' : 'do not exists'}`);
        console.log(`The element 10 ${tree.search(10) ? 'exists' : 'do not exists'}`);
        console.log(`The element 15 ${tree.search(15) ? 'exists' : 'do not exists'}`);
        console.log(`The element 12 ${tree.search(12) ? 'exists' : 'do not exists'}`);
        console.log(`The element 18 ${tree.search(18) ? 'exists' : 'do not exists'}`);
        console.log(`The element 1 ${tree.search(1) ? 'exists' : 'do not exists'}`);
        console.log(`The element 17 ${tree.search(17) ? 'exists' : 'do not exists'}`);
    }
}

const app = new App();

app.main();