import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Planos from './components/pages/Planos'; 


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página Inicial */}
        <Route path="/login" element={<Login />} /> {/* Página de Login */}
        <Route path="/register" element={<Register />} />
        <Route path="/planos" element={<Planos />} /> 
      </Routes>
      <Footer />
    </>
  );
};

export default App;