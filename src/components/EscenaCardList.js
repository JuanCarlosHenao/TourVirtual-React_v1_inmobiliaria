import EditProperty from "./property/EditProperty";
import EscenaCard from "./EscenaCard";

const EscenaCardList = (props) => {
  console.log(props.inmuebleId);
  return (
    <div className="scenes-container">
      {props.escenas.map((escena) => {
        return (
          <EscenaCard
            id={escena.id}
            title={escena.title}
            image={escena.image}
            inmuebleId={props.inmuebleId}
          ></EscenaCard>
        );
      })}
    </div>
  );
};

export default EscenaCardList;
