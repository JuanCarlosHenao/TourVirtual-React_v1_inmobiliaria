import { Pannellum } from "pannellum-react";
import React, { useState, useEffect } from "react";

const Escena = (props) => {
  const [escena, setEscena] = useState(props.escenaCompleta);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    };
  }, []);
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
          // URL="https://github.com/farminf/pannellum-react"
          // text="Hotspot de objeto"
          // csndleClick={() => alert("Click")}
          handleClick={() => alert("Click")}
        />
      );
    else if (element.cssClass === "moveScene")
      var idEscenaNueva = Number(element.nextScene);
    return (
      console.log("entro a moveScene"),
      (
        <Pannellum.Hotspot
          key={i}
          type={element.type}
          yaw={element.yaw}
          pitch={element.pitch}
          cssClass={element.cssClass}
          text={element.name}
          handleClick={() => {
            console.log(escena);
            console.log(element.nextScene);
            // setEscena(dataScene.find(({id})=>id===(element.nextScene).toString()));
            setEscena(
              props.escenas.find((item) => item.id == element.nextScene)
            );
            console.log("La siguiente escena es " + escena.title);
          }}
        />
      )
    );
  };

  return (
    <div>
      {escena && (
        <Pannellum
          width="100%" // ancho
          height={screenWidth >= 500 ? "500px" : "300px"} // alto
          image={escena.image}
          pitch={escena.pitch}
          yaw={escena.yaw}
          hfov={110}
          title={escena.title}
          autoLoad
          hotspotDebug={true}
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
