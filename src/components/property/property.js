import "./property.css";
import { Link } from "react-router-dom";

const Property = (props) => {
  const onClickCard = () => {
    props.onClick(props.id);
  };
  return (
    <div class="card" onClick={onClickCard}>
      <img src={props.image} alt="" />
      <div class="description">
        <h2 class="property-name">{props.name}</h2>
        <p>{props.description}</p>
        {/* <button className="buttonProperty">
          <Link to={`/InmuebleDetalles/`} state={{ id: props.id }}>
            Ver detalles
          </Link>
        </button>
        <button className="buttonProperty">
          <Link to={`/InmuebleAEditar/`} state={{ id: props.id }}>
            Editar
          </Link>
        </button> */}
      </div>
      <p class="price">${props.price}</p>
    </div>
  );
};

export default Property;
