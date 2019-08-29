import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <p className="fixed">Fixed</p>
        <div className="square">
          <button>Click Here</button>
          <p id="absolute">Absolute</p>
        </div>
        <div className="floating">
          <p>Floating</p>
        </div>
    </div>
  );
}

export default App;
