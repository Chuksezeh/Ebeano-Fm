
import Presenter from "./../images/radio3.jpg";
import {GoPlay} from "react-icons/go";
import {CiMicrophoneOn} from "react-icons/ci";
import{ImClock} from "react-icons/im";
import { NavLink } from "react-router-dom";
const OnAir = ()=>{
    return(
        <>
            <div className="onair-div">

                <div>

                    <h2 className="onair-head">On Air Now<i><CiMicrophoneOn /></i> </h2>
                    <u><h3 className="morning-show">Morning Show</h3></u>
                    <p className="onair-time">10 AM - 2PM <i><ImClock /></i></p>
                    <NavLink to='/listenlive' className="listen-link">
                    <div className="listen">Listen Live <span className="play-icon"><GoPlay size={50} /></span></div>
                    </NavLink>
                </div>
                <div className="pic-div">
                    <h3 className="presenter-name">Christian Paul Inoje</h3>
                    <img className="presenter" src={Presenter} />

                </div>

            </div>
        </>
    )
}
export default OnAir