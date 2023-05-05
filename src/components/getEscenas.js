import EscenaSola from './escenasola'

const GetScenes = (props) => {
    return (
        <div class='col-9'>
            <div>
                <h1>Escenas</h1>
            </div>
            <div className='row'>
            {props.scenes.map((escenaItem) => {
                return (
                    <div className='col-4'>  {/* añadir key  */}
                    {/* <Property
                        id={property.id}
                        description={property.description}
                        name={property.name}
                        image={property.image}
                        price={property.price}
                        handleClick={props.handleClick}
                    >   
                    </Property> */}
                    <EscenaSola escenaCompleta={escenaItem}>
                        {/* id={escenaItem.id}
                        title={escenaItem.title}
                        image={escenaItem.image}
                        pitch={escenaItem.pitch}
                        yaw={escenaItem.yaw} */}
                        
                    </EscenaSola>
                    </div>
                );
            })}
            </div>
        </div>
    );

}


export default GetScenes;