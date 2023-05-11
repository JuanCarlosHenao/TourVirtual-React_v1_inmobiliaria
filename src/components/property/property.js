import './property.css';
import { Link } from 'react-router-dom';

const Property = (props) => {
    return (
        <div class="card">
            <img src={props.image} alt=""/>
            <div class="description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                {/* <button className = "buttonProperty" onClick={() => props.handleClick(props.id-1)}>Ver detalles</button> */}
                <button className = "buttonProperty" > 
                    <Link to={`/InmuebleDetalles/`} state= {{id :props.id}}>Ver detalles</Link>
                </button>
                <button className = "buttonProperty" > 
                    <Link to={`/InmuebleAEditar/`} state= {{id :props.id}}>Editar</Link>
                </button>
            </div>
        </div>
    );
};

export default Property;