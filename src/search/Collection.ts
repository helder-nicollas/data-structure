class Collection {
    private values = [10, 15, 17, 20, 32, 37, 39, 49, 58, 67, 98];

    public linearSearch(value: number) {
        for (let counter = 0; counter < this.values.length; counter++) {
            if (value == this.values[counter]) {
                return counter;
            }
        }
        return -1;
    }

    public binarySearch(value: number) {
        let start: number, end: number, mid: number;

        start = 0;
        end = this.values.length - 1;

        while (start <= end) {
            mid = Math.floor((start + end) / 2);

            if (value == this.values[mid]) {
                return mid;
            }

            if (value > this.values[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

        }

        return -1;
    }
}



const collection = new Collection();

console.log('Posição do valor 98: ' + collection.binarySearch(98));