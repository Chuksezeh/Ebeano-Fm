import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter}from "react-icons/ai"
import {FaTiktok} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
const SocialMedia = ()=>{
    return (
        <>
            <div className="socialmedia-container">
                <span className="social-head">Follow Us on Social Media</span>
                <i className="facebook-icon"><AiFillFacebook size={50}  /></i>
                <i className="instagram-icon"> <AiFillInstagram size={50}/> </i>
                <i className="twitter-icon"> <AiOutlineTwitter size={50} /></i>
                <i className="tiktok-icon"><FaTiktok size={50}/> </i>
                <i className="youtube-icon"> <AiFillYoutube size={50}/></i>
            </div>
        </>
        
    )
}
export default SocialMedia