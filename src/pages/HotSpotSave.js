import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";
import '../components/css/SaveInmueble.css';
import Select from "react-select";

const HotSpotSave = (props) => {
    const [form,setForm]=useState({
        escena_id:props.escenaId
        // name:"",
        // price:"",
        // description:"",
        // image:"",
    });

    const handleChange = (e) =>{
      console.log({e})

      const { target } = e;
      console.log(e.target.name)
      console.log(e.target.value)
      const { name, value } = target;
      // console.log(name)
      // console.log(value)


      const newValues = {
        ...form,
        [name]: value,
      };
        setForm(newValues);
    }

    const handleSelect= (event) => {
      console.log(event)
      console.log(event.target)

      //   setForm({
      //     ...form,
      //     [event.target]: event.target.select,
      // });

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
      <div className="row">
        {/* <CustomMenu /> */}
        <div class="col-9">
          <div>
            <h1>Ingrese los datos del hotSpot a guardar</h1>
            <h1>Formulario</h1>
          </div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <label htmlFor="escena_id">
                Ingrese el id de la escena del hotspot{" "}
              </label>
              <input
                type="text"
                id="escena_id"
                name="escena_id"
                // value={form.escena_id}
                value={props.escenaId}
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
              <label htmlFor="type">Ingrese el type del hotspot</label>
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
              <label htmlFor="yaw">Ingrese el yaw del hotSpot </label>
              <input
                type="text"
                id="yaw"
                name="yaw"
                value={form.yaw}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="cssClass">Ingrese la cssClass del hotSpot </label>
              <input
                type="text"
                id="cssClass"
                name="cssClass"
                value={form.cssClass}
                onChange={handleChange}
              ></input>
              <br></br>
              <label htmlFor="nextScene">
                Ingrese la nextScene del hotSpot{" "}
              </label>
              {/* <input
                type="text"
                id="nextScene"
                name="nextScene"
                value={form.nextScene}
                onChange={handleChange}
              ></input> */}
              {/* <Select
                name = "nextScene"
                id="nextScene"
                options={props.escenas.map(item=>({label:item.title, value:item.id}))}
                onChange={handleSelect}
              
              >
                
              </Select> */}
              <select id="nextScene" name="nextScene" onChange={handleChange}>
                {props.escenas.length === 0 ? (
                  <div>
                    <h1>No hay escenas en el inmueble </h1>
                  </div>
                ) : (
                  props.escenas.map(item=>(
                    <option value={item.id}>{item.title}</option>
                  ))
                )}
              </select>
              <br></br>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
export default HotSpotSave;
