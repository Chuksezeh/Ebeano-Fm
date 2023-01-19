import Changer from "../layouts/changer";
import Header from "../layouts/header";
import Newsfeed from "../layouts/newsfeed";
import OnAir from "../layouts/onair";
import photo2 from "../images/black4.jpg";
// import LineImage from "../news/lineImage"
import ShowMissed from "../news/showmissed";
import Footer from "../layouts/footer";

const Program4 =()=>{
    return(
        <>
         <Changer />
            <div className="container-header">

                <Header />
                <OnAir />
            </div>
            <Newsfeed/>
            {/* <LineImage /> */}
            
            <div className="host-container">
                <div className="host-div">
                <span className="prog-name">Late Night Show</span>
                <p className="prog-host">Chizzy Ify  (HOST) - 6:00PM-7:00PM</p>
                <img className="host" src={photo2} />
                </div>
                <ShowMissed /> 
            </div>
            <div className="aboutshow-container">
                <h2>About the Program</h2>
                <div>
                <p className="list-program">-Tell us how your day went through the day, what did you engage in, was day lively </p>
                <p className="list-program">-About your health, did you visit hospital during the day, if yes, which hospital </p>
                <p className="list-program">-Open up about the living condition in your area, call someone to brief him </p>
                <p className="list-program">- How long did it take you to arrive at your working place today, did you go late </p>
                <p className="list-program">- Talk about house rent in your area, is it high or low or affordable, is it encouraging </p>
                <p className="list-program">- Call someone to discuss the better days of your maturity period, did you enjoy that period </p>
                <p className="list-program">-Did you enjoy your childhood, who was your best friend then, are you guys still together </p>
                <p className="list-program">-Talk about your working place and your superior at work, are they nice, or just trying </p>
                </div>

            </div>
          <Footer/>

        </>
    )
}
export default Program4