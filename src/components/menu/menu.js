import "./menu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import house_solid from '../../images/house_solid.svg'

const CustomMenu = (props) => {
  return (
    <div className="menu-bar col-3">
      <div className="fixed-content">
        <h3 style={{ color: "white", marginBottom: "1rem" }}>Menu</h3>
        <ul
          style={{
            padding: 0,
            marginTop: "1rem",
            gap: "1.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li className="menu-item">
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <Link to="/">Lista de propiedades </Link>
          </li>
          <li className="menu-item">
            <FontAwesomeIcon
              icon="fa-solid fa-plus"
              style={{ color: "#ffffff" }}
            />
            <Link to="/saveInmueble">Agregar inmueble </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomMenu;
