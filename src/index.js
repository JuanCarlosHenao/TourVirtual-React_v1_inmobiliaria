import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Inmueble from './pages/inmueble';
import Escenas from './pages/escenas';
import SaveInmueble from './pages/saveInmueble';

import EscenaPrueba from './pages/EscenaPrueba';
import EscenaPruebas from './pages/escenasPruebas';
import ListarEscenas from './pages/ListarEscenas';
import EditarInmueble from './pages/EditarInmueble';
import InmuebleAEditar from './pages/InmuebleAEditar'


const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Home/>,
            errorElement:<h1>Error</h1>,
            // Para rutas hijas 

        },
        {
            path:"/inmuebledescripcion",
            element:<Inmueble/>,
            errorElement:<h1>Error</h1>,
        },
        {
            path:"/crearEscena",
            element:<h1>Escena a crear</h1>,
            errorElement:<h1>Error</h1>,
        },
        {
            path:"/escenas",
            element:<Escenas/>,
            errorElement:<h1>Error</h1>,
        },
        {
            path:"/saveInmueble",
            element:<SaveInmueble/>,
            errorElement:<h1>Error</h1>,
        },
        {
            path:"/escenasPruebas",
            element:<EscenaPruebas/>,
            errorElement:<h1>Error en escenasPruebas</h1>,
            children:[
                {
                    path:"escenas/:escenaId",
                    // Vemos rutas dinámicas para mirar los elementos del contacto solo 
                    element:<EscenaPrueba/>,  // acá puede ir otro componente 
                },
            ],
        },
        {
            path:"/getEscenas",
            element:<ListarEscenas/>,
            errorElement:<h1>Error en ListarEscenas</h1>,
        },
        {
            path:"/editInmueble",
            element:<EditarInmueble/>,
            errorElement:<h1>Error en editInmueble</h1>,
        },
        
        {
            path:"/InmuebleAEditar/:inmuebleId",
            element:<InmuebleAEditar id={inmuebleId}/>,
            errorElement:<h1>Error en ListarEscenas</h1>,
        }
        


    ]

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>
);

reportWebVitals();
