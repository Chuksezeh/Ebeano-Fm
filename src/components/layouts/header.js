import React from "react"
import "./header.css"
import logo1 from "./../images/logo.png"
import {NavLink} from "react-router-dom";
const Header = ()=>{
    return(
        <>
            <div className="nav-bar">
                <img className="logo" src={logo1} />
                <h1 className="radio-name">EBEONADI FM</h1>
                <ul className="nav-list">
                    <NavLink className="take-home" to='/'>Home</NavLink>
                    <li>Music</li>
                    <li>Stories</li>
                    <li>News</li>
                    <li>Listen </li>
                    <li>Podcast</li>
                </ul>
            </div>

        
            
        </>
    )
}
export default Header