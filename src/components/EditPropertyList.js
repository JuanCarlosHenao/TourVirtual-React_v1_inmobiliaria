import EditProperty from "./EditProperty";


const EditPropertyList = (props) => {  
    return (
        <div class='col-9'>
            <div>
                <h1>Inmuebles</h1>
            </div>
            <div className='row'>
            {props.properties.map((property) => {
                return (
                    <div className='col-4'>  {/* añadir key  */}
                    <EditProperty
                        id={property.id}
                        description={property.description}
                        name={property.name}
                        image={property.image}
                        price={property.price}
                        // handleClick={props.handleClick}
                    >   
                    </EditProperty>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default EditPropertyList;