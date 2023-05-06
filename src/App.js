
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import { Path } from 'three';
import Scene from './components/scena';

import Example from './pages/example';


import Inmueble from './pages/inmueble';
import Escenas from './pages/escenas';
import SaveInmueble from './pages/saveInmueble';

import EscenaPrueba from './pages/EscenaPrueba';
import EscenaPruebas from './pages/escenasPruebas';
import ListarEscenas from './pages/ListarEscenas';
import EditarInmueble from './pages/EditarInmueble';
import InmuebleAEditar from './pages/InmuebleAEditar'
import InmuebleDetalles from './pages/InmuebleDetalles'




function App() {


  return (
    <BrowserRouter>
        <Routes>
              <Route index element={<Home />}></Route>
              <Route path='/example' element={<Example/>} ></Route>
              <Route path='/inmuebledescripcion' element={<Inmueble/>} ></Route>
              <Route path='/crearEscena' element={<h1>Escena a crear</h1>} ></Route>
              <Route path='/escenas' element={<Escenas/>} ></Route>
              <Route path='/saveInmueble' element={<SaveInmueble/>} ></Route>
              <Route path='/escenasPruebas' element={<EscenaPruebas/>} ></Route>
              <Route path='/escenasPruebas/escenas/:escenaId' element={<EscenaPrueba/>} ></Route>
              <Route path='/getEscenas' element={<ListarEscenas/>} ></Route>
              <Route path='/editInmueble' element={<EditarInmueble/>} ></Route>
              <Route path='/InmuebleDetalles' element={<InmuebleDetalles/>} ></Route>


        </Routes>
    </BrowserRouter>
  );
}



export default App;


