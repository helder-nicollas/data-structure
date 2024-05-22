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

    public insertionSort() {
        let value = 0, iteration = 0, counter = 0;


        for (iteration = 1; iteration < this.values.length; iteration++) {
            value = this.values[iteration];
            for (
                counter = iteration - 1;
                (counter >= 0) && (this.values[counter] > value);
                counter--
            ) {
                this.values[counter + 1] = this.values[counter];
            }

            //counter is -1 here
            this.values[counter + 1] = value;
        }
    }

    public partition(start: number, end: number) {
        let
            ref = 0,
            up = 0,
            down = 0,
            auxValue = 0;


        ref = this.values[start];
        up = end;
        down = start;


        while (down < up) {
            while (this.values[down] <= ref && down < end) down++;

            while (this.values[up] > ref) up--;


            if (down < up) {
                auxValue = this.values[down];
                this.values[down] = this.values[up];
                this.values[up] = auxValue;
            }
        }
        this.values[start] = this.values[up];
        this.values[up] = ref;
        return up;
    }

    public quickSort(start: number, end: number) {
        let ref = 0;
        if (start > end) return;

        ref = this.partition(start, end);
        this.quickSort(start, ref - 1);
        this.quickSort(ref + 1, end);
    }

    public getValues() {
        return this.values;
    }

    public print() {
        console.log(this.values);
    }
}

const newCollection = new Collection();


const values = newCollection.getValues();
newCollection.quickSort(0, values.length -1);
newCollection.print();

