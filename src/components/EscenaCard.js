import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EscenaCard = (props) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate("/EscenaAEditar/", {
      state: { id: props.id, inmuebleId: props.inmuebleId },
    });
  };
  return (
    <div class="card" onClick={onClickCard}>
      <img src={props.image} alt="" />
      <div class="description">
        <h2 class="property-name property-name-no-limit">{props.title}</h2>
      </div>
    </div>
  );
};

export default EscenaCard;
