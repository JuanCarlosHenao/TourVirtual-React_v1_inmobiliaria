import Properties from "../components/property/propertyList";
import CustomMenu from "../components/menu/menu";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import state from "../state/state";

function Home() {
  const [properties, setProperties] = useRecoilState(state);

  const getProperties = async () => {
    const url = "http://127.0.0.1:8080/inmobiliaria360/inmuebles";

    try {
      const { data } = await axios.get(url);
      // properties= data;
      setProperties(data);
    } catch (error) {
      console.log(error);
    }
    console.log("Prueba 1");
    console.log(properties.data);
    console.log(properties);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="App">
      <div className="row">
        <CustomMenu></CustomMenu>
        <Properties properties={properties}></Properties>
      </div>
    </div>
  );
}

export default Home;
