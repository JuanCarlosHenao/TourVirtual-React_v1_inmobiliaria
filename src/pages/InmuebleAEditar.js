
import EscenaSola from '../components/escenasola'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom";
import CustomMenu from '../components/menu/menu';
import EscenaSave from './EscenaSave';
import ListarEscenas from './ListarEscenas';
import EscenaCardList from '../components/EscenaCardList';
import EscenaCard from '../components/EscenaCard';
import { useRecoilState } from 'recoil';
import state from '../state/state';

const InmuebleAEditar = (props) =>{
    // const location = useLocation();
    // console.log(location.state);//"any type"

    // const [property, setProperty] = useState([]);
    // const getProperty = async ()=>{
    //     const url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/${location.state.id}`
    //     let property = []
    //     try {
    //       const {data} = await axios.get(url)
    //       property= data;
    //     } catch (error) {
    //       console.log(error)
    //     }
    //     console.log("Prueba 4")
    //     // console.log(property.data)
    //     console.log(property)
      
    //     setProperty(property);
    //   }
    
    
    //   useEffect( () => {
    //     getProperty();
    //   }, []);
    
    // ----------------------------------------------------------------

    const [properties] = useRecoilState(state);
    const location = useLocation();
    const propertyId=location.state.id;
    const property  = properties.find(val => val.id === propertyId)
    console.log(property)
    // console.log(location)
    console.log(properties)


    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true)
    }

    return (
      <div className="row">
        <CustomMenu></CustomMenu>
        <div class="col-9">
          <div>
            <h1>Estos son los detalles del inmueble a editar</h1>
          </div>
          <div className="row">
            <li>{property.id}</li>
            <li>{property.name}</li>
            <li>{property.price}</li>
            <li>{property.createdDate}</li>
            <li>{property.description}</li>
            <li>{property.image}</li>
            {/* <EscenaCardList escenas={property.escenaResponseDtoList} inmuebleId = {property.id}></EscenaCardList> */}
            {property.escenaResponseDtoList.length === 0 ? (
              <div>
                <h1>No hay escenas para mostrar </h1>
                <span> Desea agregar una escena ? .</span>
                <button
                  className="buttonProperty"
                  onClick={() => handleButtonClick()}
                >
                  {/* <Link to={`/InmuebleAEditar/`} state= {{id :property.id}}>Editar</Link> */}
                </button>
                {buttonClicked ? <EscenaSave inmuebleId={property.id} /> : null}
              </div>
            ) : (
              <div className="sin-titulo">
                <span> Desea agregar más escenas a este inmueble ? .</span>
                <button
                  className="buttonProperty"
                  onClick={() => handleButtonClick()}
                >
                  {/* <Link to={`/InmuebleAEditar/`} state= {{id :property.id}}>Editar</Link> */}
                </button>
                {buttonClicked ? <EscenaSave inmuebleId={property.id} /> : null}
                <br></br>
                <b>Las escenas son</b>
                <EscenaCardList
                  escenas={property.escenaResponseDtoList}
                  inmuebleId={property.id}
                ></EscenaCardList>
              </div>
            )}
          </div>
        </div>
      </div>
    );



}

export default InmuebleAEditar; 