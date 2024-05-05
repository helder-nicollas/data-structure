import { Queue } from "./Queue.js";

class App {
    main() {
        let queue = new Queue();

        queue.insert(10);
        queue.insert(11);
        queue.insert(12);
        queue.insert(13);
        queue.insert(14);
        console.log(queue.isFull())

        while (!queue.isEmpty()) {
            console.log(queue.remove());
            console.log(queue.getValues());
        }

    }
}

const app = new App();

app.main();
