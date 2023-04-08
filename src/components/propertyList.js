import Property from "./property";

const Properties = (props) => {
    const properties = [{
        id: 1,
        name: "La Ceja",
        price: 599,
        description: "Inbmobiliria 1",
        image: "https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg"
    },
    {
        id: 2,
        name: "El carmen de viboral",
        price: 810,
        description: "Inbmobiliria 2",
        image: "https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg"
    },
    {
        id: 3,
        name: "Rionegro",
        price: 4000,
        description: "Inbmobiliria 4",
        image: "https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg"
    },
    {
        id: 4,
        name: "Rionegro",
        price: 400,
        description: "Inbmobiliria 5",
        image: "https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg"
    }]

    return (
        <div class='col-9'>
            <div>
                <h1>Inmuebles</h1>
            </div>
            <div className='row'>
            {properties?.map((property) => {
                return (
                    <div className='col-4'>
                    <Property
                        description={property.description}
                        name={property.name}
                        image={property.image}
                        price={property.price}
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