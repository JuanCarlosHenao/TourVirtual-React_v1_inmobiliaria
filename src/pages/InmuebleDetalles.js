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
    <div className="row">
      <CustomMenu></CustomMenu>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "82%",
          height: "100vh",
          padding: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          {/* <h1>Estos son los detalles del inmueble</h1> */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              order: 2,
              listStyle: "none",
              alignSelf: "center",
              backgroundColor: "beige",
              padding: "1rem",
              borderRadius: "10px",
              width: "45%",
            }}
          >
            <p style={{ fontWeight: 700, fontSize: "24px" }}>
              {property.name.trim()}
            </p>
            <p>Descripción:{property.description}</p>
            <p style={{ fontWeight: 700, fontSize: "20px" }}>
              ${property.price}
            </p>
            <button
              style={{
                marginTop: "1rem",
                width: "5rem",
                backgroundColor: "rgb(4, 8, 63)",
                color: "white",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
              }}
            >
              <Link to={`/InmuebleAEditar/`} state={{ id: property.id }}>
                Editar
              </Link>
              {/* Editar */}
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
