import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Lenis from 'lenis'
import SelectedWork from './pages/SelectedWork';
import About from './pages/About';

const App: React.FC = () => {

  const lenis = new Lenis()

  lenis.on('scroll', (e: React.UIEvent<HTMLElement>) => {
  })
  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/About' element={<About />} />
          <Route path='/SelectedWork/:workID' element={<SelectedWork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
