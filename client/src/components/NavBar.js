import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../img/beecareful4.png";

const NavBar = ({ apiaryData }) => {

    if (!apiaryData) {
        return (
            <></>
        )
    };
    
    return (
        <div className="header">
            <img src={logo} id="logo" alt=""/>
            <h3>{apiaryData.name}</h3>
            <ul className="navbar">
                <li>
                    <Link to="/"><button id="btn-navbar">Apiaries</button></Link>
                </li>
                <li>
                    <Link to="/colonies"><button id="btn-navbar">Colonies</button></Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;


