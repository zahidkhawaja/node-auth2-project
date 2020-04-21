import React from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client</h1>
      </header>
      <Register />
      <Login/>
    </div>
  );
}

export default App;
