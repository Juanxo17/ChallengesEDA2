import { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import { ArbolBinario } from '../ArbolBinario/ArbolBinario';
import './App.css';

const convertTreeToD3Format = (node) => {
  if (!node) return null;
    return {
    name: node.valor.toString(),
    children: [
      node.izquierda ? convertTreeToD3Format(node.izquierda) : null,
      node.derecha ? convertTreeToD3Format(node.derecha) : null
    ].filter(Boolean)
  };
};

function App() {
  const [arbol, setArbol] = useState(new ArbolBinario());
  const [treeData, setTreeData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [traversalResults, setTraversalResults] = useState({
    inOrder: [],
    preOrder: [],
    postOrder: []
  });  const handleInsert = () => {
    if (inputValue.trim() === '') return;
    
    const value = parseInt(inputValue, 10);
    if (isNaN(value)) {
      alert('Por favor, ingrese un número válido');
      return;
    }    arbol.insertar(value);
    
    const newArbol = new ArbolBinario();
    newArbol.raiz = arbol.raiz;
    
    setArbol(newArbol);
    setInputValue('');
      updateTreeView(arbol);
    updateTraversalResults(arbol);
  };
  const handleSearch = () => {
    if (searchValue.trim() === '') return;
    
    const value = parseInt(searchValue, 10);
    if (isNaN(value)) {
      alert('Por favor, ingrese un número válido para buscar');
      return;
    }    const found = arbol.buscar(value);
      setSearchResult(found ? `El valor ${value} se encuentra en el árbol` : `El valor ${value} no se encuentra en el árbol`);
    setSearchValue('');
  };

  const updateTreeView = (tree) => {
    if (tree.raiz) {
      const d3Data = convertTreeToD3Format(tree.raiz);
      setTreeData(d3Data);
    }
  };
  const updateTraversalResults = (tree) => {
    const inOrder = [];
    const preOrder = [];
    const postOrder = [];

    const inOrderTraversal = (node) => {
      if (!node) return;
      inOrderTraversal(node.izquierda);
      inOrder.push(node.valor);
      inOrderTraversal(node.derecha);
    };    const preOrderTraversal = (node) => {
      if (!node) return;
      preOrder.push(node.valor);
      preOrderTraversal(node.izquierda);
      preOrderTraversal(node.derecha);
    };

    const postOrderTraversal = (node) => {
      if (!node) return;
      postOrderTraversal(node.izquierda);
      postOrderTraversal(node.derecha);
      postOrder.push(node.valor);
    };

    inOrderTraversal(tree.raiz);
    preOrderTraversal(tree.raiz);
    postOrderTraversal(tree.raiz);

    setTraversalResults({
      inOrder,
      preOrder,
      postOrder
    });
  };

  return (
    <div className="app-container">
      <h1>Challenge 14: Árbol Binario</h1>
      
      <div className="controls">
        <div className="insert-section">
          <h2>Insertar Valor</h2>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingrese un número"
          />
          <button onClick={handleInsert}>Insertar</button>
        </div>
        
        <div className="search-section">
          <h2>Buscar Valor</h2>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar un número"
          />
          <button onClick={handleSearch}>Buscar</button>
          {searchResult && <p className="search-result">{searchResult}</p>}
        </div>
      </div>
      
      <div className="traversal-results">
        <h2>Recorridos del Árbol</h2>
        <div className="traversal-types">
          <div>
            <h3>InOrder (En orden)</h3>
            <p>{traversalResults.inOrder.join(' → ')}</p>
          </div>
          <div>
            <h3>PreOrder (Pre orden)</h3>
            <p>{traversalResults.preOrder.join(' → ')}</p>
          </div>
          <div>
            <h3>PostOrder (Post orden)</h3>
            <p>{traversalResults.postOrder.join(' → ')}</p>
          </div>
        </div>
      </div>
      
      <div className="tree-container" style={{ width: '100%', height: '400px' }}>
        <h2>Visualización del Árbol</h2>
        {treeData ? (
          <Tree 
            data={treeData} 
            orientation="vertical"
            pathFunc="step"
            translate={{ x: 300, y: 50 }}
            separation={{ siblings: 2, nonSiblings: 2 }}
          />
        ) : (
          <p>El árbol está vacío. Inserte algunos valores para visualizarlo.</p>
        )}
      </div>
    </div>
  );
}

export default App;