import React from 'react';
import './App.css';
import Store from './Store/Store'


function App({products}) {
  return (
    <div className="App">
      <Store products={products}/>
    </div>
  );
}

export default App;
