import React from 'react';

import './App.css';
import './Components/Header.css';
import JsonForm from './Components/JsonForm';

function App() {
  return (
    <div>
      <div className='App'>
        <header className='header'>Eye Tracker</header>
      </div>
      <div>
        <JsonForm />
      </div>
    </div>
  );
}

export default App;
