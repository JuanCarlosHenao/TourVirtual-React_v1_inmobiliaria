import insideOne from "../images/PanoramaInterior.png";
import insideTwo from "../images/PanoramaInterior2.png";

const Scenes = [  // Arreglo de escenas 
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
//  {   insideOne:{ // Scene es un objeto que va a contener todas las escenas
//         id:"insideOne",
//         title:'interior 1',
//         image: insideOne,
//         pitch: -11,
//         yaw: -3,
//         hotSpot:{
//             flowerVase:{
//                 type: 'custom',
//                 pitch: -16.28,
//                 yaw: -1.66,
//                 nameModel: 'flowerVase',
//                 cssClass: 'hotSpotElement',
//             },
//             plane:{
//                 type: 'custom',
//                 pitch: -34,
//                 yaw: -14,
//                 cssClass: 'hotSpotElement',
//             },
//             chair:{
//                 type: 'custom',
//                 pitch: -28,
//                 yaw: -64,
//                 cssClass: 'hotSpotElement',
//             },
//             nexScene:{
//                 type: 'custom',
//                 pitch: -8,
//                 yaw: 126,
//                 cssClass: 'moveScene',
//                 scene: 'insideTwo'
//             }
//         }
//     },
//     insideTwo:{
//         id:2,
//         title:'interior 2',
//         image: insideTwo,
//         pitch: 10,
//         yaw: 180,
//         hotSpot:{
//             nexScene:{
//                 type: 'custom',
//                 pitch: -8,
//                 yaw: 126,
//                 cssClass: 'moveScene',
//                 scene: 'insideThree'
//             }
//         }
//     },
//     insideThree:{
//         id:3,
//         title:'interior 3',
//         image: insideOne,
//         pitch: -11,
//         yaw: -3,
//         hotSpot:{
//             flowerVase:{
//                 type: 'custom',
//                 pitch: -16.28,
//                 yaw: -1.66,
//                 nameModel: 'flowerVase',
//                 cssClass: 'hotSpotElement',
//             },
//             plane:{
//                 type: 'custom',
//                 pitch: -34,
//                 yaw: -14,
//                 cssClass: 'hotSpotElement',
//             },
//             chair:{
//                 type: 'custom',
//                 pitch: -28,
//                 yaw: -64,
//                 cssClass: 'hotSpotElement',
//             },
//             nexScene:{
//                 type: 'custom',
//                 pitch: -8,
//                 yaw: 126,
//                 cssClass: 'moveScene',
//                 scene: 'insideFour'
//             }
//         }
//     },
//     insideFour:{
//         id:4,
//         title:'interior 4',
//         image: insideTwo,
//         pitch: 10,
//         yaw: 180,
//         hotSpot:{

//         }
//     }
// }

export default Scenes;
