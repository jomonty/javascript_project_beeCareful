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
        <div className="header-wrapper">
            <img src={logo} id="logo" alt=""/>
            <ul className="navbar">
                <li>
                    <Link to="/"><button id="btn-navbar-selected">Currently Viewing: {apiaryData.name}</button></Link>
                </li>
                <div className="apiaries-colonies-nav">
                <li>
                    <Link to="/"><button id="btn-navbar">Apiaries</button></Link>
                </li>
                <li>
                    <Link to="/colonies"><button id="btn-navbar">Colonies</button></Link>
                </li>
                </div>
            </ul>
        </div>
    );
};

export default NavBar;


