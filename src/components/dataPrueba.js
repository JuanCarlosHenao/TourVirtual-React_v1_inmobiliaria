import insideOne from "../images/PanoramaInterior.png";
import insideTwo from "../images/PanoramaInterior2.png";

export const escenas = [  // Arreglo de escenas 
  {
    id: "insideOne",
    title: "interior 1",
    image: "https://res.cloudinary.com/back-pragma/image/upload/v1681707044/tesis/Prueba1_m4xukw.jpg",
    pitch: -11,
    yaw: -3,
    hotSpot: {
      flowerVase: {
        type: "custom",
        pitch: -16.28,
        yaw: -1.66,
        nameModel: "flowerVase",
        cssClass: "hotSpotElement",
      },
      plane: {
        type: "custom",
        pitch: -34,
        yaw: -14,
        cssClass: "hotSpotElement",
      },
      chair: {
        type: "custom",
        pitch: -28,
        yaw: -64,
        cssClass: "hotSpotElement",
      },
      nexScene: {
        type: "custom",
        pitch: -8,
        yaw: 126,
        cssClass: "moveScene",
        scene: "insideTwo",
      },
    },
  },
  {
    id: "insideTwo",
    title: "interior 2",
    image: "https://res.cloudinary.com/back-pragma/image/upload/v1681707044/tesis/Prueba1_m4xukw.jpg",
    pitch: 10,
    yaw: 180,
    hotSpot: {
      nexScene: {
        type: "custom",
        pitch: -8,
        yaw: 126,
        cssClass: "moveScene",
        scene: "insideThree",
      },
    },
  },
  {
    id: "insideThree",
    title: "interior 3",
    image: insideOne,
    pitch: -11,
    yaw: -3,
    hotSpot: {
      flowerVase: {
        type: "custom",
        pitch: -16.28,
        yaw: -1.66,
        nameModel: "flowerVase",
        cssClass: "hotSpotElement",
      },
      plane: {
        type: "custom",
        pitch: -34,
        yaw: -14,
        cssClass: "hotSpotElement",
      },
      chair: {
        type: "custom",
        pitch: -28,
        yaw: -64,
        cssClass: "hotSpotElement",
      },
      nexScene: {
        type: "custom",
        pitch: -8,
        yaw: 126,
        cssClass: "moveScene",
        scene: "insideFour",
      },
    },
  },
  {
    id: "insideFour",
    title: "interior 4",
    image: insideTwo,
    pitch: 10,
    yaw: 180,
    hotSpot: {},
  },
];

export function getEscena (id){
    return escenas.find((item) => item.id === id)
}
