import {BsFillPlayCircleFill} from "react-icons/bs"
import Header from "../layouts/header"
import LineImage from "../news/lineImage"
import playingImage from "./../images/tuface.jpg" 
import "./directpages.css"
import Podcasts from "./podcasts"
import React,{useState} from 'react';
const ListenLive =()=>{

    const [state,setState] = useState(false);
    let url= "https://gistfm.mixlr.com/";
    return(
        <>
       
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
                </div> */}
                <div className="onairnow-div">
                    <a className="playlive-icon" href={url}><BsFillPlayCircleFill/></a>
                    <h2>ON AIR NOW</h2>
                    <h3>BREAKFAST SHOW</h3>
                    <span>10pm - 12pm</span>
                </div>

            </div>
            <div className="caller-div">
                
                <span className="call-num"> Call: 09035788897   <span className="contribute"> to Contribute on the Program</span></span>
                
            </div>
            <LineImage />
            <Podcasts />
        </>
    )
}
export default ListenLive
