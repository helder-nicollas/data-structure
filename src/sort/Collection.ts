export class Collection {
    public static bubbleSort(array: number[]) {
        let iteration = 0;
        let position = 0;
        let auxValue = 0;

        for (iteration = 0; iteration < array.length - 1; iteration++) {
            for (position = 0; position < array.length - iteration - 1; position++) {
                if (array[position] > array[position + 1]) {
                    auxValue = array[position];
                    array[position] = array[position + 1];
                    array[position + 1] = auxValue;
                }
            }
        }
    }

    public static selectionSort(array: number[]) {
        let iteration = 0,
            tinyPosition = 0,
            initialTinyPosition = 0,
            counter = 0,
            auxValue = 0;

        // [10, 5, 4, 6]

        // [4, 5, 10, 6]
        // [4, 5, 10, 6]
        // [4, 5, 6, 10]

        for (iteration = 0; iteration < array.length; iteration++) {
            initialTinyPosition = iteration;
            tinyPosition = initialTinyPosition + 1;
            for (counter = tinyPosition; counter < array.length; counter++) {
                if (array[counter] < array[tinyPosition]) {
                    tinyPosition = counter;
                }
            }
            if (
                array[tinyPosition] < array[initialTinyPosition]
            ) {
                auxValue = array[tinyPosition];
                array[tinyPosition] = array[initialTinyPosition];
                array[initialTinyPosition] = auxValue;
            }
            console.log(array);
        }
    }

    public static insertionSort(array: number[]) {
        let value = 0, iteration = 0, counter = 0;


        for (iteration = 1; iteration < array.length; iteration++) {
            value = array[iteration];
            for (
                counter = iteration - 1;
                (counter >= 0) && (array[counter] > value);
                counter--
            ) {
                array[counter + 1] = array[counter];
            }

            //counter is -1 here
            array[counter + 1] = value;
        }
    }

    private static partition(start: number, end: number, array: number[]) {
        let
            ref = 0,
            up = 0,
            down = 0,
            auxValue = 0;

        ref = array[start];
        up = end;
        down = start;


        while (down < up) {
            while (array[down] <= ref && down < end) down++;
            while (array[up] > ref) up--;

            if (down < up) {
                auxValue = array[down];
                array[down] = array[up];
                array[up] = auxValue;
            }
        }
        array[start] = array[up];
        array[up] = ref;
        return up;
    }

    public static quickSort(start: number, end: number, array: number[]) {
        let ref = 0;
        if (start >= end) return;
        ref = this.partition(start, end, array);
        this.quickSort(start, ref - 1, array);
        this.quickSort(ref + 1, end, array);
    }
}



const values = [10, 5, 4, 6];
Collection.quickSort(0, values.length - 1, values);
console.log(values);