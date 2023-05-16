import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faHome } from "@fortawesome/free-solid-svg-icons";
import { RecoilRoot } from "recoil";
import Inmueble from "./pages/inmueble";
import Escenas from "./pages/escenas";
import SaveInmueble from "./pages/InmuebleSave";
import EscenaPrueba from "./pages/EscenaPrueba";
import EscenaPruebas from "./pages/escenasPruebas";
import ListarEscenas from "./pages/ListarEscenas";
import EditarInmueble from "./pages/EditarInmueble";
import InmuebleDetalles from "./pages/InmuebleDetalles";
import EscenaSave from "./pages/EscenaSave";
import HotSpotSave from "./pages/HotSpotSave";
import InmuebleAEditar from "./pages/InmuebleAEditar";
import EscenaAEditar from "./pages/EscenaAEditar";
import HotSpotAEditar from "./pages/HotSpotAEditar";

library.add(faPlus, faHome);

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/inmuebledescripcion" element={<Inmueble />}></Route>
          <Route path="/crearEscena" element={<h1>Escena a crear</h1>}></Route>
          <Route path="/escenas" element={<Escenas />}></Route>
          <Route path="/saveInmueble" element={<SaveInmueble />}></Route>
          <Route path="/escenasPruebas" element={<EscenaPruebas />}></Route>
          <Route
            path="/escenasPruebas/escenas/:escenaId"
            element={<EscenaPrueba />}
          ></Route>
          <Route path="/getEscenas" element={<ListarEscenas />}></Route>
          <Route path="/editInmueble" element={<EditarInmueble />}></Route>
          <Route
            path="/InmuebleDetalles"
            element={<InmuebleDetalles />}
          ></Route>
          <Route path="/escenaSave" element={<EscenaSave />}></Route>
          <Route path="/hotSpotSave" element={<HotSpotSave />}></Route>
          <Route path="/InmuebleAEditar" element={<InmuebleAEditar />}></Route>
          <Route path="/EscenaAEditar" element={<EscenaAEditar />}></Route>
          <Route path="/HotSpotAEditar" element={<HotSpotAEditar />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
