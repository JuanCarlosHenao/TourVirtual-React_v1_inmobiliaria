import Properties from './components/propertyList';
import CustomMenu from './components/menu';
import Scene from './components/scena';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <CustomMenu></CustomMenu>
        <Properties></Properties>
      </div>
      <Scene />
      <Scene />
    </div>
  );
}

export default App;
