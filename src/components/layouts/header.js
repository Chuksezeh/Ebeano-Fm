import React, { useState } from "react"
import "./header.css"
import logo1 from "./../images/ebeanologo.jpg"
import {NavLink} from "react-router-dom";
import {IoMdArrowDropdown} from "react-icons/io"
import ContactShow from "../directpages/contactshow";
const Header = ()=>{

 const [contactShow, setContactShow] = useState(false)
 const popContact = ()=>{
    setContactShow(!contactShow)
}

    return(
        <>
            <div className="nav-bar">
            <img className="logo" src={logo1} /> 
                <h1 className="radio-brand">EBEONADI FM</h1>
                <ul className="nav-list">
                
                    <NavLink className="take-home" to='/'>Home</NavLink>
                    <li className="radio">Radio<IoMdArrowDropdown className="drop-icon"/> <li className="dropdown">
                        <NavLink to="/schedule" className="prog-nav" ><li >Program Synopsis</li></NavLink> <br/>
                        <NavLink to="/newspage" className="breaking-nav"><li>Recent News</li> <br/></NavLink>
                        <NavLink to="/listenlive" className="call-nav"><li>Call in Number</li><br/> </NavLink>
                        <NavLink to="/advertrate" className="advert-nav"><li>Advert Rate</li></NavLink>
                         </li>
                    </li>
                    <NavLink to="/news" className="news-nav"><li>Stories</li></NavLink>
                    <NavLink to="/searchdata" className="tv-nav">Tv</NavLink>
                    <NavLink to="/aboutus" className="about-nav"><li>About us </li></NavLink>
                    <li className="commerce-drop">E-Commerce<IoMdArrowDropdown className="drop-icon"/> <li className="commerce-list">
                       <li>Place Advert</li> <br/>
                       <li>Our Products</li><br/>
                       <li>Cheap Items</li><br/>
                       <li>Buy Product</li><br/>
                       <li>Sell Product</li> 
                    </li>
                    </li>
                    <li className="job-drop">Jobs<IoMdArrowDropdown className="drop-icon"/><li className="job-list">
                       <li onClick={popContact}>{contactShow && <ContactShow/>}Post Job</li><br/>
                       <NavLink to="/getjobs" className="getjob-nav"><li>Get Job</li></NavLink> 
                        </li> 

                    </li>
                    
                </ul>
            </div>

        
            
        </>
    )
}
export default Header


