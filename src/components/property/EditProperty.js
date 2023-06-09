import "./EditPropertyList";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const EditProperty = (props) => {
  return (
    <div class="card">
      <img src={props.image} alt="" />
      <div class="description">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <button className="buttonProperty">
          <Link
            to="/InmuebleAEditar"
            state={{
              id: props.id,
              name: props.name,
              price: props.price,
              description: props.description,
              image: props.image,
            }}
          >
            Editar Inmueble
          </Link>
        </button>
      </div>
    </div>
  );
};

export default EditProperty;
