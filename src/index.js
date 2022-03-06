import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import About from './Routes/About';
import Contact from './Routes/Contact';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
