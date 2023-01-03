import newsImage1 from "./../images/Newspapers-.jpg"
import newsImage2 from "./../images/news1.jpg"
import newsImage3 from "./../images/news2.jpg"
import newsImage4 from "./../images/news3.jpg"
import newsImage5 from "./../images/news4.jpg"
import newsImage6 from "./../images/news5.jpg"






const News = ()=>{
    return(
        <>
            <div className="new-container">
                <div className="newsimage-container">
                    <img className="newsimage" src={newsImage1} />
                    <p className="news-p">Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</p>
                </div>

                <div className="newsimage-container">
                    <img className="newsimage" src={newsImage2} />
                    <p className="news-p" >Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</p>
                </div>


                <div className="newsimage-container">
                    <img className="newsimage"  src={newsImage3} />
                    <p className="news-p" >Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</p>
                </div>
            </div>

            <div className="second-news">
                <div className="newsimage-container">
                    <img className="newsimage" src={newsImage4} />
                    <p className="news-p" >Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</p>
                </div>

                <div className="newsimage-container">
                    <img className="newsimage" src={newsImage5} />
                    <p className="news-p" >Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</p>
                </div>

                <div className="newsimage-container">
                    <img className="newsimage" src={newsImage6} />
                    <p className="news-p" >Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</p>
                </div>

            </div>
        
        </>
    )
}
export default  News