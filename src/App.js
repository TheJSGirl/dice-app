import React from 'react';
import './App.css';
import Dice from  './Dice';

function App() {
  return (
    <div className="App">
      <Dice face='five'/>
      <Dice face='two'/>
      <Dice face='three'/>
      <Dice face='four'/>
      <Dice face='six'/>

    </div>
  );
}

export default App;
