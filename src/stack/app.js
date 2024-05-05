import { StackList } from "./stackList/StackList.js";
import { Stack } from "./stacks.js";


// Conversor de Inteiro para Binário.

class App {
    main() {
        const stack = new Stack();
    
        let number = 172;
        let rest = 0;

        while (number != 0) {
            rest = number % 2;
            stack.push(rest);
            number = Math.floor(number / 2);
        }

        while (!stack.isEmpty()) {
            console.log(stack.pop());
        }

    }
}



const app = new App();
app.main();