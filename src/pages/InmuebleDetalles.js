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
import { useNavigate } from "react-router-dom";

const InmuebleDetalles = (props) => {
  const [properties] = useRecoilState(state);
  const location = useLocation();
  const propertyId = location.state.id;
  const [pageLoading, setPageLoading] = useState(true);
  const [property, setProperty] = useState(null);

  // const property = properties.find((val) => val.id === propertyId);
  const navigate = useNavigate();
  console.log(property);
  // console.log(location)
  console.log(properties);
  // console.log(location.state);//"any type"

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const goToEditHandler = () => {
    navigate("/InmuebleAEditar/", { state: { propertyId } });
  };

  useEffect(() => {
    if (properties.length === 0) {
      navigate("/");
    } else {
      const property = properties.find((val) => val.id === propertyId);
      setProperty(property);
      setPageLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <CustomMenu></CustomMenu>
      <div className="inmueble-page">
        {pageLoading ? (
          <>Loading...</>
        ) : (
          <div className="inmueble-container">
            {/* <h1>Estos son los detalles del inmueble</h1> */}

            <div
              className="inmueble-details"
              style={{
                order: property.escenaResponseDtoList.length === 0 ? 0 : 2,
              }}
            >
              <p className="inmueble-name">{property.name.trim()}</p>
              <p>Descripción:{property.description}</p>
              <p className="inmueble-price">${property.price}</p>
              <button className="inmueble-edit-btn" onClick={goToEditHandler}>
                Editar
              </button>
            </div>
            {property.escenaResponseDtoList.length === 0 ? (
              <div>
                <h1 className="no-scenes-text">
                  Esta propiedad no tiene escenas para mostrar.
                </h1>
                <p className="add-scene-text">
                  Diríjase a editar propiedad para agregar escenas
                </p>
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
        )}
        {/* ----------------------------------------------------- */}
        {/* <div className="inmueble-container">
          <div
            className="inmueble-details"
            style={{
              order: property.escenaResponseDtoList.length === 0 ? 0 : 2,
            }}
          >
            <p className="inmueble-name">{property.name.trim()}</p>
            <p>Descripción:{property.description}</p>
            <p className="inmueble-price">${property.price}</p>
            <button className="inmueble-edit-btn" onClick={goToEditHandler}>
              Editar
            </button>
          </div>
          {property.escenaResponseDtoList.length === 0 ? (
            <div>
              <h1 className="no-scenes-text">
                Esta propiedad no tiene escenas para mostrar.
              </h1>
              <p className="add-scene-text">
                Diríjase a editar propiedad para agregar escenas
              </p>
              {buttonClicked ? <EscenaSave inmuebleId={property.id} /> : null}
            </div>
          ) : (
            <div className="scene-container">
              <b style={{ fontSize: "24px" }}>Tour virtual</b>
              <EscenaSola
                escenaCompleta={property.escenaResponseDtoList[0]}
                escenas={property.escenaResponseDtoList}
              ></EscenaSola>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default InmuebleDetalles;
