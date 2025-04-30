import { Element } from "./Element";

export class AvlTree {
    private value: Element | null;
    private left: AvlTree | null;
    private right: AvlTree | null;

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
                this.left = new AvlTree(newElement);
                // console.log(`Element ${newElement.getValue()} has been added in left from ${this.value?.getValue()}`);
            }
        } else if (newElement.getValue() > this.value!.getValue()) {
            if (this.right) {
                this.right.insert(newElement);
            } else {
                this.right = new AvlTree(newElement);
                // console.log(`Element ${newElement.getValue()} has been added in righ t ${this.value?.getValue()}`);
            }
        }
    }


    public remove(element: Element) {
        if (this.value!.getValue() === element.getValue()) {
            if (this.left == null && this.right == null)
                return null;

            if (this.left && this.right == null)
                return this.left;


            if (this.right && this.left == null)
                return this.right;


            let auxNode = this.left;

            while (auxNode?.right != null) {
                auxNode = auxNode.right;
            }

            this.value = auxNode!.getValue();
            auxNode?.setValue(element);
            this.left = this.left!.remove(element);
        } else {
            
            if (element.getValue() < this.value!.getValue())
                this.left = this.left!.remove(element);

            else if (element.getValue() > this.value!.getValue())
                this.right = this.right!.remove(element);

        }
        return this;
    }


    public printInOrder() {
        if (!this.isEmpty()) {
            if (this.left !== null) {
                this.left.printInOrder();
            }
            console.log(this.value?.getValue(), ' ');
            if (this.right !== null) {
                this.right.printInOrder();
            }
        }
    }


    public printTree() {
        
    }

    public toString() {
        return `[${this.value?.getValue()}]`;
    }


    public setValue(value: Element) {
        this.value = value;
    }

    public setLeft(tree: AvlTree | null) {
        this.left = tree;
    }

    public setRight(tree: AvlTree | null) {
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