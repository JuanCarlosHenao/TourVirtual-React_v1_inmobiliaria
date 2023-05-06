
import EscenaSola from '../components/escenasola'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

const InmuebleAEditar = (props) =>{

    const [property, setProperty] = useState([]);

    // const getProperty = () =>{
    //     let property = []
        
    //     axios({
    //     method:"GET",
    //     url:`http://127.0.0.1:8080/inmobiliaria360/inmueble/${props.id}`
    //     }).then(setProperty(property = axios()));
    // }


    const getProperty = async ()=>{
        const url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/${props.id}`
        let property = []
        try {
          const {data} = await axios.get(url)
          property= data;
        } catch (error) {
          console.log(error)
        }
        console.log("Prueba Editar")
        // console.log(property.data)
        console.log(property)
      
        setProperty(property);
      }
    
    
      useEffect( () => {
        getProperty();
      }, []);
    

    return (
        <div>
            <EscenaSola escenaCompleta={property[0].escenaResponseDtoList[0]}></EscenaSola>
        </div>
        
    );



}

export default InmuebleAEditar; 