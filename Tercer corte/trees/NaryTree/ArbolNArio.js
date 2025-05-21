import { Nodo } from "./Nodo";

export class ArbolNArio {
    constructor() {
        this.raiz = null;
    }

    agregarRaiz(valor) {
        this.raiz = new Nodo(valor);
        return this.raiz;
    }

    // DFS (Depth-First Search) - Recorrido en profundidad
    dfs(nodo = this.raiz) {
        if (!nodo) return [];
        
        let resultado = [nodo.valor];
        
        for (let hijo of nodo.hijos) {
            resultado = resultado.concat(this.dfs(hijo));
        }
        
        return resultado;
    }

    // BFS (Breadth-First Search) - Recorrido en anchura
    bfs() {
        if (!this.raiz) return [];
        
        const cola = [this.raiz];
        const resultado = [];
        
        while (cola.length > 0) {
            const actual = cola.shift();
            resultado.push(actual.valor);
            
            for (let hijo of actual.hijos) {
                cola.push(hijo);
            }
        }
        
        return resultado;
    }
}
