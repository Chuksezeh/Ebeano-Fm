import React from "react"
import "./header.css"
import logo1 from "./../images/logo.png"
const Header = ()=>{
    return(
        <>
            <div className="nav-bar">
                <img className="logo" src={logo1} />
                <h1 className="radio-name">EBEANO FM</h1>
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Music</li>
                    <li>Ebeano Stories</li>
                    <li>News</li>
                    <li>Listen Again</li>
                    <li>Podcast</li>
                </ul>
            </div>

        
        </>
    )
}
export default Header