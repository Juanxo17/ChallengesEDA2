export class Nodo {
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }esHoja (){
        if (this.derecha === null && this.izquierda === null ){
            return true;
        }
        else{
            return false;
        }
    }
}