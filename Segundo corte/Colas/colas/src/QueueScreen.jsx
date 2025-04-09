
import React, { useState, useEffect } from 'react';
import { Queue } from './Queue'; 
import { Data } from './Data'; 

function QueueScreen() {
 
  const [queue] = useState(() => {
    const newQueue = new Queue();
    Data.forEach(person => newQueue.enqueue(person));
    return newQueue;
  });

  const [newName, setNewName] = useState('');
  const [newAmount, setNewAmount] = useState('');

  
  const handleAddPerson = (event) => {
    event.preventDefault(); 
    if (newName && newAmount) {
      const newPerson = { name: newName, amount: parseInt(newAmount) };
      queue.enqueue(newPerson);
      setNewName('');
      setNewAmount('');
    }
  };

  
  const [queueElements, setQueueElements] = useState(queue.items);

 
  useEffect(() => {
    setQueueElements([...queue.items]);
  }, [queue.items]); 

  return (
    <div>
      <h1>Cola del Cajero Automático</h1>

      {}
      <form onSubmit={handleAddPerson}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Cantidad a retirar:</label>
          <input
            type="number"
            id="amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />
        </div>
        <button type="submit">Agregar a la Cola</button>
      </form>

      <h2>Personas en la Cola:</h2>
      {queueElements.length === 0 ? (
        <p>La cola está vacía.</p>
      ) : (
        <ul>
          {queueElements.map((person, index) => (
            <li key={index}>
              {person.name} - Retiro: ${person.amount.toLocaleString('es-CO')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QueueScreen;