import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div> 
            <h1> UR Roundnet </h1>
            <Link to="/about">Learn more about the sport here</Link>
        </div>
    )
}