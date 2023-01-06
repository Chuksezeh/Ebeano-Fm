import Changer from "../layouts/changer"
import Header from "../layouts/header"
import Newsfeed from "../layouts/newsfeed"
import OnAir from "../layouts/onair"
import newsImage3 from "../images/Newspapers-.jpg"
import ReplyBox from "./replybox"

const News2 = ()=>{
    return(
        <>
         <Changer />
            <div className="container-header">

                <Header/>
                <OnAir />
            </div>
            <Newsfeed/>

            
        <h1 className="news-head">The UK's Notorious Red list has dunked South Africa’s Tourism  into Trouble Waters</h1>
        <div className="ne-container">
        <img className="img-new" src={newsImage3} />
            
    
            <div>
            Once upon a time, you had to sit by your TV or radio if you wanted to follow a breaking news story and get the most up-to-date information. These days, however, you have plenty of additional options, especially if you have a smartphone.

News Apps
If there’s a particular news organization you like, chances are it has an app that you can download to your mobile device. For example, CNN has an app that’s available for both iOS and Android devices, and it allows you to customize what type of news alerts you receive so you can get as much or as little breaking news as you want. You can also watch 10 minutes of any of the network’s channels (CNN, CNNi or HLN) for free each day, or watch them at any time if you sign in with your cable provider’s information.

Google News
If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google Play Store. Not only can you keep up with worldwide breaking news, but depending on your location and interests, you’ll also receive some news that’s tailored to your life.

Apple News
ADVERTISEMENT

If you have an iPhone or iPad, don’t feel left out. Your device probably came with Apple News installed already if you bought it in 2015 or later. The app for Apple News is on your home screen, and you can launch it anytime or change the settings, alert notices and channels to suit your needs and interests. You can even add a news widget to your Today View screen.

Email Alerts
ADVERTISEMENT

ADVERTISEMENT

If you prefer not to be bothered with pings and alerts and you don’t want to clutter your phone up with apps, sign up for breaking news email alerts. Fox News, for example, offers email alerts as they happen, including major national and international events, major sports and entertainment news and business and stock market breaking news. To sign up, just visit the Fox News website and enter your email address.
Social Media 
Once upon a time, you had to sit by your TV or radio if you wanted to follow a breaking news story and get the most up-to-date information. These days, however, you have plenty of additional options, especially if you have a smartphone.

News Apps
If there’s a particular news organization you like, chances are it has an app that you can download to your mobile device. For example, CNN has an app that’s available for both iOS and Android devices, and it allows you to customize what type of news alerts you receive so you can get as much or as little breaking news as you want. You can also watch 10 minutes of any of the network’s channels (CNN, CNNi or HLN) for free each day, or watch them at any time if you sign in with your cable provider’s information.

Google News
If you have an Android device, Google News is probably already built in, and you can adjust your settings to help ensure you stay current with breaking news. You can access it by swiping right if you’re on the home screen. If you own one of the few devices that didn’t come with Google News built in, you can download the app for free from the Google Play Store. Not only can you keep up with worldwide breaking news, but depending on your location and interests, you’ll also receive some news that’s tailored to your life.

Apple News
ADVERTISEMENT

If you have an iPhone or iPad, don’t feel left out. Your device probably came with Apple News installed already if you bought it in 2015 or later. The app for Apple News is on your home screen, and you can launch it anytime or change the settings, alert notices and channels to suit your needs and interests. You can even add a news widget to your Today View screen.

Email Alerts
ADVERTISEMENT

ADVERTISEMENT

If you prefer not to be bothered with pings and alerts and you don’t want to clutter your phone up with apps, sign up for breaking news email alerts. Fox News, for example, offers email alerts as they happen, including major national and international events, major sports and entertainment news and business and stock market breaking news. To sign up, just visit the Fox News website and enter your email address.
Social Media
            </div>
        </div>
        <ReplyBox/>

        </>
    )
}
export default News2