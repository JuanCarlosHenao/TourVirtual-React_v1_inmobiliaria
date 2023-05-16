import "./property/EditPropertyList";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const HotSpotCard = (props) => {
  return (
    <div class="card">
      <img
        src="https://res.cloudinary.com/back-pragma/image/upload/v1681708379/cnbtjijopxu8my7bkfhf.png"
        alt=""
      />
      <div class="description">
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <h2>{props.cssClas}</h2>
        <button className="buttonProperty">
          <Link
            to="/HotSpotAEditar"
            state={{
              id: props.id,
              escenaId: props.escenaId,
              inmuebleId: props.inmuebleId,
            }}
          >
            Editar hotSpot
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HotSpotCard;
