import Property from "./property";

const Properties = (props) => {  // props sería el arreglo de inmuebles 
    // const properties = [{
    //     id: 1,
    //     name: "La Ceja",
    //     price: 599,
    //     description: "Inbmobiliria 1",
    //     image: "https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg"
    // },
    // {
    //     id: 2,
    //     name: "El carmen de viboral",
    //     price: 810,
    //     description: "Inbmobiliria 2",
    //     image: "https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg"
    // },
    // {
    //     id: 3,
    //     name: "Rionegro",
    //     price: 4000,
    //     description: "Inbmobiliria 4",
    //     image: "https://res.cloudinary.com/back-pragma/image/upload/v1681708744/Prueba1_gq9uij.jpg"
    // },
    // {
    //     id: 4,
    //     name: "Rionegro",
    //     price: 400,
    //     description: "Inbmobiliria 5",
    //     image: "https://res.cloudinary.com/back-pragma/image/upload/v1681708379/cnbtjijopxu8my7bkfhf.png"
    // }]

    return (
        <div class='col-9'>
            <div>
                <h1>Inmuebles</h1>
            </div>
            <div className='row'>
            {props.properties.map((property) => {
                return (
                    <div className='col-4'>  {/* añadir key  */}
                    <Property
                        id={property.id}
                        description={property.description}
                        name={property.name}
                        image={property.image}
                        price={property.price}
                        // handleClick={props.handleClick}
                    >   
                    </Property>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default Properties;