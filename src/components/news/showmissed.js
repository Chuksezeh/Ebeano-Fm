import missedimage1 from "./../images/radio4.jpg";
import missedimage2 from "./../images/radio3.jpg";
import missedimage3 from "./../images/radio1.jpg";
import missedimage4 from "./../images/enter1.jpg";
import missedimage5 from "./../images/enter3.jpg";
import {BsSearch} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import React,{useState} from "react";
import Popup from "./../directpages/player"
import{ missedData } from "../directpages/missdata"


const ShowMissed =()=>{
  const [isOPen, setIsopen] = useState('')
  const togglePopup = ()=>{
    setIsopen(!isOPen);

  }
  
  const [missedName, setMissedName] = useState('')
  // console.log("data",missedData)
//  const [query, setQuery] = useState("")
  // missedData.filter(data=>data.missedName.toLocaleLowerCase().includes('d'))
  // console.log(missedName)
  //missedData.splice(0,8);

    return(
        <>
        <div className="display-missed">
            <u><h2 className="missed-header">MISSED A SHOW? LISTEN AGAIN</h2></u>
            <div className="search-missed">
              <input className="missed-btn" placeholder="Search..." onChange={(e) => setMissedName(e.target.value)}/>
              <i className="search-icon"><BsSearch/></i> 
            </div>
            <div>
              {missedData.filter((data)=>data.missedName.toLowerCase().includes(missedName)).map((name) =>(
                <div className="missed1" onClick={togglePopup} key={name.id}>
                {isOPen && <Popup/>}
                  <img className="missedimage1" src={missedimage1}/>
                  {/* <NavLink to="/player"><h3  className="missed-subhead">Breakfast Show</h3></NavLink> */}
                  <h3 key={name.id} className="missed-subhead">{name.missedName}</h3>
                  <span className="missed-time">10PM -10/10/2022</span><></>
                </div>
                
              ))}
            </div>
          

            {/* <div className="missed1">
              <img className="missedimage1" src={missedimage2}/>
              
              <h3 className="missed-subhead">Sports Show</h3>
              <span className="missed-time">10PM -10/10/2022</span>
            </div>

            <div className="missed1">
              <img className="missedimage1" src={missedimage3}/>
              
              <h3 className="missed-subhead">Leen on Me</h3>
              <span className="missed-time">10PM -10/10/2022</span>
            </div>

            <div className="missed1">
              <img className="missedimage1" src={missedimage4}/>
              
              <h3 className="missed-subhead">Fastrack Show</h3>
              <span className="missed-time">10PM -10/10/2022</span>
            </div>

            <div className="missed1">
              <img className="missedimage1" src={missedimage5}/>
              
              <h3 className="missed-subhead">Road Show</h3>
              <span className="missed-time">10PM -10/10/2022</span>
            </div> */}

            

        </div>
        </>
    )
}

export default ShowMissed