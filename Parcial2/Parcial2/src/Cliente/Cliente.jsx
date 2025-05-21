import { Stack } from '../Pila/pila';
import { Queue } from '../Cola/Queue';

export class Cliente {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.reclamos = new Stack();
        this.consultas = new Queue();
    }
}