import Newsfeed from "../layouts/newsfeed"
import ShowMissed from "../news/showmissed"
import MainNews from "./secondheader"

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
    <h2 className="schedule-date">Monday, January 09, 2023</h2>
    
  </div>
  

        </>
    )
}
export default Schedule