import {RxSpaceEvenlyHorizontally} from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Newsfeed =()=>{
    const current = new Date();
    const date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()} `; 
  
    return(
        <>
        <div className="newsfeed-container">
            <marquee   behavior="scroll" direction="left" scrollamout="0">
            
                <span className="head-roll">Todays news in our directory <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i></span>
                <span className="first-roll"> <NavLink to="/newspage-1" className="newsfeed-nav">   Federal Government commssioned Second Niger Bridge</NavLink> <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i>  </span>
                <span className="first-roll"> <NavLink to="/newspage-1" className="newsfeed-nav">  The federal road safety FCT command has commended the effort </NavLink> <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i></span>
                <span className="first-roll"> <NavLink to="/newspage-1" className="newsfeed-nav"> Take back your country yesterdays news in our directory</NavLink>  <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i></span>
                <span className="first-roll"><NavLink to="/newspage-1" className="newsfeed-nav">  The youths are the leaders of tomorrow yesterdays news in our directory </NavLink></span>

            </marquee>
   <span className="show-time">{date}</span>
        </div>
        </>
    )
}
export default Newsfeed