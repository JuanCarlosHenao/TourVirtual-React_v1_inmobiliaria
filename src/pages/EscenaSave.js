import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";
import '../components/css/SaveInmueble.css';

const EscenaSave = (props) => {
    const [form,setForm]=useState({
        inmueble_id:props.inmuebleId,
        // price:"",
        // description:"",
        // image:"",
    });

    const handleChange = (e) =>{

      const { target } = e;
      const { name, value } = target;


      const newValues = {
        ...form,
        [name]: value,
      };
        setForm(newValues);
    }
    // preguntar si un handleClick me puede traer los datos ?
    const handleChecked = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    }  

    
    const handleSubmit = e => {
        e.preventDefault(); // Para que no se recargue cuando valido el formulario
        // alert("El formulario se ha enviado")
        // axios.post('http://localhost:8080/inmobiliaria360/publicarInmueble',{form})
        // .then(response => console.log(response))
        // .catch(err => console.log(err))
        axios({
          method: 'post',
          url: 'http://localhost:8080/inmobiliaria360/inmueble/escena/publicarEscena',
          data:form
        });

      
    }




    return (
      <div className="row">
        {/* <CustomMenu /> */}
        <div class="col-9">
          <div>
            <h1>Ingrese los datos de la escena a guardar</h1>
            <h1>Formulario</h1>
          </div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <label htmlFor="inmueble_id">
                Ingrese el id del inmueble de la escena{" "}
              </label>
              <input
                type="text"
                id="inmueble_id"
                name="inmueble_id"
                // value={form.inmueble_id}
                value = {props.inmuebleId}
                onChange={handleChange}
              ></input>

              <br></br>
              <label htmlFor="title">Ingrese el titulo de la escena </label>
              {/* en value sería el label al cual hago referencia ,sería la variable del hook ,
              e es la funcion que dispara el cambio de estado  */}
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="image">
                Ingrese la url de la imagen de la escena
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={form.image}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="pitch">Ingrese el pitch de la escena</label>
              <input
                type="text"
                id="pitch"
                name="pitch"
                value={form.pitch}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="yaw">Ingrese el yaw de la escena </label>
              <input
                type="text"
                id="yaw"
                name="yaw"
                value={form.yaw}
                onChange={handleChange}
              ></input>
              <br></br>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
export default EscenaSave;
