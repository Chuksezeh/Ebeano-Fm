import Header from "../layouts/header";
import {BsFillPlayCircleFill} from "react-icons/bs";
import playingImage from "./../images/tuface.jpg" ;
import React,{useState} from 'react';
const MainNews =()=>{
    const [state,setState] = useState(false);
    let url= "https://gistfm.mixlr.com/";

    return(
        
 
        <div className="listenlive-container">
        <Header />
            <div className="playing-imagediv">
                <div className="now-playing">On Air</div>
                <img className="playing-image" src={playingImage} />
                <div className="music-name">
                <span>Tuface -</span>
                <span>Looking for me</span>
                
                </div>
                
            </div>
            

            {/* <div className="toplive">
                <span className="livett">Live</span>
                <span className="podcasttop">Podcasts</span>
            </div>  */}
            <div className="onairnow-div">
                <a href={url} className="playlive-icon"><BsFillPlayCircleFill/></a>
                <h2>ON AIR NOW</h2>
                <h3>BREAKFAST SHOW</h3>
                <span>10pm - 12pm</span>
            </div>

        </div>
        
    )
}
export default MainNews