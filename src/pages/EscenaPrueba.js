import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";  // esto es un hook 
import { getEscena } from "../components/dataPrueba";
import { useMemo } from "react";
import Escena from "../components/escenasola";
// const EscenaPrueba =() =>{
//     return(
//         <div>
//             <h1>
//                 Estas son las escenas de prueba 2
//             </h1>
//         </div>
//     );
// }




// export default EscenaPrueba

export default function EscenaPrueba({escenaCompleta}){
    const params  = useParams(); // uso el hook
    // const escena = useMemo(() => getEscena(params.))
    return (
      <div>
        <h1>Estas son las escenas de prueba 2</h1>
        <h1>
            {params.escenaprueabaid}
        </h1>
        {/* <Escena escenaCompleta={escenaCompleta}/> */}

      </div>
    );    
}