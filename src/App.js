import Properties from './components/propertyList';
import CustomMenu from './components/menu';
import Scene from './components/scena';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import dataScene from './helpers/dataScene';
import EscenaSola from './components/escenasola'


function App() {

  return (
    <div className="App">
      <div className='row'>
        <CustomMenu></CustomMenu>
        <Properties></Properties>
        <EscenaSola escenaCompleta={dataScene[2]}></EscenaSola>
      </div>
      <div className='container'>
        <Scene escenas={dataScene}></Scene>
      </div>
    </div>
  );
}

export default App;
