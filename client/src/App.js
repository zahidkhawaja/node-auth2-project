import React, { useState } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [submit, setSubmit] = useState(false);
  const [username, setUsername] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client</h1>
      </header>
      <Register />
      <Login setSubmit = {setSubmit} submit = {submit} setUsername = {setUsername} />
      <Dashboard setSubmit = {setSubmit} submit = {submit} username = {username} setUsername = {setUsername} />
    </div>
  );
}

export default App;
