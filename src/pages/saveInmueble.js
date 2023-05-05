import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";

const SaveInmueble = () => {
    // const [nombre,setNombre]=useState("");
    // const [venta, setVenta]=useState("");
    // const [escena, setEscena]=useState("");
    // const [terminos,setTerminos]=useState(false);
    const [form,setForm]=useState({
        // name : '',
        // venta : '',
        // escenas : '',
        // terminos: '',
        name:"",
        price:"",
        description:"",
        image:"",
    });

    const handleChange = (e) =>{

      const { target } = e;
      const { name, value } = target;


      const newValues = {
        ...form,
        [name]: value,
      };

      
        // setForm({
        //     ...form,
        //     [e.target.name]:e.target.value,
        // });
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
          url: 'http://localhost:8080/inmobiliaria360/publicarInmueble',
          data:form
        });

      
    }




    return (
      //   <div>
      //     <CustomMenu/>
      //     <h1>Ingrese los datos del inmueble a guardar</h1>
      //     <h1>Formulario</h1>
      //     <form onSubmit={handleSubmit}>
      //         <label htmlFor="nombre_label">Nombre</label>
      //         {/* en value sería el label al cual hago referencia ,sería la variable del hook ,
      //         e es la funcion que dispara el cambio de estado  */}
      //         <input type="text" id="nombre" name = "nombre" value = {nombre} onChange={(e) => setNombre(e.target.value)} ></input>
      //         <p>Desea vender la casa ?</p>
      //         <label htmlFor="venta">Venta</label>
      //         <input type="radio" id="venta" name="ventaInmueble" value="venta2" onChange={(e) => setVenta(e.target.value)}></input>
      //         <p>Seleccione la escena que desea editar </p>

      //         <select name = "escena" onChange={(e) => setEscena(e.target.value)}>
      //             <option value = "sala">Sala</option>
      //             <option value = "comedor">Comedor</option>
      //             <option value = "cocina">Cocina</option>
      //             <option value = "baño">Baño</option>

      //         </select>
      //         <br></br>
      //         <label htmlFor="Terminos">Acepto terminos y condiciones </label>
      //         <input type="checkbox" id="terminos" name="terminos" onChange={(e) => setTerminos(e.target.checked)}></input>
      //         <input type="submit"></input>

      //     </form>
      //   </div>

      // --------------------------------------------------------------------------------
      <div>
        <CustomMenu />
        <h1>Ingrese los datos del inmueble a guardar</h1>
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Ingrese el nombre del inmueble </label>
          {/* en value sería el label al cual hago referencia ,sería la variable del hook ,
          e es la funcion que dispara el cambio de estado  */}
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="price">Ingrese el precio del inmueble</label>
          <input
            type="text"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
          ></input>
          <label htmlFor="description">
            Ingrese la descripcion del inmueble{" "}
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></input>
          <label htmlFor="image">
            Ingrese la url de la imagen principal del inmueble{" "}
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={form.image}
            onChange={handleChange}
          ></input>
          {/* <p>Desea vender la casa ?</p>
          <label htmlFor="venta">Venta</label>
          <input
            type="radio"
            id="venta"
            name="venta"
            value="ventaInmueble"
            onChange={handleChange}
          ></input>
          <p>Seleccione la escena que desea editar </p>

          <select name="escena" onChange={handleChange}>
            <option value="sala">Sala</option>
            <option value="comedor">Comedor</option>
            <option value="cocina">Cocina</option>
            <option value="baño">Baño</option>
          </select>
          <br></br>
          <label htmlFor="terminos">Acepto terminos y condiciones </label>
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            onChange={handleChecked}
          ></input> */}
          {/* <input type="submit"></input> */}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
  
export default SaveInmueble;
