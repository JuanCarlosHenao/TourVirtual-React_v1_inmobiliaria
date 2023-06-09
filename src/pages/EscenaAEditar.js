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

  const [properties] = useRecoilState(state);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [pageLoading, setPageLoading] = useState(true);
  const [escena, setEscena] = useState(null);
  const [escenas, setEscenas] = useState(null);
  const [property, setProperty] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [pitch, setPitch] = useState(null);
  const [yaw, setYaw] = useState(null);

  const propertyId = location.state.inmuebleId;
  const escenaId = location.state.id;
  // console.log(propertyId);
  // console.log("la escenaId es ");
  // console.log(escenaId);
  // console.log(properties);
  // const property = properties.find((val) => val.id === propertyId);

  // console.log(property);
  // const escena = property.escenaResponseDtoList.find(
  //   (itemEscena) => itemEscena.id === escenaId
  // );
  // const escenas = property.escenaResponseDtoList;
  // console.log(escena);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const [inmueble_id, setInmuebleId] = useState(propertyId);
  // const [title, setTitle] = useState(escena.title);
  // const [image, setImage] = useState(escena.image);
  // const [pitch, setPitch] = useState(escena.pitch);
  // const [yaw, setYaw] = useState(escena.yaw);

  useEffect(() => {
    if (properties.length === 0) {
      navigate("/");
    } else {
      const property = properties.find((val) => val.id === propertyId);
      setProperty(property);

      const escena = property.escenaResponseDtoList.find(
        (itemEscena) => itemEscena.id === escenaId
      );
      setEscena(escena);
      setTitle(escena.title);
      setImage(escena.image);
      setPitch(escena.pitch);
      setYaw(escena.yaw);

      setEscenas(property.escenaResponseDtoList);
      setPageLoading(false);
      window.scrollTo(0, 0);
    }
  }, []);

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
    toast.onChange((payload) => {
      if (payload.status === "removed" && payload.type === toast.TYPE.SUCCESS) {
        // navigate(location.pathname);
        navigate("/");
      } else {
        return;
      }
    });
  };

  const showToastMessageError = () => {
    toast.error("Error actualizando escena", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleHotspotAdded = () => {
    setButtonClicked(false);
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
    <div className="App">
      <CustomMenu></CustomMenu>
      <div className="edit-page">
        {!pageLoading ? (
          <>
            <h1 className="edit-page-title">Detalles de la escena a editar</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="edit-form">
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
              <button type="submit" className="submit-edit-btn">
                Guardar cambios
              </button>
            </form>
            <div style={{ marginTop: "2rem", padding: "3rem" }}>
              <EscenaSola
                escenaCompleta={escena}
                escenas={property.escenaResponseDtoList}
              ></EscenaSola>
            </div>
            <div className="additional-edit-content">
              {escena.hotSpotResponseDtoList.length === 0 ? (
                <div>
                  <h4>No hay hotSpot para mostrar </h4>
                  <h5> Desea agregar un hotspot ? .</h5>
                </div>
              ) : (
                <div>
                  <h4>La escena tiene los siguientes hotspots:</h4>
                  <HotSpotCardList
                    hotspots={escena.hotSpotResponseDtoList}
                    escenaId={escena.id}
                    inmuebleId={propertyId}
                  ></HotSpotCardList>
                  <h5>¿Desea agregar más hotspots a esta escena?</h5>
                </div>
              )}
              <button
                className="submit-edit-btn"
                onClick={() => handleButtonClick()}
              >
                Agregar
              </button>
              {buttonClicked ? (
                <HotSpotSave
                  escenaId={escena.id}
                  onSave={handleHotspotAdded}
                  escenas={escenas}
                />
              ) : null}
            </div>
            {/* <h1 className="edit-page-title">Detalles de la escena a editar</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="edit-form">
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
          <button type="submit" className="submit-edit-btn">
            Guardar cambios
          </button>
        </form>
        <div style={{ marginTop: "2rem" }}>
          <EscenaSola
            escenaCompleta={escena}
            escenas={property.escenaResponseDtoList}
          ></EscenaSola>
        </div>
        <div className="additional-edit-content">
          {escena.hotSpotResponseDtoList.length === 0 ? (
            <div>
              <h4>No hay hotSpot para mostrar </h4>
              <h5> Desea agregar un hotspot ? .</h5>
            </div>
          ) : (
            <div>
              <h4>La escena tiene los siguientes hotspots:</h4>
              <HotSpotCardList
                hotspots={escena.hotSpotResponseDtoList}
                escenaId={escena.id}
                inmuebleId={propertyId}
              ></HotSpotCardList>
              <h5>¿Desea agregar más hotspots a esta escena?</h5>
            </div>
          )}
          <button
            className="submit-edit-btn"
            onClick={() => handleButtonClick()}
          >
            Agregar
          </button>
          {buttonClicked ? (
            <HotSpotSave
              escenaId={escena.id}
              onSave={handleHotspotAdded}
              escenas={escenas}
            />
          ) : null}
        </div> */}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default EscenaAEditar;
