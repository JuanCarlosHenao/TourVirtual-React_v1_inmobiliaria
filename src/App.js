import Properties from './components/property/propertyList';
import CustomMenu from './components/menu/menu';
import Scene from './components/scena';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import dataScene from './components/dataScene';
import EscenaSola from './components/escenasola'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
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




    // MIO 
  // const getProperties = () =>{
  //   let properties = []
  //   axios({
  //     method:"GET",
  //     url:"http://127.0.0.1:8080/inmobiliaria360/inmuebles"
  //   }).then(    properties = axios());
  // }



  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await getProperties();
  //     setProperties(response)
  //     // ...
  //   }
  //   fetchData();
  // }, [properties]); // Or [] if effect doesn't need props or state


  // const url = "http://localhost:8080/inmobiliaria360/inmuebles"
  // React.useEffect(()=>{
  //   axios.get(url).then((response) => {
  //     setProperties(response.data);
  //   });
  // },[])



  // const getProperties = async ()=>{
  //   const url = 'http://127.0.0.1:8080/inmobiliaria360/inmuebles'
  //   let properties = []
  //   try {
  //     properties = await axios.get(url)
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   console.log("Prueba 1")
  //   console.log(properties.data)
  
  //   return { properties};
  // }



  // useEffect(async () => {
  //   setProperties(await getProperties())
  // }, [properties]);

  const postInmueble = () =>{
    axios({
      method: 'post',
      url: 'http://localhost:8080/inmobiliaria360/publicarInmueble',
      data: {
        name: "Finca La Ceja  - nueva ",
        price: 50.00,
        description: "Ubicado en La Ceja",
        image: "https://res.cloudinary.com/back-pragma/image/upload/v1681707044/tesis/Prueba1_m4xukw.jpg"
      }
    });
  }


/// -------------------------------------------------------------------------
  /// Ejempplo de consumo 

  // const url = "http://127.0.0.1:8080/inmobiliaria360/inmuebles";


  // const getInmuebles = () => {
  //   fetch(url)
  //     .then(response => response.json())
  //     // .then(data => console.log(data))
  //     .then(data => setProperties(data))
  //     .catch(error => console.log(error))
  // };


  // useEffect( () => {
  //   getInmuebles(url);
  //   postInmueble();
  // }, []);

/// -------------------------------------------------------------------------


  return (
    <div className="App">
      <div className='row'>
        <CustomMenu isSceneSelect={sceneSelected} resetPage={resetPage} ></CustomMenu>
        { sceneSelected  && (

          <EscenaSola escenaCompleta={dataScene[numberScene]}></EscenaSola>

        )}
        { !sceneSelected  && (
          <Properties properties={properties} handleClick={handleClick}></Properties>
        )}
      </div>
    </div>
  );
}



export default App;


