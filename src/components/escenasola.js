
import { Pannellum } from "pannellum-react";
import image from '../images/PanoramaInterior.png'
import image2 from '../images/PanoramaInterior2.png'
import dataScene from './dataScene';

import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'



const  Escena = (props) => {
    const [escena, setEscena] = useState(props.escenaCompleta);
    const mostrarhotSpots = (element, i) => {
      if (element.cssClass === "hotSpotElement")
        return (
          <Pannellum.Hotspot
            key={i}
            type={element.type}
            yaw={element.yaw}
            cssClass={element.cssClass}
            pitch={element.pitch}
            text={element.name}
            URL="https://github.com/farminf/pannellum-react"
            // text="Hotspot de objeto"
            // csndleClick={() => alert("Click")}
            handleClick={() => alert("Click")}
          />
        );
      else if (element.cssClass === "moveScene")
        var idEscenaNueva = Number(element.nextScene)
        return (
          console.log("entro a moveScene"),
          <Pannellum.Hotspot
            key={i}
            type={element.type}
            yaw={element.yaw}
            pitch={element.pitch}
            cssClass={element.cssClass}
            text={element.name}
            handleClick={() => {
              console.log(escena)
              console.log (element.nextScene)

              // setEscena(dataScene.find(({id})=>id===(element.nextScene).toString()));

              setEscena(props.escenas.find((item => item.id == (element.nextScene))))

              console.log("La siguiente escena es "+escena.title)
            }}

            // text="Hotspot de siguiente escena"
          />
          
        );
    };

    return (
      <div>
        {escena && (
          <Pannellum
            width="100%" // ancho
            height="500px" // alto
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