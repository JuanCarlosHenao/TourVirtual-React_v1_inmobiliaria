
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
import HotSpotCardList from '../components/HotSpotCardList';
import { useRecoilState } from 'recoil';
import state from '../state/state';
import HotSpotSave from './HotSpotSave';

const EscenaAEditar = (props) =>{
    // const location = useLocation();
    // console.log(location.state);//"any type"

    // const [escena, setEscena] = useState([]);
    // const getEscenaByid = async ()=>{
    //     const url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/escena/escenaSola/${location.state.id}`
    //     let escena2 = []
    //     try {
    //       const {data} = await axios.get(url)
    //       escena2= data;
    //     } catch (error) {
    //       console.log(error)
    //     }
    //     console.log("Prueba 4")
    //     // console.log(property.data)
    //     console.log(escena2)
      
    //     setEscena(escena2);
    //   }
    
    
    //   useEffect( () => {
    //     getEscenaByid();
    //   }, []);
    

    // --------------------------------------------------------------------------

    const [properties] = useRecoilState(state);
    const location = useLocation();
    console.log(location)
    const propertyId=location.state.inmuebleId;
    const escenaId = location.state.id
    console.log ("la escenaId es ")
    console.log (escenaId)
    const property  = properties.find(val => val.id === propertyId)
    const escena = property.escenaResponseDtoList.find(itemEscena => itemEscena.id === escenaId)
    const escenas = property.escenaResponseDtoList
    // console.log(property)

    // console.log(properties)

    console.log(escena)


    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true)
    }

    return (
      <div className="row">
        <CustomMenu></CustomMenu>
        <div class="col-9">
          <div>
            <h1>Estos son los detalles de la escena a editar</h1>
          </div>
          <div className="row">
            <li>{escena.id}</li>
            <li>{escena.title}</li>
            <li>{escena.image}</li>
            <li>{escena.pitch}</li>
            <li>{escena.yaw}</li>
            {/* <HotSpotCardList hotspots = {escena.hotSpotResponseDtoList} escenaId = {escena.id} inmuebleId = {propertyId}></HotSpotCardList> */}
            <EscenaSola
              escenaCompleta={escena}
              escenas={property.escenaResponseDtoList}
            ></EscenaSola>
            {escena.hotSpotResponseDtoList.length === 0 ? (
              <div>
                <h1>No hay hotSpot para mostrar </h1>
                <span> Desea agregar un hotspot ? .</span>
                <button
                  className="buttonProperty"
                  onClick={() => handleButtonClick()}
                >
                  {/* <Link to={`/InmuebleAEditar/`} state= {{id :property.id}}>Editar</Link> */}
                </button>
                {buttonClicked ? (
                  <HotSpotSave escenaId={escena.id} escenas={escenas} />
                ) : null}
              </div>
            ) : (
              <div className="sin-titulo">
                <span> Desea agregar más hotspots a esta escena ? .</span>
                <button
                  className="buttonProperty"
                  onClick={() => handleButtonClick()}
                >
                  {/* <Link to={`/InmuebleAEditar/`} state= {{id :property.id}}>Editar</Link> */}
                </button>
                {buttonClicked ? (
                  <HotSpotSave escenaId={escena.id} escenas={escenas} />
                ) : null}
                <br></br>
                <b>Las hotspots son</b>
                <HotSpotCardList
                  hotspots={escena.hotSpotResponseDtoList}
                  escenaId={escena.id}
                  inmuebleId={propertyId}
                ></HotSpotCardList>
              </div>
            )}
          </div>
        </div>
      </div>
    );



}

export default EscenaAEditar; 