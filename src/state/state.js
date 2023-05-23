import { atom } from "recoil";

const propertyState = atom({
  key: "propertyState",
  default: [],
});

export default propertyState;
