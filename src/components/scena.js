import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import Modal from '../components/modal';
import dataScene from '../helpers/dataScene';
import { UseModal } from '../hooks/useModal';
import ModelContainer from './modelContainer';

const Scene=({escenas=[]})=> {  // puede entrar como parámetro la escena a la que quiero ir y de acuerdo a esto ya desde el botón puedo elegir a cuál apuntar
    // const { isOpen, openModal, closeModal } = UseModal(false);
    // const [scene, setScene] = useState(dataScene[{elegirScena}]);  // de acá coge la escena inicial 
    // const [scene, setScene] = useState(dataScene)
    // console.log(dataScene['insideFour'].title);
    // const [model, setModel] = useState(null);
    const [scene, setScene] = useState();
    const hotSpots = (element, i) => {  // Función para saber qué tipo de punto es, si de info o de siguiente escena 
        if (element.cssClass === 'hotSpotElement')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    // handleClick={() => { openModal(); setModel(element.nameModel)}}
                    cssClass={element.cssClass}
                />
            );

        else if (element.cssClass === 'moveScene')
            return (
              <Pannellum.Hotspot
                key={i}
                type="custom"
                pitch={element.pitch}
                yaw={element.yaw}
                // handleClick={() => { setScene(dataScene[element.scene]); }}

                handleClick={() => {
                //   setScene(scene.map((item, index) => item.hotSpot.nexScene));
                // perrosEncontrados.find(({raza}) => raza === "Chihuahua");
                  setScene(escenas.find(({siguienteEscena})=>escenas.id===element.scene));
                }}
                cssClass={element.cssClass}
              />
            );
    }

    return (
      // función para retornar la escena
      <div>
        {escenas.map((itemEscena, index) => (
          <Pannellum
            width={"50%"}
            height={"50vh"}
            title={itemEscena.title}
            image={itemEscena.image}
            pitch={-16.28}
            yaw={-1.66}
            hfov={130}
            autoLoad
            showControls={false}
            showFullscreenCtrl={false}
            showZoomCtrl={false}
            orientationOnByDefault={true}
            hotspotDebug={true}
          >
            {/* setScene(item); */}
            {Object.values(itemEscena.hotSpot).map((element, i) =>
              hotSpots(element, i)
            )}
            {/* {itemEscena.hotSpot.map((item, index) => hotSpots(item, index))} */}
          </Pannellum>
        ))}
      </div>
    );
}

export default Scene;