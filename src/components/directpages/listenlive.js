import {BsFillPlayCircleFill} from "react-icons/bs"
import playingImage from "./../images/orange1.jpg" 
import "./directpages.css"
const ListenLive =()=>{
    return(
        <>
            <div className="listenlive-container">
                <div className="playing-imagediv">
                    <img className="playing-image" src={playingImage} />
                    <div className="music-name">
                    <span>Tuface </span>
                    <span>Looking for me</span>
                    </div>
                </div>
                <div className="toplive">
                    <span className="livett">Live</span> <br/>
                    <span className="podcasttop">Podcasts</span>
                </div>
                <h1 className="ebe-header">EBEONADI RADIO TV</h1>
                <div className="onairnow-div">
                    <i className="playlive-icon"><BsFillPlayCircleFill/></i>
                    <h3>ON AIR NOW</h3>
                    <h3>BREAKFAST SHOW</h3>
                    <span>10pm - 12pm</span>
                </div>

            </div>
            <div className="caller-div">
                <i></i>
                <span>Call: 090000000000</span>
            </div>
        </>
    )
}

export default ListenLive