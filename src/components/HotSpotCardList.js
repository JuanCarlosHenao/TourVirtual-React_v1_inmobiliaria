import EditProperty from "./property/EditProperty";
import EscenaCard from "./EscenaCard";
import HotSpotCard from "./HotSpotCard";

const HotSpotCardList = (props) => {
  return (
    <div class="col-9">
      <div>
        <h1>HotSpots</h1>
      </div>
      <div className="row">
        {props.hotspots.map((hotspot) => {
          return (
            <div className="col-4">
              {" "}
              {/* añadir key  */}
              <HotSpotCard
                id={hotspot.id}
                name={hotspot.name}
                type={hotspot.type}
                cssClas={hotspot.cssClas}
                escenaId={props.escenaId}
                inmuebleId={props.inmuebleId}
              ></HotSpotCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotSpotCardList;
