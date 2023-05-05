import { Link } from "react-router-dom";
import CustomMenu from "../components/menu/menu"
import GetEscenas from "../components/getEscenas"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dataScene from '../components/dataScene';
import escenaPruebas from "./escenasPruebas";





const Escenas = () => {
    const [scenes, setScenes] = useState([]);

    const getScenes = async ()=>{
        const url = 'http://localhost:8080/inmobiliaria360/inmueble/escena/escenas'
        let scenes = []
        try {
          const {data} = await axios.get(url)
          scenes= data;
        } catch (error) {
          console.log(error)
        }
        console.log("Prueba 1")
        console.log(scenes.data)
        console.log(scenes)
      
        setScenes(scenes);
      }
    
    
    
      useEffect( () => {
        getScenes();
        // postInmueble();
      }, []);
    

    return (
      // <div className="row">
      //   <div>
      //     <CustomMenu />
      //     <GetEscenas scenes={scenes}>Estas son las escenas</GetEscenas>
      //   </div>
      // </div>
      scenes
    );

  }


  
  export default Escenas;
