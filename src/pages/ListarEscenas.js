import CustomMenu from "../components/menu/menu";
import { Link, Outlet } from "react-router-dom";
import Escena from "../components/escenasola";
import { useState, useEffect } from "react";
import axios from "axios";
import EscenaSola from "../components/escenasola";

export default function ListarEscenas (){
    const [escenas, setEscenas] = useState([]);

    const getEscenas = async ()=>{
        const url = 'http://localhost:8080/inmobiliaria360/inmueble/escena/escenas'
        let escenas = []
        try {
          const {data} = await axios.get(url)
          escenas= data;
        } catch (error) {
          console.log(error)
        }
        console.log("Prueba 1")
        console.log(escenas.data)
        console.log(escenas)
      
        setEscenas(escenas);
    }

    useEffect( () => {
        getEscenas();
    }, []);

    return (
      <div className="row">
        <CustomMenu></CustomMenu>
        <div class="col-9">
          <div>
            <h1>Estas son todas las escenas guardadas </h1>
            <h1>Formulario</h1>
          </div>
          <div className="row">
            {/* <EscenaSola escenaCompleta={escenas[0]} estado = {escenas} ></EscenaSola> */}
            {escenas.map((item) => (
              console.log("La cantidad de escenas son "+escenas.length),
              console.log("Las escenas a listar son " + escenas),
              

                <div>

                  {/* {item.title} */}
                  <EscenaSola escenaCompleta={item} estado = {escenas}  ></EscenaSola>
                  {/* <EscenaSola escenaCompleta={dataScene[numberScene]}></EscenaSola> */}
                </div>
            ))}

          </div>
        </div>
      </div>
    );
}