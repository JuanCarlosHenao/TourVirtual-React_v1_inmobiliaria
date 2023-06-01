import "./property/EditPropertyList";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HotSpotCard = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const handleClickOnCard = () => {
    navigate("/HotSpotAEditar", {
      state: {
        id: props.id,
        escenaId: props.escenaId,
        inmuebleId: props.inmuebleId,
      },
    });
  };
  return (
    <div class="card" onClick={handleClickOnCard}>
      <img
        src="https://res.cloudinary.com/back-pragma/image/upload/v1681708379/cnbtjijopxu8my7bkfhf.png"
        alt=""
      />
      <div class="description">
        <h1 class="property-name">{props.name}</h1>
        <h2 class="property-name">{props.type}</h2>
      </div>
    </div>
  );
};

export default HotSpotCard;
