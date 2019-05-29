import React from 'react';
import FormCarousel from './Components/FormCarousel';
import './App.css';
import './Components/Header.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="header">Eye Tracker</header>
      </div>
      <div>
        <FormCarousel/>
      </div>
    </div>
  );
}

export default App;
