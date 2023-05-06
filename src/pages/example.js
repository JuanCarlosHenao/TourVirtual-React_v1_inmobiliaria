
import { useLocation } from "react-router-dom";
const Example = ({location}) =>{
    let data = useLocation();
    console.log(data); //state would be in data.state//
    return (
        <div>
            <p>Este es un example</p>
            {data}
        </div>
        
    );



}

export default Example; 