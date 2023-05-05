import { Link } from "react-router-dom";
import CustomMenu from "../components/menu/menu";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Property from "../components/property/property";
import InmuebleDescripcion from "../components/inmueble_description";

const Inmueble = (props) => {
    const [propertiesItem, setPropertiesItem] = useState([]);
    const getPropertiesItem = async ()=>{
      const url = 'http://localhost:8080/inmobiliaria360/inmueble/inmueble/'
      let propertiesItem = []
      try {
        const {data} = await axios.get(url,{ params: { id: 2 }})
        propertiesItem= data;
      } catch (error) {
        console.log(error)
      }
      console.log("Prueba 1")
      console.log(propertiesItem.data)
      console.log(propertiesItem)
    
      setPropertiesItem(propertiesItem);
    }



    useEffect( () => {
      getPropertiesItem();
      // postInmueble();
    }, []);
    
    return (
 
      <div>
        <CustomMenu/>
        <InmuebleDescripcion propertiesItem={propertiesItem} ></InmuebleDescripcion>
      </div>
    );
  }
  
export default Inmueble;


