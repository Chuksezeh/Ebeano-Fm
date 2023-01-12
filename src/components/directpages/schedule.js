import Newsfeed from "../layouts/newsfeed"
import ShowMissed from "../news/showmissed"
import Monday from "./daysprogram/monday"
import MainNews from "./secondheader"
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiOutlineTwitter}from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import {AiFillYoutube} from "react-icons/ai";

const Schedule = ()=>{
    return(
        <>
  <MainNews/>
  <Newsfeed/>


  <h1 className="schedule-head">Schedule</h1>
  <div className="schedule-container">
    
    <div className="scheduleday-container">
    <button className="schedule-day">Monday</button>
    <button className="schedule-day">Tuesday</button>
    <button className="schedule-day">Wednesday</button>
    <button className="schedule-day" >Thursday</button>
    <button className="schedule-day">Friday</button>
    <button className="schedule-day">Saturday</button>
    <button className="schedule-day" >Sunday</button>
    </div>
    <div className="schedule-social">
    
                <i className="facebook-ico"><AiFillFacebook size={20}  /></i>
                <i className="instagram-icon"> <AiFillInstagram size={20}/> </i>
                <i className="twitter-icon"> <AiOutlineTwitter size={20} /></i>
                <i className="tiktok-icon"><FaTiktok size={20}/> </i>
                <i className="youtube-icon"> <AiFillYoutube size={20}/></i>
    </div>
    
    
  </div>
  <Monday/>
  

        </>
    )
}
export default Schedule