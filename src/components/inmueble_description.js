import EscenaSola from './escenasola'
import Property from './property/property';

const inmuebleDescripcion = (props) => {
    return (
        <div class='col-9'>
            <div>
                <h1>Inmueble 2</h1>
                <h3>{props.id}</h3>
                <p>{props.description}</p>
                <h3>{props.name}</h3>
                <img src={props.image} alt=""/>
                <h3>{props.price}</h3>
            </div>
        </div>
    );

}


export default inmuebleDescripcion;