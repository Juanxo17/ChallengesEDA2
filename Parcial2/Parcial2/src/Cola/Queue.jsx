export class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(...values) {
        this.items.push(...values); // Permite agregar múltiples elementos
    }

    dequeue() {
        return this.items.length > 0 ? this.items.shift() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[0] : null;
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        this.items.forEach((item, index) => {
            console.log(`Elemento ${index}: ${item}`);
        });
    }
}