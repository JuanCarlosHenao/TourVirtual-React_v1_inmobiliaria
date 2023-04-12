import Properties from './components/propertyList';
import CustomMenu from './components/menu';
import Scene from './components/scena';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import dataScene from './helpers/dataScene';
import EscenaSola from './components/escenasola'
import React, { useState } from 'react';

function App() {
  const [sceneSelected, setSceneSelected] = useState(false);
  const [numberScene, setNumberScene] = useState(0);
  const handleClick = (id) => {
    console.log('oe---');
    console.log(id);
    setSceneSelected(true);
    setNumberScene(id);
  };

  return (
    <div className="App">
      <div className='row'>
        <CustomMenu></CustomMenu>
        { sceneSelected  && (
          <div>
          <EscenaSola escenaCompleta={dataScene[numberScene]}></EscenaSola>
          </div>
        )}
        { !sceneSelected  && (
          <Properties handleClick={handleClick}></Properties>
        )}
      </div>
    </div>
  );
}

export default App;
