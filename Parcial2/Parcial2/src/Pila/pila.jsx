export class Stack {
    constructor() {
        this.items = [];
    }

    push(...values) {
        this.items.push(...values);
    }

    pop() {
        return this.items.length > 0 ? this.items.pop() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }

    size() {
        return this.items.length;
    }

    print() {
        this.items.slice().reverse().forEach((item) => {
            console.log(item);
        });
    }
}