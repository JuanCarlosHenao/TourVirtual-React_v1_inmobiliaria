import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import image from '../images/PanoramaInterior.png'
import image2 from '../images/PanoramaInterior2.png'
import dataScene from './dataScene';



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



const Escena = ({escenaCompleta}) => {
    const [escena, setEscena] = useState(escenaCompleta);
    const hotSpots = (element, i) => {
      if (element.cssClass === "hotSpotElement")
        return (
          <Pannellum.Hotspot
            key={i}
            type={element.type}
            yaw={element.yaw}
            pisClass={element.cssClass}
            hatch={element.pitch}
            csndleClick={() => alert("Click")}
          />
        );
      else if (element.cssClass === "moveScene")
        return (
          console.log("entro 2"),
          (
            <Pannellum.Hotspot
              key={i}
              type={element.type}
              yaw={element.yaw}
              pitch={element.pitch}
              handleClick={() => {
                setEscena(dataScene.find(({id})=>id===element.scene));
              }}
              cssClass={element.cssClass}
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
            {/* {Object.values(escena.hotSpot).map((element, i) =>
              hotSpots(element, i)
            )} */}
          </Pannellum>
        )}
      </div>
    );
};

export default Escena;