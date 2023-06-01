import EditProperty from "./property/EditProperty";
import EscenaCard from "./EscenaCard";
import HotSpotCard from "./HotSpotCard";

const HotSpotCardList = (props) => {
  return (
    <div className="scenes-container">
      {props.hotspots.map((hotspot) => {
        return (
          <HotSpotCard
            id={hotspot.id}
            name={hotspot.name}
            type={hotspot.type}
            cssClas={hotspot.cssClas}
            escenaId={props.escenaId}
            inmuebleId={props.inmuebleId}
          ></HotSpotCard>
        );
      })}
    </div>
  );
};

export default HotSpotCardList;
