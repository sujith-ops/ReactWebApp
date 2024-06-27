import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Photography from './components/pages/Photography';
import Catering from './components/pages/Catering';
import EventPlanning from './components/pages/EventPlanning';
import Venues from './components/pages/Venues';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/catering' element={<Catering/>} />
          <Route path='/event-planning' element={<EventPlanning/>} />
          <Route path='/venues' element={<Venues/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;