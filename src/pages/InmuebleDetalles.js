
import EscenaSola from '../components/escenasola'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom";
// import {useHistory} from "react-router";
import CustomMenu from '../components/menu/menu';
import EscenaSave from './EscenaSave';
import ListarEscenas from './ListarEscenas';
import { useRecoilState } from 'recoil';
import state from '../state/state';

const InmuebleDetalles = (props) =>{
    const [properties] = useRecoilState(state);
    const location = useLocation();
    const propertyId=location.state.id;
    const property  = properties.find(val => val.id === propertyId)
    console.log(property)
    // console.log(location)
    console.log(properties)
    // console.log(location.state);//"any type"
    // let {search} = useLocation();
    // let query = new URLSearchParams(search);
    // console.log(query)

    // let start = query.get("inicio")

    // let history = useHistory();
    // console.log(history)


    // let history = useMemor();
    // console.log(history)



    


    // const [property, setProperty] = useState([]);
    // const [estado, setEstado] = useState({});
    // const [primeraVez, setPrimeraVez] = useState(true);


    // const getProperty = async ()=>{
    //     // const url='';
    //     // if (!primeraVez) {
    //     //   url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/${estado.id}`
    //     // }else{
    //     //   url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/${location.state.id}`
    //     //   // setEstado(location.state)
    //     //   // setPrimeraVez(false)
    //     // }
    //     const url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/${location.state.id}`
    //     try {
    //       const {data} = await axios.get(url)
    //       setProperty(data);
    //       // property= data;
    //     } catch (error) {
    //       console.log(error)
    //     }
    //     console.log("Prueba 4")
    //     // console.log(property.data)
    //     console.log(property)
      

    //   }
    
    
    //   useEffect( () => {
    //     getProperty();
    //     console.log("Esta es la propiedad " )
    //     console.log(property)

    //   });
    

    //Utiliza el hook useState
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true)
    }


    return (
      <div className="row">
        <CustomMenu></CustomMenu>
        <div class="col-9">
          <div>
            <h1>Estos son los detalles del inmueble</h1>
          </div>
          <div className="row">
            <li>{property.id}</li>
            <li>{property.name}</li>
            <li>{property.price}</li>
            <li>{property.createdDate}</li>
            <li>{property.description}</li>
            <li>{property.image}</li>
            {property.escenaResponseDtoList.length ===0 ? (
              <div>
                <h1>No hay escenas para mostrar </h1>
                <span> Desea agregar una escena ? .</span>
                <button className = "buttonProperty" onClick={() => handleButtonClick()}> 
                    {/* <Link to={`/InmuebleAEditar/`} state= {{id :property.id}}>Editar</Link> */}
                </button>
                {buttonClicked ? <EscenaSave inmuebleId={property.id}/> : null}
              </div>
            ) : (
              <div className="sin-titulo">
                <b>Las escenas son</b>
                {/* <FeedbackMessage message="No hemos recibido título" /> */}
                <EscenaSola
                  escenaCompleta={property.escenaResponseDtoList[0]}
                  escenas={property.escenaResponseDtoList}
                ></EscenaSola>
              </div>
            )}
            {/* <EscenaSola
              escenaCompleta={property.escenaResponseDtoList[0]}
              escenas={property.escenaResponseDtoList}
            ></EscenaSola> */}
          </div>
        </div>
      </div>
    );



}

export default InmuebleDetalles; 