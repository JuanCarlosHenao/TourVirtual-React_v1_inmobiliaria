import { useState } from "react";
import CustomMenu from "../components/menu/menu";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { async } from "q";

const HotSpotSave = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    escena_id: props.escenaId,
  });

  const showToastMessageSuccess = () => {
    toast.success("Hotspot agregado correctamente", {
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
    toast.error("Error agregando el hotspot", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleChange = (e) => {
    console.log({ e });

    const { target } = e;
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = target;

    const newValues = {
      ...form,
      [name]: value,
    };
    setForm(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Para que no se recargue cuando valido el formulario

    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/inmobiliaria360/inmueble/escena/hotspot/savehotspot",
    //   data: form,
    // });
    // console.log(form);

    axios
      .post(
        "http://localhost:8080/inmobiliaria360/inmueble/escena/hotspot/savehotspot",
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
      <ToastContainer />;
      <label htmlFor="escena_id">Ingrese el id de la escena del hotspot </label>
      <input
        type="text"
        id="escena_id"
        name="escena_id"
        // value={form.escena_id}
        value={props.escenaId}
        onChange={handleChange}
      ></input>
      <label htmlFor="name">Ingrese el nombre del hotspot</label>
      {/* en value sería el label al cual hago referencia ,sería la variable del hook ,
              e es la funcion que dispara el cambio de estado  */}
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="type">Ingrese el tipo del hotspot</label>
      <select id="type" name="type" onChange={handleChange}>
        <option defaultValue={"custom"}>custom</option>
        <option value="info">info</option>
      </select>
      <label htmlFor="pitch">Ingrese el pitch del hotspot</label>
      <input
        type="text"
        id="pitch"
        name="pitch"
        value={form.pitch}
        onChange={handleChange}
      ></input>
      <label htmlFor="yaw">Ingrese el yaw del hotSpot </label>
      <input
        type="text"
        id="yaw"
        name="yaw"
        value={form.yaw}
        onChange={handleChange}
      ></input>
      <label htmlFor="cssClass">Ingrese la cssClass del hotSpot </label>
      <select id="cssClass" name="cssClass" onChange={handleChange}>
        <option defaultValue={"hotSpotElement"}>hotSpotElement</option>
        <option value="moveScene">moveScene</option>
      </select>
      {form.cssClass === "moveScene"
        ? (console.log("funciona"),
          (
            <div>
              <label htmlFor="nextScene">
                Ingrese la nextScene del hotSpot{" "}
              </label>

              <select id="nextScene" name="nextScene" onChange={handleChange}>
                {props.escenas.length === 0 ? (
                  <div>
                    <h1>No hay escenas en el inmueble </h1>
                  </div>
                ) : (
                  props.escenas.map((item) => (
                    <option value={item.id}>{item.title}</option>
                  ))
                )}
              </select>
            </div>
          ))
        : (console.log("no funciona"), (form.nextScene = ""))}
      <button className="submit-edit-btn">Confirmar</button>
    </form>
  );
};

export default HotSpotSave;
