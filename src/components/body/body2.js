import photo2 from "./../images/black1.jpg";
import photo3 from "./../images/black2.jpg";
import photo4 from "./../images/black3.jpg";
import photo5 from "./../images/black4.jpg";
import {GrPlayFill} from "react-icons/gr"
import { NavLink } from "react-router-dom";

const Body2 = ()=>{
    return(
        <>
            <div className="body2-container">
                <div className="first-body2container">
                    <div className="body22">
                        <h2 className="program-header">PROGRAMS</h2>
                        <NavLink to="/schedule" className="schedule">Schedule</NavLink>
            
                        <NavLink to="/listenlive" className="listen2">Listen <i className="icon-play"><GrPlayFill/></i></NavLink>
                        
                    </div>
                    <div className="body2-secondcontainer">
                        <NavLink to="/programs" className="body3">
                        <span className="lday">Late Night Show</span>
                            <span className="day-time">6:00 PM - 7:00PM</span>
                            <img className="img2" src={photo2} />
                            
                        </NavLink>

                        <div className="body4">

                            <img className="img2" src={photo3} />

                            <span className="lnight">Sports Show</span>
                            <span className="ltime">6:00 PM - 7:00PM</span>

                        </div>

                        <div className="body5">

                            <img className="img2" src={photo4} />

                            <span className="lnight">Waka Show</span>
                            <span className="ltime">6:00 PM - 7:00PM</span>

                        </div>

                        <div className="body6">

                            <img className="img2" src={photo5} />

                            <span className="lnight">Emotion Control </span>
                            <span className="ltime">6:00 PM - 7:00PM</span>

                        </div>

                    </div>
                </div>
                

            </div>
        </>
    )
}
export default Body2