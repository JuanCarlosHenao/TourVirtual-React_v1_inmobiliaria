import Properties from "../components/property/propertyList";
import CustomMenu from "../components/menu/menu";
// import Scene from '../components/scena';
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import dataScene from "../components/dataScene";
import EscenaSola from "../components/escenasola";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import FormSaveInmueble from "../components/FormSaveInmueble";
import EditPropertyList from "../components/EditPropertyList";

export default function EditarInmueble() {
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    const url = "http://127.0.0.1:8080/inmobiliaria360/inmuebles";
    let properties = [];
    try {
      const { data } = await axios.get(url);
      properties = data;
    } catch (error) {
      console.log(error);
    }
    console.log("Prueba 1");
    console.log(properties.data);
    console.log(properties);

    setProperties(properties);
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <div className="App">
      <div className="row">
        <CustomMenu></CustomMenu>
        <EditPropertyList properties={properties}></EditPropertyList>
      </div>
    </div>
  );
}
