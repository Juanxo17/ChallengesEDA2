import { Nodo } from "../Node/Nodo";

export class ArbolBinario {

    constructor(){
        this.raiz = null;
    }    insertar (valor){
        const nuevoNodo = new Nodo (valor);

        if (!this.raiz){

            this.raiz = nuevoNodo;

            return;

        }

        let actual = this.raiz;


        while (true){

            if(valor<actual.valor){
                if(!actual.izquierda){
                    actual.izquierda = nuevoNodo;
                    return;
                }
                actual = actual.izquierda;
            }
            else{
                if(!actual.derecha){
                    actual.derecha = nuevoNodo;
                    return;
                }
                actual = actual.derecha;            }

        }

    }
    preOrden(Nodo = this.raiz){

        if (!Nodo){
            return ("No hay nodo raiz")
        }
        console.log(Nodo.valor);
        this.preOrden(Nodo.izquierda);
        this.preOrden(Nodo.derecha);

    }    enOrden (Nodo = this.raiz){
        if (!Nodo){
            return;
        }
        this.enOrden(Nodo.izquierda);
        console.log(Nodo.valor);
        this.enOrden(Nodo.derecha);
    }    postOrden(Nodo = this.raiz){
        if (!Nodo) return;
        this.postOrden(Nodo.izquierda);
        this.postOrden(Nodo.derecha);
        console.log(Nodo.valor);
    }

    buscar(valor, nodo = this.raiz) {
        if (!nodo) return false;
        
        if (nodo.valor === valor) {
            return true;
        }
        
        if (valor < nodo.valor) {
            return this.buscar(valor, nodo.izquierda);
        } else {
            return this.buscar(valor, nodo.derecha);
        }
    }
}