import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from '../pages/home';

const Main = (props) => {
  return (
    <BrowserRouter>
        <Routes>

              <Route index element={<Home />}></Route>
              <Route path='/about' component={<SaveInmueble/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Main;