import EscenaSola from "../components/escenasola";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomMenu from "../components/menu/menu";
import EscenaSave from "./EscenaSave";
import ListarEscenas from "./ListarEscenas";
import { useRecoilState } from "recoil";
import state from "../state/state";

const InmuebleDetalles = (props) => {
  const [properties] = useRecoilState(state);
  const location = useLocation();
  const propertyId = location.state.id;
  const property = properties.find((val) => val.id === propertyId);
  console.log(property);
  // console.log(location)
  console.log(properties);
  // console.log(location.state);//"any type"

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="App">
      <CustomMenu></CustomMenu>
      <div className="inmueble-page">
        <div className="inmueble-container">
          {/* <h1>Estos son los detalles del inmueble</h1> */}

          <div className="inmueble-details">
            <p className="inmueble-name">{property.name.trim()}</p>
            <p>Descripción:{property.description}</p>
            <p className="inmueble-price">${property.price}</p>
            <button className="inmueble-edit-btn">
              <Link to={`/InmuebleAEditar/`} state={{ id: property.id }}>
                Editar
              </Link>
            </button>
          </div>
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
            <div className="scene-container">
              <b style={{ fontSize: "24px" }}>Tour virtual</b>
              {/* <FeedbackMessage message="No hemos recibido título" /> */}
              <EscenaSola
                escenaCompleta={property.escenaResponseDtoList[0]}
                escenas={property.escenaResponseDtoList}
              ></EscenaSola>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InmuebleDetalles;
