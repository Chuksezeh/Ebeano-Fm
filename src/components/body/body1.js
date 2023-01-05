import React from "react"
import "./body.css"
import radio4 from "./../images/radio4.jpg"
import radio1 from "./../images/radio1.jpg"
import radioz from "./../images/Newspapers-.jpg"
import { NavLink } from "react-router-dom"
const Body1 =()=>{
    return(
        <>
        
            <NavLink to='/news' class="body1-first">

                <div class="eke">
                    <h2>  The UK's Notorious Red list has dunked South Africa’s Tourism  into Trouble Waters</h2>

                </div>
                <img className="first-bodyimage" src={radio4} />


            </NavLink>

            <NavLink to='/news1' class="body1-second">

                <div class="ekene">
                    <h2>  The UK's Notorious Red list has dunked South Africa’s Tourism  into Trouble Waters</h2>
                </div>
                <img className="second-bodyimage" src={radio1} />
            </NavLink>


            <NavLink to='/news2' class="body1-third">

                <div class="ekeneth">
                    <h2>  The UK's Notorious Red list has dunked South Africa’s Tourism  into Trouble Waters</h2>

                </div>
                <img className="third-bodyimage" src={radioz} />
            </NavLink>



        
        
        </>
    )
}
export default Body1