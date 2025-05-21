import Nodo from './Nodo';

class Menu {
    constructor() {
        this.raiz = null;
    }    crearMenu(items) {
        this.raiz = new Nodo('Menú Principal');
        
        for (const item of items) {
            const nodoItem = new Nodo(item);
            this.raiz.agregarHijo(nodoItem);
        }
    }    agregarSubmenu(menuPadre, submenuItems) {
        const buscarNodo = (nodo, valor) => {
            if (nodo.valor === valor) {
                return nodo;
            }
            
            for (const hijo of nodo.hijos) {
                const encontrado = buscarNodo(hijo, valor);
                if (encontrado) {
                    return encontrado;
                }
            }
            
            return null;
        };
          const nodoPadre = buscarNodo(this.raiz, menuPadre);
        if (nodoPadre) {
            for (const submenu of submenuItems) {
                const nodoSubmenu = new Nodo(submenu);
                nodoPadre.agregarHijo(nodoSubmenu);
            }
        }
    }    dfs(nodo = this.raiz, resultado = []) {
        if (!nodo) return resultado;
        
        resultado.push(nodo);
        
        for (const hijo of nodo.hijos) {
            this.dfs(hijo, resultado);
        }
        
        return resultado;
    }
      bfs() {
        if (!this.raiz) return [];
        
        const resultado = [];
        const cola = [this.raiz];
        
        while (cola.length > 0) {
            const actual = cola.shift();
            resultado.push(actual);
            
            for (const hijo of actual.hijos) {
                cola.push(hijo);
            }
        }
        
        return resultado;
    }
}

export default Menu;
