import Newsfeed from "../layouts/newsfeed"
import ShowMissed from "../news/showmissed"
import Monday from "./daysprogram/monday"
import MainNews from "./secondheader"
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiOutlineTwitter}from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import {AiFillYoutube} from "react-icons/ai";
import Footer from "../layouts/footer";
import { useState } from "react";
import Tuesday from "./daysprogram/tuesday";
import Wednesday from "./daysprogram/wednesday";
import Thursday from "./daysprogram/thursday";
import Friday from "./daysprogram/friday";
import Saturday from "./daysprogram/saturday";
import Sunday from "./daysprogram/sunday";

const Schedule = ()=>{

  const [scheduleShow, setscheduleShow] = useState('');

  function showSchedule (first){
    console.log('first',first);
    setscheduleShow(first);
    componentShow()

  } 
   const componentShow = () =>{
    if (scheduleShow ==='monday') {
      return(
        <Monday/>
      )

    } else if(scheduleShow ==='tuesday'){
      return(
        <Tuesday/>
      )
    }else if(scheduleShow ==='wednesday'){
      return(
        <Wednesday/>
      )
    }else if(scheduleShow ==='thursday'){
      return(
        <Thursday/>
      )
    }else if(scheduleShow ==='friday'){
      return(
        <Friday/>
      )
    }else if(scheduleShow ==='saturday'){
      return(
        <Saturday/>
      )
    }else if(scheduleShow ==='sunday'){
      return(
        <Sunday/>
      )
    }else{
      return(
        <Tuesday/>
      )
    }
  
}
  return(
        <>
  <MainNews/>
  <Newsfeed/>


  <h1 className="schedule-head">Schedule</h1>
  <div className="schedule-container">
    
    <div className="scheduleday-container">
    <button className="schedule-day" onClick={() => showSchedule('monday')}>Monday</button>
    <button className="schedule-day"onClick={() => showSchedule('tuesday')}>Tuesday</button>
    <button className="schedule-day"onClick={() => showSchedule('wednesday')}>Wednesday</button>
    <button className="schedule-day"onClick={() => showSchedule('thursday')} >Thursday</button>
    <button className="schedule-day"onClick={() => showSchedule('friday')}>Friday</button>
    <button className="schedule-day"onClick={() => showSchedule('saturday')}>Saturday</button>
    <button className="schedule-day"onClick={() => showSchedule('sunday')} >Sunday</button>
    </div>
    <div className="schedule-social">
    
                <i className="facebook-ico"><AiFillFacebook size={20}  /></i>
                <i className="instagram-icon"> <AiFillInstagram size={20}/> </i>
                <i className="twitter-icon"> <AiOutlineTwitter size={20} /></i>
                <i className="tiktok-icon"><FaTiktok size={20}/> </i>
                <i className="youtube-icon"> <AiFillYoutube size={20}/></i>
    </div>
    
    
  </div>
  {
    componentShow() 
  }
  {/* <Monday/> */}
  <Footer/>
  
  {
    componentShow() 
  }
        </>
    )
}
export default Schedule