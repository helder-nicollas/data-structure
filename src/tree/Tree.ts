import { Element } from "./Element";

export class Tree {
    private value: Element | null;
    private left: Tree | null;
    private right: Tree | null;

    constructor(value: Element) {
        this.value = value;
        this.left = null;
        this.right = null;
        // console.log('This tree was created with element ' + value.getValue());
    }



    public isEmpty() {
        return (this.value == null);
    }



    public search(searchedValue: number): boolean {
        if (this.isEmpty()) return false;
        if (this.value?.getValue() == searchedValue) return true;

        if (searchedValue < this.value!.getValue()) {
            if (!this.left) return false;
            return this.left.search(searchedValue);
        }

        if (searchedValue > this.value!.getValue()) {
            if (!this.right) return false;
            return this.right.search(searchedValue);
        }

        return false;
    }

    public insert(newElement: Element) {
        if (this.isEmpty())
            return this.value = newElement;


        if (newElement.getValue() < this.value!.getValue()) {
            if (this.left) {
                this.left.insert(newElement);
            } else {
                this.left = new Tree(newElement);
                // console.log(`Element ${newElement.getValue()} has been added in left from ${this.value?.getValue()}`);
            }
        } else if (newElement.getValue() > this.value!.getValue()) {
            if (this.right) {
                this.right.insert(newElement);
            } else {
                this.right = new Tree(newElement);
                // console.log(`Element ${newElement.getValue()} has been added in righ t ${this.value?.getValue()}`);
            }
        }
    }


    public setValue(value: Element) {
        this.value = value;
    }

    public setLeft(tree: Tree | null) {
        this.left = tree;
    }

    public setRight(tree: Tree | null) {
        this.right = tree;
    }


    public getLeft() {
        return this.left;
    }

    public getRight() {
        return this.right;
    }

    public getValue() {
        return this.value;
    }
}