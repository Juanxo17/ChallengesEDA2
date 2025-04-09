// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CounterScreen from './screens/counterScreen';
import StackScreen from './screens/stackScreen';

function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
      <hr />
      <StackScreen />
    </Provider>
  );
}

export default App;