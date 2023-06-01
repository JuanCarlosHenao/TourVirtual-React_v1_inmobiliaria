import "./menu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import house_solid from '../../images/house_solid.svg'

const CustomMenu = (props) => {
  return (
    <div className="menu-bar">
      <div className="fixed-content">
        <h3 className="title">Menu</h3>
        <ul className="links">
          <li className="menu-item">
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-house" />
              <label className="link-label">Lista de propiedades</label>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/saveInmueble">
              <FontAwesomeIcon
                icon="fa-solid fa-plus"
                style={{ color: "#ffffff" }}
              />
              <label className="link-label">Agregar inmueble</label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomMenu;
