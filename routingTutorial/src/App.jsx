// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/about.jsx';
import Contact from './components/Contact.jsx';

import Feature from './components/Features.jsx';
const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="navbar-link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
            <li>
              <Link to ="/features" className='navbar-link'>Features</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/features" element={<Feature />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
