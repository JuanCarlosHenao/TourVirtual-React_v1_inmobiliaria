import Property from "./property";
import { useNavigate } from "react-router-dom";

const Properties = (props) => {
  const navigate = useNavigate();
  const handleClickOnCard = (id) => {
    console.log(id);
    navigate("/InmuebleDetalles/", { state: { id } });
  };
  return (
    <div className="properties-container">
      <h1 className="properties-title">Inmuebles</h1>

      <div className="properties">
        {props.properties.map((property) => {
          return (
            <div key={property.id}>
              <Property
                id={property.id}
                description={property.description}
                name={property.name}
                image={property.image}
                price={property.price}
                onClick={handleClickOnCard}
              ></Property>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Properties;
