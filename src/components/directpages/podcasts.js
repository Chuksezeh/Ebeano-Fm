import snoop from "../images/snoop.jpg";
import timaya from "../images/timaya.jpg";
import beyonce from "../images/beyon.jpg";
import africa from "../images/africachina.jpg";
import preimage1 from "../images/tuface.jpg";
const Podcasts =()=>{
    return(
        <>
       
            <div className="previous-container">
            <h1 className="pre-text">Previously Played</h1>
                <div className="pre-container">
                    <div>
                        <img className="pre-image" src={preimage1} />
                        <p className="art-name">Tuface</p>
                        <p> African Queen</p>
                    </div>
                    <div>
                        <img className="pre-image" src={snoop} />
                        <p className="art-name">Snoop Dog</p>
                        <p>Street Hustler</p>
                    </div>
                    <div>
                        <img className="pre-image" src={africa} />
                        <p className="art-name">Africa China</p>
                        <p>Mr.President</p>
                    </div>
                    <div>
                        <img className="pre-image" src={beyonce} />
                        <p className="art-name">Beyonce</p>
                        <p>Am Sorry</p>
                    </div>
                    <div>
                        <img className="pre-image" src={timaya} />
                        <p className="art-name">Timaya</p>
                        <p>Portharcourt Boys</p>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Podcasts