import './menu.css';
import { Link } from 'react-router-dom';

const CustomMenu = (props) => {
    return (
      <div className="menu-bar col-3">
        <h3 className="menu-item">Menu</h3>
        <ul>
            {/* <button onClick={() => props.resetPage()}>
                <li className="menu-item">Lista de propiedades</li>
            </button> */}
          <li className="menu-item">
              <Link to='/'>Lista de propiedades </Link>
              
          </li>
          <li className="menu-item">
              <Link to='/saveInmueble'>Agregar inmueble </Link>
              
          </li>
          <li className="menu-item">
            <Link to='/editInmueble'>Editar inmueble</Link>
          </li>
          <li className="menu-item">Eliminar inmueble</li>
          <br></br>
          <li className="menu-item">
              <Link to='/getEscenas'>Listar todas las escenas </Link>
              
          </li>
          <li className="menu-item">
              <Link to='/postEscena'>Agregar escena</Link>
              
          </li>
          <li className="menu-item">
              <Link to='/example' state={"Hola como estás"} >Example </Link>
          </li>

        </ul>
        {props.isSceneSelect && (
            <button onClick={() => props.resetPage()}>Atrás</button>
        )}
      </div>
    );
};

export default CustomMenu;