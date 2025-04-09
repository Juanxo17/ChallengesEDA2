// src/screens/StackScreen.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push, pop, selectStackItems, selectStackSize, clear } from '../features/stack/stackSlice';

function StackScreen() {
  const stackItems = useSelector(selectStackItems);
  const stackSize = useSelector(selectStackSize);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState('');

  const handlePush = () => {
    if (newItem) {
      dispatch(push(newItem));
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Pila Redux</h2>
      <p>Tamaño de la pila: {stackSize}</p>
      <ul>
        {stackItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Elemento a agregar"
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={() => dispatch(pop())} disabled={stackSize === 0}>Pop</button>
        <button onClick={() => dispatch(clear())} disabled={stackSize === 0}>Clear</button>
      </div>
    </div>
  );
}

export default StackScreen;