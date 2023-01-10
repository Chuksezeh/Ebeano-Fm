import Newsfeed from "../layouts/newsfeed";
import MainNews from "./secondheader";
import Newspic1 from "../images/Newspapers-.jpg";
import sidewspic1 from "../images/news1.jpg";
import sidewspic2 from "../images/news2.jpg";
import sidewspic3 from "../images/news3.jpg";
import ReplyBox from "./replybox";


const NewsPage =()=>{

return(
  <>
  <MainNews/>
  <Newsfeed/>

    <div className="newsdiv-container">
      

      <div className="newsdis-div">
        <h1 className="newspage-head">Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</h1>
        <p className="newspage-time">January 09, 2023</p>
        <img className="newspage-pic1" src={Newspic1} />
        <div className="newspage-text">
        Busimmment. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where career growth and pragmatic ideas are necesscommunicator, with a solid academic background in Public Administration, Advertising, Communication and Management. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where career growth and pragmatic ideas are necessary for effective and efficient application of my knowledge and skills.ary for effective and efficient application of my knowledge and skills.agmatic ideas are necessary for effective and efficient application of my knowledge and skills.ary for effective and efficient application of my knowledge and skills.d pragmatic ideas are necessary for effective and efficient application of my knowledge and skills.mmunicator, with a solid academic background in Public Administration, Advertising, Communication and Management. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where career growth and pragmatic ideas are necessary for effective and efficient application of my knowledge and skills.tor, with a solid acadecommunicator, with a solid academic background in Public Administration, Advertising, Communication and Management. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where cacommunicator, with a solid academic background in Public Administration, Advertising, Communication and Management. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where career growth and communicator, with a solid academic background in Public Administration, Advertising, Communication and Management. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where career growth and pracommunicator, with a solid academic background in Public Administration, Advertising, Communication and Management. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where career growth and pragmatic ideas are necessary for effective and efficient application of my knowledge and skills.gmatic ideas are necessary for effective and efficient application of my knowledge and skills.pragmatic ideas are necessary for effective and efficient application of my knowledge and skills.reer growth and pragmatic ideas are necessary for effective and efficient application of my knowledge and skills.mic background in Public Administration, Advertising, Communication and Management. I have in-depth experience in Business Management, and more than four 5 years experience in Business Development and Hospitality Management. I am people oriented, a team leader and player that strongly believes in good communication and creativity. I am looking forward to obtaining an administrative position in a Hospitality industry where career growth and pragmatic ideas are necessary for effective and efficient application of my knowledge and skills.
      </div>
      </div>

      <div className="side-news-div">
        <h2 className="sidenews-head">Recent News</h2>
        <div className="sidenews-content" >
          <img  className="sidenews-pic" src={sidewspic1}/>
          <h3>Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</h3>
       <p className="sidenews-time">January 09, 2023</p>
        </div>
        <div className="sidenews-content">
          <img className="sidenews-pic" src={sidewspic2}/>
          <h3>Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</h3>
          <p className="sidenews-time">January 09, 2023</p>
        </div>
        <div className="sidenews-content">
          <img className="sidenews-pic" src={sidewspic3}/>
          <h3>Nigerian Military, Security Agencies Not Under Pressure To Compromise 2023 Elections</h3>
          <p className="sidenews-time">January 09, 2023</p>
        </div>
      </div>

    </div> <br/><br/><br/><br/>
    <ReplyBox/>
  </>

)
}
export default NewsPage
