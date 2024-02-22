import React from 'react';
import { useEffect } from 'react';
import { getCurrentWeather } from '../api';

import "../styles/reset.css"
import "../styles/base.css"

function App() {
  useEffect(() => {
    getCurrentWeather()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
