
import EscenaSola from '../components/escenasola'
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom";
import CustomMenu from '../components/menu/menu';
import EscenaSave from './EscenaSave';
import ListarEscenas from './ListarEscenas';
import EscenaCardList from '../components/EscenaCardList';
import EscenaCard from '../components/EscenaCard';
import HotSpotCardList from '../components/HotSpotCardList';
import { useRecoilState } from 'recoil';
import state from '../state/state';

const HotSpotAEditar = (props) =>{

    const [properties] = useRecoilState(state);
    const location = useLocation();
    console.log(location)
    const inmuebleId = location.state.inmuebleId
    const escenaId=location.state.escenaId;
    const hotSpotId = location.state.id
    console.log ("el hotSpotId es ")
    console.log (hotSpotId)
    const property  = properties.find(val => val.id === inmuebleId)
    const escena = property.escenaResponseDtoList.find(itemEscena => itemEscena.id === escenaId)
    const hotSpot = escena.hotSpotResponseDtoList.find(itemHotSpot => itemHotSpot.id === hotSpotId)
    // console.log(property)

    // console.log(properties)

    console.log(hotSpot)

    return (
      <div className="row">
        <CustomMenu></CustomMenu>
        <div class="col-9">
          <div>
            <h1>Estos son los detalles de la escena a editar</h1>
          </div>
          <div className='row'>
            <li>{hotSpot.id}</li>
            <li>{hotSpot.name}</li>
            <li>{hotSpot.type}</li>
            <li>{hotSpot.pitch}</li>
            <li>{hotSpot.yaw}</li>
            <li>{hotSpot.cssClass}</li>
            <li>{hotSpot.nextScene}</li>
          </div>
        </div>
      </div>
    );



}

export default HotSpotAEditar; 