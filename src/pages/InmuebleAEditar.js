
import EscenaSola from '../components/escenasola'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom";
import CustomMenu from '../components/menu/menu';
import EscenaSave from './EscenaSave';
import ListarEscenas from './ListarEscenas';

const InmuebleAEditar = (props) =>{
    const location = useLocation();
    console.log(location.state);//"any type"

    const [property, setProperty] = useState([]);
    const getProperty = async ()=>{
        const url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/${location.state.id}`
        let property = []
        try {
          const {data} = await axios.get(url)
          property= data;
        } catch (error) {
          console.log(error)
        }
        console.log("Prueba 4")
        // console.log(property.data)
        console.log(property)
      
        setProperty(property);
      }
    
    
      useEffect( () => {
        getProperty();
      }, []);
    

    return (
      <div className="row">
        <CustomMenu></CustomMenu>
        <div class="col-9">
          <div>
            <h1>Estos son los detalles del inmueble a editar</h1>
          </div>
          <div className='row'>
            <li>{property.id}</li>
            <li>{property.name}</li>
            <li>{property.price}</li>
            <li>{property.createdDate}</li>
            <li>{property.description}</li>
            <li>{property.image}</li>
            {/* <li>{property.escenaResponseDtoList[0].title}</li>
            <EscenaSola escenaCompleta={property.escenaResponseDtoList[0]}></EscenaSola> */}

          </div>
        </div>
      </div>
    );



}

export default InmuebleAEditar; 