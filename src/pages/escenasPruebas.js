import CustomMenu from "../components/menu/menu";
import { escenas } from "../components/dataPrueba";
// import { escenas } from "../pages/ListarEscenas";
import { Link, Outlet } from "react-router-dom";
import Escena from "../components/escenasola";
import Escenas from "./escenas";
// import Escenas from "./escenas";
export default function escenaPruebas (){
    return (
      <div>
        <CustomMenu></CustomMenu>
        <h1>Estas son las escenas de prueba 3 </h1>
        <div>
          <div>
            {escenas.map((item) => (
              <div>
                <Link to={`escenas/${item.id}`}>{item.title}</Link> "
                {item.image}
                <Escena escenaCompleta = {item}/>                
              </div>
            ))}
          </div>
        </div>
        <div>
          <Outlet></Outlet>
        </div>

      </div>
    );
}