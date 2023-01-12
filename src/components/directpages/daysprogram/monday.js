import "./daysprogram.css";
import mondaypic from "../../images/enter5.jpg";
import mondaypic1 from "../../images/news4.jpg";
import mondaypic2 from "../../images/black2.jpg";
import mondaypic4 from "../../images/black4.jpg";
import ShowMissed from "../../news/showmissed";
const Monday =()=>{


    return(
        <>
        <div>
        <h2 className="schedule-date">Monday, January 09, 2023</h2> 
        </div>
        <div className=" monday-all">
        
        <div  className="monday-container">
            <div className="vl"></div>
            <span className="monday-time">5:00 -7:00 AM</span>
            <div className="monday-div">
                <img className="monday1-image" src={mondaypic4} />
                <span className="monday-article">each day, or watch them at any time if you sign in with your cable provider’s information. Google News If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google</span>
            </div>
            <hr className="underline"/>
             <br/>

            <div className="vl"></div>
            <span className="monday-time">7:00-9:00 AM</span>
            <div className="monday-div">
                <img className="monday1-image" src={mondaypic2} />
                <span className="moday-article">each day, or watch them at any time if you sign in with your cable provider’s information. Google News If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google</span>
            </div>
            <hr className="underline"/>
            
            <br/>

            <div className="vl"></div>
            <span className="monday-time">9:00 -12:00 PM</span>
            <div className="monday-div">
                <img className="monday1-image" src={mondaypic1} />
                <span className="monday-article">each day, or watch them at any time if you sign in with your cable provider’s information. Google News If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google</span>
            </div>
            <hr className="underline"/>
            
            <br/>

            <div className="vl"></div>
            <span className="monday-time">12:00 - 1:00 PM</span>
            <div className="monday-div">
                <img className="monday1-image" src={mondaypic4} />
                <span className="moday-article">each day, or watch them at any time if you sign in with your cable provider’s information. Google News If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google</span>
            </div>
            <hr className="underline"/>
            <br/>

            <div className="vl"></div>
            <span className="monday-time">2:00-4:00 PM   AM</span>
            <div className="monday-div">
                <img className="monday1-image" src={mondaypic2} />
                <span className="monday-article">each day, or watch them at any time if you sign in with your cable provider’s information. Google News If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google</span>
            </div>
            <hr className="underline"/>
            <br/>

            <div className="vl"></div>
            <span className="monday-time">5:00 - 8:00 PM</span>
            <div className="monday-div">
                <img className="monday1-image" src={mondaypic} />
                <span className="moday-article">each day, or watch them at any time if you sign in with your cable provider’s information. Google News If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google</span>
            </div>
            <hr className="underline"/>
            <br/>



            </div>
            <ShowMissed/> 
        </div>
        </>
        
        

        
    )
}
export default Monday