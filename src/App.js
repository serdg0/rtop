import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get('https://api.adminsite.appsinti.com/menu/product')
      .then(res => {
        
      })
  }, )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
