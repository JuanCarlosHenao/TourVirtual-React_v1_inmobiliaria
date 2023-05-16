import EscenaSola from "../components/escenasola";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomMenu from "../components/menu/menu";
import EscenaSave from "./EscenaSave";
import ListarEscenas from "./ListarEscenas";
import EscenaCardList from "../components/EscenaCardList";
import EscenaCard from "../components/EscenaCard";
import HotSpotCardList from "../components/HotSpotCardList";
import { useRecoilState } from "recoil";
import state from "../state/state";
import HotSpotSave from "./HotSpotSave";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const EscenaAEditar = (props) => {
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
  const navigate = useNavigate();

  const [properties] = useRecoilState(state);
  const location = useLocation();
  console.log(location);
  const propertyId = location.state.inmuebleId;
  const escenaId = location.state.id;
  console.log("la escenaId es ");
  console.log(escenaId);
  const property = properties.find((val) => val.id === propertyId);
  const escena = property.escenaResponseDtoList.find(
    (itemEscena) => itemEscena.id === escenaId
  );
  const escenas = property.escenaResponseDtoList;
  console.log(escena);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };
  const [inmueble_id, setInmuebleId] = useState(propertyId);
  const [title, setTitle] = useState(escena.title);
  const [image, setImage] = useState(escena.image);
  const [pitch, setPitch] = useState(escena.pitch);
  const [yaw, setYaw] = useState(escena.yaw);

  const showToastMessageSuccess = () => {
    toast.success("Escena actualizada correctamente", {
      position: toast.POSITION.TOP_CENTER,
      // onClose: async (propis) => {
      //   console.log("se cerró la notificación");
      //   // navigate("/");
      // },
      hideProgressBar: false,
      // onChange: console.log("cambió"),
    });
  };

  const showToastMessageError = () => {
    toast.error("Error actualizando escena", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      inmueble_id: inmueble_id,
      title: title,
      image: image,
      pitch: pitch,
      yaw: yaw,
    };

    console.log(body);

    axios
      .put(
        `http://localhost:8080/inmobiliaria360/inmueble/escena/actualizarEscena/${escenaId}`,
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
    <div className="row">
      <CustomMenu></CustomMenu>
      <div class="col-9">
        <div>
          <h1>Estos son los detalles de la escena a editar</h1>
        </div>
        <div className="row">
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="inmueble_id">Escoja el inmueble de la escena</label>
            <select id="inmueble_id" name="inmueble_id" onChange={handleChange}>
              {props.inmuebles.length === 0 ? (
                <div>
                  <h1>No hay inmuebles para escoger </h1>
                </div>
              ) : (
                props.inmuebles.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))
              )}
            </select> */}
            <label>Inmueble_id</label>
            <input
              type="text"
              value={inmueble_id}
              onChange={(e) => setInmuebleId(e.target.value)}
            ></input>
            <label>Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>Imagen</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
            <label>Pïtch</label>
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
            <button type="submit">Guardar cambios</button>
          </form>

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
};

export default EscenaAEditar;
