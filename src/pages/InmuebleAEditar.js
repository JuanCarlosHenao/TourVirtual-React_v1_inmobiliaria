import EscenaSola from "../components/escenasola";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomMenu from "../components/menu/menu";
import EscenaSave from "./EscenaSave";
import ListarEscenas from "./ListarEscenas";
import EscenaCardList from "../components/EscenaCardList";
import EscenaCard from "../components/EscenaCard";
import { useRecoilState } from "recoil";
import state from "../state/state";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const InmuebleAEditar = (props) => {
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
  const navigate = useNavigate();

  const [properties] = useRecoilState(state);
  const location = useLocation();
  console.log(location);
  const propertyId = location.state.propertyId;

  const [pageLoading, setPageLoading] = useState(true);
  const [property, setProperty] = useState(null);

  console.log(property);

  // const property = properties.find((val) => val.id === propertyId);
  // console.log(property);

  // // console.log(location)
  console.log(properties);

  const [buttonClicked, setButtonClicked] = useState(false);

  // const [name, setName] = useState(property.name);
  // const [price, setPrice] = useState(property.price);
  // const [description, setDescription] = useState(property.description);
  // const [image, setImage] = useState(property.image);

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (properties.length === 0) {
      navigate("/");
    } else {
      const property = properties.find((val) => val.id === propertyId);
      setProperty(property);
      setName(property.name);
      setPrice(property.price);
      setDescription(property.description);
      setImage(property.image);
      setPageLoading(false);
    }
  }, []);

  // const [pageHeight, setPageHeight] = useState("100%");

  // useLayoutEffect(() => {
  //   if (pageHeight === "100vh") {
  //     property.escenaResponseDtoList.length > 0
  //       ? setPageHeight("100%")
  //       : setPageHeight("100vh");
  //   } else {
  //     setPageHeight("100vh");
  //   }
  // }, [buttonClicked]);

  const handleButtonClick = () => {
    setButtonClicked((prev) => !prev);
  };

  const handleSceneAdded = () => {
    setButtonClicked(false);
  };

  const showToastMessageSuccess = () => {
    toast.success("Inmueble actualizado correctamente", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: false,
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
    toast.error("Error actualizando inmueble", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      price: price,
      description: description,
      image: image,
    };

    console.log(body);
    axios
      .put(
        `http://localhost:8080/inmobiliaria360/actualizarInmueble/${propertyId}`,
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
    // .then(showToastMessage())
  };

  return (
    <div className="App">
      <CustomMenu></CustomMenu>
      {/* <div className="edit-page" style={{ height: pageHeight }}> */}
      <div className="edit-page">
        {pageLoading ? (
          <>Loading...</>
        ) : (
          <>
            <h1 className="edit-page-title">
              Detalles básicos del inmueble a editar
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="edit-form">
              <label>Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label>Precio</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              <label>Descripción</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
              <label>Imagen</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
              <button type="submit" className="submit-edit-btn">
                Guardar cambios
              </button>
            </form>
            <div className="additional-edit-content">
              {property.escenaResponseDtoList.length === 0 ? (
                <>
                  <h4>No hay escenas para mostrar </h4>
                  <h5>¿Desea agregar una escena?</h5>
                </>
              ) : (
                <>
                  <h4>El inmueble tiene las siguientes escenas:</h4>
                  <EscenaCardList
                    escenas={property.escenaResponseDtoList}
                    inmuebleId={property.id}
                  ></EscenaCardList>
                  <h5>¿Desea agregar más escenas a este inmueble?</h5>
                </>
              )}
              <button
                className="submit-edit-btn"
                onClick={() => handleButtonClick()}
              >
                Agregar
              </button>
              {buttonClicked ? (
                <EscenaSave
                  inmuebleId={property.id}
                  onSave={handleSceneAdded}
                />
              ) : null}
            </div>
          </>
        )}

        {/* ---------------------------------------.............. */}
        {/* <h1 className="edit-page-title">
          Detalles básicos del inmueble a editar
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="edit-form">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Precio</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <label>Descripción</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <label>Imagen</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>
          <button type="submit" className="submit-edit-btn">
            Guardar cambios
          </button>
        </form>
        <div className="additional-edit-content">
          {property.escenaResponseDtoList.length === 0 ? (
            <>
              <h4>No hay escenas para mostrar </h4>
              <h5>¿Desea agregar una escena?</h5>
            </>
          ) : (
            <>
              <h4>El inmueble tiene las siguientes escenas:</h4>
              <EscenaCardList
                escenas={property.escenaResponseDtoList}
                inmuebleId={property.id}
              ></EscenaCardList>
              <h5>¿Desea agregar más escenas a este inmueble?</h5>
            </>
          )}
          <button
            className="submit-edit-btn"
            onClick={() => handleButtonClick()}
          >
            Agregar
          </button>
          {buttonClicked ? (
            <EscenaSave inmuebleId={property.id} onSave={handleSceneAdded} />
          ) : null}
        </div> */}
        {/* ---------------------------------------.............. */}
      </div>
    </div>
  );
};

export default InmuebleAEditar;
