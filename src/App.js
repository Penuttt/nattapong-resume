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
          <Route path="/nattapong-resume/" element={<Home />} />
          <Route path="/nattapong-resume/about" element={<About />} />
          <Route path="/nattapong-resume/education" element={<Education />} />
          <Route path="/nattapong-resume/experience" element={<Experience />} />
          <Route path="/nattapong-resume/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
