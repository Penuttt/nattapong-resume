import Navbar from './components/Navbar'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


//Contents
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Experience from './contents/Experience';
import Contact from './contents/Contact';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
