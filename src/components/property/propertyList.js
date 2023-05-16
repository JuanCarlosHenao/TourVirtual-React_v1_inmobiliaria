import Property from "./property";
import { useNavigate } from "react-router-dom";

const Properties = (props) => {
  const navigate = useNavigate();
  const handleClickOnCard = (id) => {
    console.log(id);
    navigate("/InmuebleDetalles/", { state: { id } });
  };
  return (
    <div
      style={{
        width: "82%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // alinea titulo al centro
        paddingTop: "1rem", // pone distancia arriba
      }}
    >
      <h1 style={{ fontWeight: 700 }}>Inmuebles</h1>

      <div className="row">
        {props.properties.map((property) => {
          return (
            <div className="col-4" key={property.id}>
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
