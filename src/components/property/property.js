import './property.css';

const Property = (props) => {
    return (
        <div class="card">
            <img src={props.image} alt=""/>
            <div class="description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <button className = "buttonProperty" onClick={() => props.handleClick(props.id-1)}>Know More</button>
            </div>
        </div>
    );
};

export default Property;