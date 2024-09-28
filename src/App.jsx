// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import BeSeller from './Pages/BeSeller';
import Login from './Pages/Login';
import Market from './Pages/Market';
import Purches from './Pages/Purches';
import Scheme from './Pages/Scheme';  
import Signup from './Pages/Signup';
import About from './Pages/About';
import Store from './Pages/Store';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/purches" element={<Purches />} />
        <Route path="/scheme" element={<Scheme />} />
        <Route path="/beseller" element={<BeSeller />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Scheme" element={<Scheme />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </Router>
  );
};

export default App;
