import React, { useState } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [submit, setSubmit] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div className = "header">
        <h1>Client</h1>
        <button className = "logout">Log Out</button>
        </div>
      </header>
      <Register />
      <Login setSubmit = {setSubmit} submit = {submit} />
      <Dashboard submit = {submit} />
    </div>
  );
}

export default App;
