import React from 'react';
import './App.css';
import Store from './Store/Store'

// https://fonts.google.com/icons?selected=Material%20Icons%3Aview_list
// https://fonts.google.com/icons?selected=Material%20Icons%3Aview_module

function App({products}) {
  return (
    <div className="App">
      <Store products={products}/>
    </div>
  );
}

export default App;
