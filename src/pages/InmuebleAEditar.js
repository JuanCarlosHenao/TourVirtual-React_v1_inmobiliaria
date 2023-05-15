
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [name,setName] = useState(property.name)
    const [price,setPrice] = useState(property.price)
    const [description,setDescription] = useState(property.description)
    const [image,setImage] = useState(property.image)

    const showToastMessage = () => {
      toast.success("Inmueble actualizado correctamente", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      });
    };
    
    const handleSubmit = e => {
      e.preventDefault();
      const body = {
        name:name,
        price: price,
        description: description,
        image: image
      }
      // if (name!=property.name) {
      //   body.name=name
      // }
      // if (price!=property.price) {
      //   body.price=price
      // }
      // if (description!=property.description) {
      //   body.description=description
      // }
      // if (image!=property.image) {
      //   body.image=image
      // }
      // showToastMessage()
      // mirar status 200 de la respuesta del axios y ahí enviar la notificación 
      console.log(body)
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:8080/inmobiliaria360/publicarInmueble',
      //   data:{

      //   }
      // });
      axios
      .put(`http://localhost:8080/inmobiliaria360/actualizarInmueble/${propertyId}`, 
      // .put(`http://localhost:8080/inmobiliaria360/actualizarInmueble/50`, 
        body
      )
      .then((response) => {
        if(response.status===200){
          showToastMessage()
        }else{
          console.log ("La petición no se envió de manera correcta")
        }
      });
      // .then(showToastMessage())
  }



    return (
      <div className="row">
        <CustomMenu></CustomMenu>
        <div class="col-9">
          <div>
            <h1>Estos son los detalles del inmueble a editar</h1>
          </div>
          <div className="row">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <label>Nombre</label>
              <input type="text" value = {name} onChange={e => setName(e.target.value)}></input>
              <label>Precio</label>
              <input type="text" value = {price} onChange={e => setPrice(e.target.value)}></input>
              <label>Descripción</label>
              <input type="text" value = {description} onChange={e => setDescription(e.target.value)}></input>
              <label>Imagen</label>
              <input type="text" value = {image} onChange={e => setImage(e.target.value)}></input>
              <button type="submit">Guardar cambios</button>
            </form>


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