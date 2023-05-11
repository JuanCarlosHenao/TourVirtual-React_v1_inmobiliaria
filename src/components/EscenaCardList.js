import EditProperty from "./EditProperty";
import EscenaCard from "./EscenaCard";


const EscenaCardList = (props) => {  
    return (
        <div class='col-9'>
            <div>
                <h1>Escenas</h1>
            </div>
            <div className='row'>
            {props.escenas.map((escena) => {
                return (
                    <div className='col-4'>  {/* añadir key  */}
                    <EscenaCard
                        id={escena.id}
                        title={escena.title}
                        image={escena.image}
                        inmuebleId = {props.inmuebleId}
                    >   
                    </EscenaCard>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default EscenaCardList;