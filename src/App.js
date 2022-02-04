import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    setMessage('¡Hello World! 😄') 
  },[])
  
  
  return (
    <div className="App">
      <div className="container">
        <h1>Hello World App</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
