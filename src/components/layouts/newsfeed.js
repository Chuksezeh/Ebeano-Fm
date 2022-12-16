import {RxSpaceEvenlyHorizontally} from "react-icons/rx"
const Newsfeed =()=>{
    return(
        <>
        <div className="newsfeed-container">
            <marquee   behavior="scroll" direction="left" scrollamout="0">
                <span className="trending">Trending News:</span>
                <span className="first-roll">Todays news in our directory <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i></span>
                <span className="second-roll">Yesterdays news in our directory <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i>  </span>
                <span className="third-roll">The federal road safety FCT command has commended the effort  <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i></span>
                <span className="third-roll">Take back your country yesterdays news in our directory <i className="icon-scroll"><RxSpaceEvenlyHorizontally/></i></span>
                <span className="third-roll">The youths are the leaders of tomorrow yesterdays news in our directory</span>

            </marquee>

        </div>
        </>
    )
}
export default Newsfeed