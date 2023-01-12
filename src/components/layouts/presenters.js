
import present1 from "./../images/black1.jpg"
import present2 from "./../images/black2.jpg"
import present3 from "./../images/black3.jpg"
import present4 from "./../images/black4.jpg"
const Presenters = ()=>{


    return(
        <>
        
            <div className="presenter-all" >
                <h1>Presenters</h1>
                <div className="presenters-container"  >
                    <div className="presenter-div" >
                        <img className="presenter-img" src={present2} />
                        <p>Name</p>
                    </div>

                    <div className="presenter-div">
                        <img className="presenter-img" src={present2} />
                        <p>Name</p>
                    </div>

                    <div className="presenter-div" >
                        <img className="presenter-img" src={present3} />
                        <p>Name</p>
                    </div>
                    <div className="presenter-div">

                        <img className="presenter-img" src={present4} />
                        <p>Name</p>
                    </div>
                    <div className="presenter-div">

                        <img className="presenter-img" src={present4} />
                        <p>Name</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Presenters