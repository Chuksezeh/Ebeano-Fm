import React from "react"
import "./header.css"
import logo1 from "./../images/logo.png"
import {NavLink} from "react-router-dom";
import {IoMdArrowDropdown} from "react-icons/io"
const Header = ()=>{
    return(
        <>
            <div className="nav-bar">
                {/* <img className="logo" src={logo1} /> */}
                <h1 className="radio-brand">EBEONADI FM</h1>
                <ul className="nav-list">
                
                    <NavLink className="take-home" to='/'>Home</NavLink>
                    <li className="radio">Radio<IoMdArrowDropdown className="drop-icon"/> <li className="dropdown">
                        <NavLink to="/schedule" className="prog-nav" ><li >Program Synopsis</li></NavLink> <br/>
                        <li>Breaking News</li> <br/>
                        <li>Call in Number</li><br/> 
                        <li>Advert Rate</li>
                         </li>
                    </li>
                    <li>Stories</li>
                    <li>Tv</li>
                    <li>About us </li>
                    <li className="commerce-drop">E-Commerce<IoMdArrowDropdown className="drop-icon"/> <li className="commerce-list">
                       <li>Place Advert</li> <br/>
                       <li>Our Products</li><br/>
                       <li>Cheap Items</li><br/>
                       <li>Buy Product</li><br/>
                       <li>Sell Product</li> 
                    </li>
                    </li>
                    <li className="job-drop">Jobs<IoMdArrowDropdown className="drop-icon"/><li className="job-list">
                       <li>Advertise Job</li><br/>
                       <li>Get Job</li> 
                        </li> 

                    </li>
                    
                </ul>
            </div>

        
            
        </>
    )
}
export default Header


