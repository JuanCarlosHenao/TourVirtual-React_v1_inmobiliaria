import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";
import '../components/css/SaveInmueble.css';

const HotSpotSave = () => {
    const [form,setForm]=useState({
        // name:"",
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
          url: 'http://localhost:8080/inmobiliaria360/inmueble/escena/hotspot/savehotspot',
          data:form
        });

      
    }




    return (

      <div className='row'>
        <CustomMenu />
        <div class='col-9'>
          <div>
            <h1>Ingrese los datos del hotSpot a guardar</h1>
            <h1>Formulario</h1>
          </div>
          <div className='row'>

            <form onSubmit={handleSubmit}>
            <label htmlFor="escena_id">
                Ingrese el id de la escena del hotspot {" "}
              </label>
              <input
                type="text"
                id="escena_id"
                name="escena_id"
                value={form.escena_id}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="name">Ingrese el nombre del hotspot </label>
              {/* en value sería el label al cual hago referencia ,sería la variable del hook ,
              e es la funcion que dispara el cambio de estado  */}
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="type">
                Ingrese el type del hotspot
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="pitch">Ingrese el pitch del hotspot</label>
              <input
                type="text"
                id="pitch"
                name="pitch"
                value={form.pitch}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="yaw">
                Ingrese el yaw del hotSpot {" "}
              </label>
              <input
                type="text"
                id="yaw"
                name="yaw"
                value={form.yaw}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="cssClass">
                Ingrese la cssClass del hotSpot {" "}
              </label>
              <input
                type="text"
                id="cssClass"
                name="cssClass"
                value={form.cssClass}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="nextScene">
                Ingrese la nextScene del hotSpot {" "}
              </label>
              <input
                type="text"
                id="nextScene"
                name="nextScene"
                value={form.nextScene}
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
  
export default HotSpotSave;
