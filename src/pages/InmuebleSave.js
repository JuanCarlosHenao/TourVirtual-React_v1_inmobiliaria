import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../components/css/SaveInmueble.css";

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
      hideProgressBar: false,
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
    setForm(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Para que no se recargue cuando valido el formulario
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
    <div className="App">
      <CustomMenu />
      <div className="add-inmueble-page">
        <ToastContainer />
        <h1 className="add-inmueble-title">
          Ingrese los datos del inmueble a guardar
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label htmlFor="name" className="add-inmueble-label">
            Nombre
          </label>
          {/* en value sería el label al cual hago referencia ,sería la variable del hook ,
              e es la funcion que dispara el cambio de estado  */}
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="add-inmueble-input"
            placeholder="Nombre del inmueble"
          ></input>
          <br></br>
          <label htmlFor="price" className="add-inmueble-label">
            Precio
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="add-inmueble-input"
            placeholder="Precio del inmueble"
          ></input>
          <br></br>
          <label htmlFor="description" className="add-inmueble-label">
            Descripcion
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="add-inmueble-input"
            placeholder="Descripción del inmueble"
          ></input>
          <br></br>
          <label htmlFor="image" className="add-inmueble-label">
            URL de la imagen principal
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="add-inmueble-input"
            placeholder="Imagen del inmueble"
          ></input>
          <br></br>
          <button className="add-inmueble-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SaveInmueble;
