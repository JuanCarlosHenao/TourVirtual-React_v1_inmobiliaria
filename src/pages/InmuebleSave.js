import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SaveInmueble = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const showToastMessageSuccess = () => {
    toast.success("Inmueble agregado correctamente", {
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
    toast.error("Error agregando inmueble", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleChange = (e) => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Para que no se recargue cuando valido el formulario
    // alert("El formulario se ha enviado")
    // axios.post('http://localhost:8080/inmobiliaria360/publicarInmueble',{form})
    // .then(response => console.log(response))
    // .catch(err => console.log(err))
    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/inmobiliaria360/publicarInmueble",
    //   data: form,
    // });

    axios
      .post("http://localhost:8080/inmobiliaria360/publicarInmueble", form)
      .then((response) => {
        if (response.status === 201) {
          console.log(form);
          showToastMessageSuccess();
          // navigate("/");
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
      <CustomMenu />
      <div class="col-9">
        <ToastContainer />
        <div>
          <h1>Ingrese los datos del inmueble a guardar</h1>
          <h1>Formulario</h1>
        </div>
        <div className="row">
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
            <br></br>
            <label htmlFor="price">Ingrese el precio del inmueble</label>
            <input
              type="text"
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
            ></input>
            <br></br>
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
            <br></br>
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
            <br></br>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SaveInmueble;