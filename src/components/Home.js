import React from "react"
import Body1 from "./body/body1"
import Body2 from "./body/body2"
import Changer from "./layouts/changer"
import Header from "./layouts/header"
import OnAir from "./layouts/onair"
import Entertainment from "./news/Entertaiment"
import LineImage from "./news/lineImage"
import News from "./news/news"
import Podcast from "./news/podcast"
import ShowMissed from "./news/showmissed"
import SocialMedia from "./news/socialmedia"

const Home = ()=>{
    return(
        <>
            <Changer />
            <div className="container-header">
                
                <Header />
                <OnAir />
            </div>
            <u><h2 className="top-stories">TOP STORIES</h2></u>
            <div className="container-body1">
                
            <Body1 />
            
            
            </div>
            <Body2/>
            <LineImage/>
            <h2 className="news-header">NEWS</h2>
            <SocialMedia/>
           <News/>
           <LineImage/>
           <h2 className="entertainment-header">ENTERTAINMENT</h2>
           <div className="miss-container">
           <ShowMissed/>
           </div>
            <Entertainment/>
            <LineImage/>
            <h2 className="podcast-header">PODCASTS</h2>
            <Podcast/>
            
        </>
    )
}
export default Home