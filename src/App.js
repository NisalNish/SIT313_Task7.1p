// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main Page with DevDeakin, search bar, and buttons */}
        <header className="main-header">
          <h1 className="devdeakin">DevDeakin</h1>
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="buttons-container">
            <button className="post-button">Post</button>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
