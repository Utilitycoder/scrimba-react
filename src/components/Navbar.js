import React from "react";
import Logo from "../Images/react-icon-small.png"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="" className="nav-icon"/>
            <h3 className="nav-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;