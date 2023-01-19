 
import ReactAudioPlayer from 'react-audio-player';
import PresentPic from "../images/radio4.jpg"
import music1 from "../Audio/Seyi_Vibez_-_Para_Boi_Speed_Up_.mp3"
// import {audio1} from "../Audio/Seyi_Vibez_-_Para_Boi_Speed_Up_"
 const Player = ()=>{



    return(

        <div className='audio-player'>
            <span className='player-name'>Oluchi Mbachu</span>
            <div className='remove-play'>x</div>
            <h1 className='player-head'>Breakfast Show</h1>
            <p className='play-date'>Friday, 9/12/2022  10:00pm</p>
            <img className='pop-pics' src={PresentPic}/> <br/>
            
            <ReactAudioPlayer className='main-play'
  src={music1}
  play
  controls
  
/>
        </div>
    )

    
 }
 export default Player