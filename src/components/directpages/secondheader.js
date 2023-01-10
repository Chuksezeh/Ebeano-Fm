import Header from "../layouts/header";
import {BsFillPlayCircleFill} from "react-icons/bs";
import playingImage from "./../images/tuface.jpg" ;
const MainNews =()=>{

    return(
        
 
        <div className="listenlive-container">
        <Header />
            <div className="playing-imagediv">
                <div className="now-playing">Now Playing</div>
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
                <i className="playlive-icon"><BsFillPlayCircleFill/></i>
                <h2>ON AIR NOW</h2>
                <h3>BREAKFAST SHOW</h3>
                <span>10pm - 12pm</span>
            </div>

        </div>
        
    )
}
export default MainNews