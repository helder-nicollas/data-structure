import { Data } from "./Data";
import { HashMap } from "./HashMap";

export class App {
    public main() {
        const data01 = new Data(987, 'Fulano de tal'),
            data02 = new Data(787, 'Nicollas'),
            data03 = new Data(458, 'Helder'),
            data04 = new Data(572, 'Matheus'),
            data05 = new Data(887, 'João'),
            data06 = new Data(987, 'Carlos');

        const hashMap = new HashMap();

        hashMap.put(data01);
        hashMap.put(data02);
        hashMap.put(data03);
        hashMap.put(data04);
        hashMap.put(data05);
        hashMap.put(data06);

        console.log(JSON.stringify(hashMap.get(887), null, 2));
    }
}

const app = new App();
app.main();