
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import { Path } from 'three';
import Scene from './components/scena';
import Inmueble from './pages/inmueble';



function App() {


  return (
    <BrowserRouter>
        <Routes>

              <Route index element={<Home />}></Route>
              <Route path='/about' component={<Inmueble/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}



export default App;


