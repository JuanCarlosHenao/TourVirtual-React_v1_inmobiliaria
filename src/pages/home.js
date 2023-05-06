import Properties from '../components/property/propertyList';
import CustomMenu from '../components/menu/menu';
// import Scene from '../components/scena';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import dataScene from '../components/dataScene';
import EscenaSola from '../components/escenasola'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import FormSaveInmueble from '../components/FormSaveInmueble'

function Home() {
  const [sceneSelected, setSceneSelected] = useState(false);
  const [numberScene, setNumberScene] = useState(0);
  const [properties, setProperties] = useState([]);
  

  const handleClick = (id) => {

    console.log('oe---');
    console.log(id);
    setSceneSelected(true);
    setNumberScene(id);
  };

  const resetPage = () => {
    setSceneSelected(false);
    setNumberScene(0);
  };

  const getProperties = async ()=>{
    const url = 'http://127.0.0.1:8080/inmobiliaria360/inmuebles'
    let properties = []
    try {
      const {data} = await axios.get(url)
      properties= data;
    } catch (error) {
      console.log(error)
    }
    console.log("Prueba 1")
    console.log(properties.data)
    console.log(properties)
  
    setProperties(properties);
  }



  useEffect( () => {
    getProperties();
    // postInmueble();
  }, []);


  return (
    <div className="App">
      <div className='row'>
{/* 
        <CustomMenu isSceneSelect={sceneSelected} resetPage={resetPage} ></CustomMenu>
        { sceneSelected  && (

          <EscenaSola escenaCompleta={dataScene[numberScene]}></EscenaSola>

        )}
        { !sceneSelected  && (
          <Properties properties={properties} handleClick={handleClick}></Properties>
        )}
        */}
        <CustomMenu></CustomMenu>

        <Properties properties={properties} handleClick={handleClick}></Properties>        

      </div>
      {/* esto es para las rutas hijas del home  */}
      {/* <div>
        <Outlet>
            
        </Outlet>
      </div> */}




    </div>
  );
}



export default Home;


