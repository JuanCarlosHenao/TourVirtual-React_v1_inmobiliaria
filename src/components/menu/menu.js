import './menu.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import house_solid from '../../images/house_solid.svg'


const CustomMenu = (props) => {
    return (
      <div className="menu-bar col-3">
        <h3 className="menu-item">Menu</h3>
        <ul style={{padding:0,marginTop:"2rem",gap:"2rem",display:"flex",flexDirection:"column"}} >
          <li className="menu-item">
              {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
              <img src={house_solid} alt='logo casa' width={24} height={24} color='white'></img>
              <Link to='/'>Lista de propiedades </Link>
          </li>
          <li className="menu-item">
              <Link to='/saveInmueble'>Agregar inmueble </Link>
          </li>
        </ul>
      </div>
    );
};

export default CustomMenu;