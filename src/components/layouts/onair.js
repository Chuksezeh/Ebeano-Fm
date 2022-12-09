
import Presenter from "./../images/radio3.jpg"
import {AiFillPlayCircle} from "react-icons/ai/"
import {CiMicrophoneOn} from "react-icons/ci"
import{FcClock} from "react-icons/fc"
const OnAir = ()=>{
    return(
        <>
            <div className="onair-div">

                <div>

                    <h2 className="onair-head">On Air Now<i><CiMicrophoneOn /></i> </h2>
                    <p>Morning Show</p>
                    <p>10 AM - 2PM <i><FcClock /></i></p>
                    <h3 className="btn-onair">Listen Live <span className="icon1"><AiFillPlayCircle /></span></h3>
                </div>
                <div className="pic-div">
                    <h4 className="presenter-name">Christian Paul Inoje</h4>
                    <img className="presenter" src={Presenter} />

                </div>

            </div>
        </>
    )
}
export default OnAir