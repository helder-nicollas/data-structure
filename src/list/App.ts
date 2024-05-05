import { DoublyLinkedList } from "./DoublyLinkedList";

class App {
    list;
    constructor() {
        this.list = new DoublyLinkedList();
    }


    main() {
        this.list.insert(20);
        this.list.insert(21);
        this.list.insert(22);    
        
        this.list.remove();

        this.list.print();        
    }
}


const app = new App();

app.main();

