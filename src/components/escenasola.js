
import { Pannellum } from "pannellum-react";
import image from '../images/PanoramaInterior.png'
import image2 from '../images/PanoramaInterior2.png'
import dataScene from './dataScene';

import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'



// const objetoEscena = {
//   id: "insideOne",
//   title: "interior 1",
//   image:<img src={"https://res.cloudinary.com/back-pragma/image/upload/v1681707044/tesis/Prueba1_m4xukw.jpg"} alt=""/>,
//   pitch: 10,
//   yaw: 180,
//   hotSpot: {
//     flowerVase: {
//       type: "custom",
//       pitch: -16.28,
//       yaw: -1.66,
//       nameModel: "flowerVase",
//       cssClass: "hotSpotElement",
//     },
//     plane: {
//       type: "custom",
//       pitch: -34,
//       yaw: -14,
//       cssClass: "hotSpotElement",
//     },
//     chair: {
//       type: "custom",
//       pitch: -28,
//       yaw: -64,
//       cssClass: "hotSpotElement",
//     },
//     nexScene: {
//       type: "custom",
//       pitch: -8,
//       yaw: 126,
//       cssClass: "moveScene",
//       scene: "insideTwo",
//     }
//   }
// };

// const objetoEscena2 = {
//     id: "insideTwo",
//     title: "interior 2",
//     image: image2,
//     pitch: 10,
//     yaw: 180,
//     hotSpot: {
//       flowerVase: {
//         type: "custom",
//         pitch: -16.28,
//         yaw: -1.66,
//         nameModel: "flowerVase",
//         cssClass: "hotSpotElement",
//       },
//       plane: {
//         type: "custom",
//         pitch: -34,
//         yaw: -14,
//         cssClass: "hotSpotElement",
//       },
//       chair: {
//         type: "custom",
//         pitch: -28,
//         yaw: -64,
//         cssClass: "hotSpotElement",
//       },
//       nexScene: {
//         type: "custom",
//         pitch: -8,
//         yaw: 126,
//         cssClass: "moveScene",
//         scene: "insideTwo",
//       }
//     }
//   };



const  Escena = (props) => {

// const Escena = ({escenaCompleta}) => {
    // console.log("La lista de las escenas es "+props.estado)


    // const escenasList = [escenas]
    // console.log(escenasList)

    // const [escenaNueva, setEscenaNueva] = useState({});


    // const getEscenaNueva = async (idNuevaEscena)=>{
    //   const url = `http://127.0.0.1:8080/inmobiliaria360/inmueble/escena/escenaSola/${idNuevaEscena}`
    //   let escenaNueva2 = {}
    //   try {
    //     const {data} = await axios.get(url)
    //     escenaNueva2= data;
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   console.log("Prueba 4")
    //   // console.log(property.data)
    //   console.log(escenaNueva2)
    
    //   setEscenaNueva(escenaNueva2);
    // }
  
  
    // useEffect( () => {
    //   getEscenaNueva();
    // }, []);


    const [escena, setEscena] = useState(props.escenaCompleta);

    const mostrarhotSpots = (element, i) => {
      if (element.cssClass === "hotSpotElement")
        return (
          <Pannellum.Hotspot
            key={i}
            type={element.type}
            yaw={element.yaw}
            // pisClass={element.cssClass}
            cssClass={element.cssClass}
            // hatch={element.pitch}
            pith={element.pitch}
            // text="Hotspot de objeto"
            // csndleClick={() => alert("Click")}
            handleClick={() => alert("Click")}
          />
        );
      else if (element.cssClass === "moveScene")
        var idEscenaNueva = Number(element.nextScene)
        return (
          console.log("entro a moveScene"),
          // console.log({element}),
          // console.log(escena),
          
          // console.log(escenas),

          (
            <Pannellum.Hotspot
              key={i}
              type={element.type}
              yaw={element.yaw}
              pitch={element.pitch}
              cssClass={element.cssClass}
              handleClick={() => {
                console.log(escena)
                console.log (element.nextScene)

                // setEscena(dataScene.find(({id})=>id===(element.nextScene).toString()));

                setEscena(props.escenas.find((item => item.id == (element.nextScene))))

                // setEscena(props.estado.find(({id})=>id===(element.nextScene).toString()));
                // let escenaSiguiente = props.estado.find(({id})=>(id)===(element.nextScene).toString());
                // setEscena(escenaSiguiente)

                // const escenaSiguiente = listaEscenas.find(({escenaNueva}) =>escenaNueva.id===(element.nextScene).toString());
                // setEscena(escenaSiguiente);
                // const escenaSiguiente = getEscena(idEscenaNueva);

                // const escenaSiguiente = getEscenaNueva(element.nextScene);
                // setEscena(escenaNueva)

                console.log("La siguiente escena es "+escena.title)
              }}

              // text="Hotspot de siguiente escena"
            />
          )
        );
    };

    return (
      <div class="col-9">
        {escena && (
          <Pannellum
            width="100%" // ancho
            height="100vh" // alto
            image={escena.image}
            pitch={escena.pitch}
            yaw={escena.yaw}
            hfov={110}
            title={escena.title}
            autoLoad //Boolean	false	Load and dsplay the image automatically if true
            hotspotDebug={true} //Boolean	false	For debug pupose (finding correct point for hotspot)
          >
            {Object.values(escena.hotSpotResponseDtoList).map((element, i) =>
              mostrarhotSpots(element, i)
            )}
          </Pannellum>
        )}
      </div>
    );
};

export default Escena;