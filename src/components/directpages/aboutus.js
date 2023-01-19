import logo2 from "../images/ebeanologo.jpg"
import Header from "../layouts/header"
import NEwsLetter from "./newsletter"
const AboutUs =()=>{

    return(
        <>
        <Header/>
 <div>
    <img className="about-image" src={logo2}/>
    <div className="abouttext-div">
    <h2 className="transmit-head">We Transmit on <span className="about-fre"> 103.5</span> Frequency Modulation Band</h2>
    <p className="about-text">The Only Resident Station on 24 hour Transmissin in Anambra State, Nigeria</p>
    <p className="newsletter-text">Subscribe to Our Newsletter for Current News and Exciting Programs</p>

    </div>
 </div>
 <NEwsLetter/>

        </>
    )
}
export default AboutUs