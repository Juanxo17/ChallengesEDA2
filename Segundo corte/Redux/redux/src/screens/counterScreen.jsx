// src/screens/CounterScreen.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, incrementByAmount, selectCount } from '../features/counter/counterSlice';

function CounterScreen() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState('');

  const handleIncrementBy = () => {
    if (incrementValue) {
      dispatch(incrementByAmount(incrementValue));
      setIncrementValue('');
    }
  };

  return (
    <div>
      <h2>Contador Redux</h2>
      <p>Valor actual: {count}</p>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <div>
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
          placeholder="Valor a incrementar"
        />
        <button onClick={handleIncrementBy}>Incrementar por valor</button>
      </div>
    </div>
  );
}

export default CounterScreen;