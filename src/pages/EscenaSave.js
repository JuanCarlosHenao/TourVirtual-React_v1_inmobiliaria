import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EscenaSave = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    inmueble_id: props.inmuebleId,
  });

  const showToastMessageSuccess = () => {
    toast.success("Escena agregada correctamente", {
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
    toast.error("Error agregando escena", {
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
      .post(
        "http://localhost:8080/inmobiliaria360/inmueble/escena/publicarEscena",
        form
      )
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
    <form onSubmit={handleSubmit} className="edit-form">
      <ToastContainer />
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
      <label htmlFor="image">Ingrese la url de la imagen de la escena</label>
      <input
        type="text"
        id="image"
        name="image"
        value={form.image}
        onChange={handleChange}
      ></input>
      <label htmlFor="pitch">Ingrese el pitch de la escena</label>
      <input
        type="text"
        id="pitch"
        name="pitch"
        value={form.pitch}
        onChange={handleChange}
      ></input>
      <label htmlFor="yaw">Ingrese el yaw de la escena </label>
      <input
        type="text"
        id="yaw"
        name="yaw"
        value={form.yaw}
        onChange={handleChange}
      ></input>
      <button type="submit" className="submit-edit-btn">
        Confirmar
      </button>
    </form>
  );
};

export default EscenaSave;
