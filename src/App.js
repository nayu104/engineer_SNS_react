import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login_github';
import Callback from './Callback';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
