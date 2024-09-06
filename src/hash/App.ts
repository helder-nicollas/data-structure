import { Data } from "./Data";
import { HashMap } from "./HashMap";

export class App {
    public main() {
        const data01 = new Data(987, 'Fulano de tal'),
              data02 = new Data(787, 'Nicollas'),
              data03 = new Data(458, 'Helder'),
              data04 = new Data(572, 'Matheus');

        const hashMap = new HashMap();

        hashMap.put(data01);
        hashMap.put(data02);
        hashMap.put(data03);
        hashMap.put(data04);

        console.log(hashMap.get(2032).getValue());
    }
}

const app = new App();


app.main();