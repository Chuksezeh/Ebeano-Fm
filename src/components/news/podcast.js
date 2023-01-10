import pod1 from "./../images/enter4.jpg";
import pod2 from "./../images/enter5.jpg";
import pod3 from "./../images/radio1.jpg";
import pod4 from "./../images/imagess.jpg";
const Podcast = ()=>{
    return(
        <>
        <div className="podcast-container">
            <div className="podcast-div">
              <img className="podcast-image" src={pod1}/>
              <p className="pod-p">
              can stick notes into pretty much any old app, even if it's not really designed for
              </p>
            </div>

            <div className="podcast-div">
              <img className="podcast-image" src={pod2}/>
              <p className="pod-p">
              can stick notes into pretty much any old app, even if it's not really designed for
              </p>
            </div>
            

            <div className="podcast-div">
              <img className="podcast-image" src={pod3}/>
              <p className="pod-p">
              can stick notes into pretty much any old app, even if it's not really designed for
              </p>
            </div>

            <div className="podcast-div">
              <img className="podcast-image" src={pod4}/>
              <p className="pod-p">
              can stick notes into pretty much any old app, even if it's not really designed for
              </p>
            </div>

        </div>

        
        </>
    )
}

export default Podcast