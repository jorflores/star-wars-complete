import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from './components/All';
import Add from './components/Add';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}   />
        <Route path="/all" element={<All />}   />
        <Route path="/add" element={<Add />}   />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
