import { atom } from "recoil";

const propertyState = atom({
    key: 'propertyState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });


export default propertyState;
