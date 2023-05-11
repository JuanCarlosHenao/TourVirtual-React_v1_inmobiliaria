import './EditPropertyList';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const EscenaCard = (props) => {


    return (
        <div class="card">
            <img src={props.image} alt=""/>
            <div class="description">
                <h2>{props.title}</h2>
                <button className = "buttonProperty" > 
                    <Link to='/EscenaAEditar' state= {{
                        id :props.id,
                        inmuebleId : props.inmuebleId
                    }}>Editar escena</Link>
                </button>
            </div>
        </div>
    );
};

export default EscenaCard;


