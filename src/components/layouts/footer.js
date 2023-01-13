import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiOutlineTwitter}from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import {AiFillYoutube} from "react-icons/ai";
const Footer = ()=>{

    return(

        <div className=" footer-container">
            <h1 className="footer-head">Let's Sale Your Product</h1>
            <div className="footer-div">
                <div className="footer-text-div">

                    <span className="footer-text"> Let's help you meet the right people, promote your business and sale your product, we are at your service any time any day.<br/>
                    Why not use this opportunity to let the world know about that your business, your ideas, talent and that your God giving gift. <br/>
                    We are available 24/7, we sale your product, get you a job, connect you to the right people and entice your with beautiful programs  <br/>
                    For your advert and placement, contact our marketing team, through phone number, email or any of our social media handles </span>
                    <p className="footer-btn">Tell Us About Your Produt </p>
                </div>
                <div className="footer-second-div">
                    <span className="footer-email">Email: <span className="one">ebeanoadi22@gmail.com</span></span>
                    <p className="footer-phone">Pnone: <span className="two">0805665777467 </span> </p>
                    <p className="footer-address">Address: <span className="three">No 5, Odenigbo street, Residency Hotel Ogidi </span></p>
                </div>
               
            </div>
            <div className="footer-icon-div">
            <i className="footer-facebook"><AiFillFacebook size={40}  /></i>
                <i className="footer-instagram"> <AiFillInstagram size={40}/> </i>
                <i className="footer-twitter"> <AiOutlineTwitter size={42} /></i>
                <i className="footer-tiktok"><FaTiktok size={35}/> </i>
                <i className="footer-youtube"> <AiFillYoutube size={40}/></i>
                </div>
                <p className="last-text">©2023 Ebeonadi Radio Tv. Powered by Aiir</p>

        </div>
    )
}
export default Footer