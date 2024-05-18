export class Collection {
    private values = [25, 57, 48, 37, 12, 92, 33];

    public sort() {
        let counter = 0;

        for (let control01 = 0; control01 < this.values.length; control01++) {
            for (let control02 = 0; control02 < this.values.length; control02++) {
                if (this.values[control01] < this.values[control02]) {
                    let auxControl = this.values[control01];
                    this.values[control01] = this.values[control02];
                    this.values[control02] = auxControl;
                }
            }
        }
    }


    public bubbleSort() {
        let iteration = 0;
        let position = 0;
        let auxValue = 0;

        for (iteration = 0; iteration < this.values.length - 1; iteration++) {
            for (position = 0; position < this.values.length - iteration - 1; position++) {
                if (this.values[position] > this.values[position + 1]) {
                    auxValue = this.values[position];
                    this.values[position] = this.values[position + 1];
                    this.values[position + 1] = auxValue;
                }
            }
        }
    }

    public selectionSort() {
        let iteration = 0,
            tinyPosition = 0,
            initialTinyPosition = 0,
            counter = 0,
            auxValue = 0;

        for (iteration = 0; iteration < this.values.length; iteration++) {
            initialTinyPosition = iteration;
            tinyPosition = iteration + 1;
            for (counter = initialTinyPosition + 1; counter < this.values.length; counter++) {
                if (this.values[counter] < this.values[tinyPosition]) {
                    tinyPosition = counter;
                }
            }
            if (
                this.values[tinyPosition] < this.values[initialTinyPosition]
            ) {
               auxValue = this.values[tinyPosition];
               this.values[tinyPosition] = this.values[initialTinyPosition];
               this.values[initialTinyPosition] = auxValue; 
            }
        }
    }

    public print() {
        console.log(this.values);
    }
}

const newCollection = new Collection();


newCollection.selectionSort();
newCollection.print();

