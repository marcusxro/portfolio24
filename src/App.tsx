import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Lenis from 'lenis'
import SelectedWork from './pages/SelectedWork';
import About from './pages/About';
import ScrollToTop from './comp/ScrollToTop';
import Contact from './pages/Contact';
import CafeEunoia from './pages/SelectedWorks/CafeEunoia';
import Riri from './pages/SelectedWorks/Riri';
import UlcTelesales from './pages/SelectedWorks/UlcTelesales';
import Pcup from './pages/SelectedWorks/Pcup';
import MelchoraIRS from './pages/SelectedWorks/MelchoraIRS';

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
      <ScrollToTop />
        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/SelectedWork/:workID' element={<SelectedWork />} />

          <Route path='/SelectedWork/cafeeunoia' element={<CafeEunoia />} />
          <Route path='/SelectedWork/ririswrs' element={<Riri />} />
          <Route path='/SelectedWork/ulctelesales' element={<UlcTelesales />} />
          <Route path='/SelectedWork/pcup' element={<Pcup />} />
          <Route path='/SelectedWork/melchorairs' element={<MelchoraIRS />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
