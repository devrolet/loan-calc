import React from 'react';
import './App.css';
import Form from './components/Form.js';

import './normalize.css';
import './skeleton.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Loan Calculator</h1>
        </header>
        <div className="container">
          <Form />
        </div>
    </div>
  );
}

export default App;
