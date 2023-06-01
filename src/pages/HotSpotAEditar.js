import EscenaSola from "../components/escenasola";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomMenu from "../components/menu/menu";
import { useRecoilState } from "recoil";
import state from "../state/state";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HotSpotAEditar = (props) => {
  const [properties] = useRecoilState(state);
  const location = useLocation();
  console.log(location);
  const inmuebleId = location.state.inmuebleId;
  const escenaId = location.state.escenaId;
  const hotSpotId = location.state.id;
  console.log("el hotSpotId es ");
  console.log(hotSpotId);
  const property = properties.find((val) => val.id === inmuebleId);
  const escena = property.escenaResponseDtoList.find(
    (itemEscena) => itemEscena.id === escenaId
  );
  const hotSpot = escena.hotSpotResponseDtoList.find(
    (itemHotSpot) => itemHotSpot.id === hotSpotId
  );
  console.log(hotSpot);

  const [escena_id, setEscenaId] = useState(escenaId);
  const [name, setName] = useState(hotSpot.name);
  const [type, setType] = useState(hotSpot.type);
  const [pitch, setPitch] = useState(hotSpot.pitch);
  const [yaw, setYaw] = useState(hotSpot.yaw);
  const [cssClass, setCssClass] = useState(hotSpot.cssClass);
  const [nextScene, setNextScene] = useState(hotSpot.nextScene);

  const showToastMessageSuccess = () => {
    toast.success("Hotspot actualizado correctamente", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: false,
    });
  };

  const showToastMessageError = () => {
    toast.error("Error actualizando hotspot", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      escena_id: escena_id,
      name: name,
      type: type,
      pitch: pitch,
      yaw: yaw,
      cssClass: cssClass,
      nextScene: nextScene,
    };

    console.log(body);

    axios
      .put(
        `http://localhost:8080/inmobiliaria360/inmueble/escena/hotspot/updateHotSpot/${hotSpotId}`,
        body
      )
      .then((response) => {
        if (response.status === 200) {
          showToastMessageSuccess();
        }
      })
      .catch((err) => {
        console.log("La petición no se envió de manera correcta");
        console.log(err);
        showToastMessageError();
      });
  };

  return (
    <div className="App">
      <CustomMenu></CustomMenu>
      <div className="edit-page" style={{ height: "100vh" }}>
        <h1 className="edit-page-title">
          Estos son los detalles del hotSpot a editar
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="edit-form">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlFor="type">Type </label>
          <select
            id="type"
            name="type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="custom">custom</option>
            <option value="info">info</option>
          </select>
          <label>Pitch</label>
          <input
            type="text"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
          ></input>
          <label>Yaw</label>
          <input
            type="text"
            value={yaw}
            onChange={(e) => setYaw(e.target.value)}
          ></input>
          <label htmlFor="cssClass">Ingrese la cssClass del hotSpot </label>
          <select
            id="cssClass"
            name="cssClass"
            onChange={(e) => setCssClass(e.target.value)}
          >
            <option value="hotSpotElement">hotSpotElement</option>
            <option value="moveScene">moveScene</option>
          </select>
          <label htmlFor="nextScene">Ingrese la nextScene del hotSpot </label>
          <select
            id="nextScene"
            name="nextScene"
            onChange={(e) => setNextScene(e.target.value)}
          >
            {property.escenaResponseDtoList.length === 0 ? (
              <div>
                <h1>No hay escenas en el inmueble </h1>
              </div>
            ) : (
              ((<option value=""></option>),
              property.escenaResponseDtoList.map((item) => (
                <option value={item.id}>{item.title}</option>
              )))
            )}
          </select>
          <button type="submit" className="submit-edit-btn">
            Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotSpotAEditar;
