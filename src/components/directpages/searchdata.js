 

 import { useState } from "react"
import{datas} from "../directpages/data"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
 const SearchData = ()=>{


return(
    <>
    <Header/>
    <div className="tv-container">
    <iframe width="90%" height="615" src="https://www.youtube.com/embed/m4yWp0PQAGY" 
    title="YouTube video player" frameborder="50"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>

    </div>
    <div className="watchtv-container">
        <h1 className="watch-tv">See All Our Interesting Programs</h1>
        <h2 className="gets-you">Ebeonadi Tv Gets you Covered</h2>
    </div>
    
        
    
    <Footer/>
    </>

)
   
    // const [names, setNames] = useState('')
    // // console.log(datas.filter(data=>data.roomTypeName.toLocaleLowerCase().includes('d')))

    // return(

    //     <div>
    //     <input type="text" placeholder="search" onChange={(e) => setNames(e.target.value)}/>
    //        <ul>
    //      {datas.filter (data=>data.roomTypeName.toLocaleLowerCase().includes(names)).map((data) =>(
    //         <li key={data.id} className="listI">{data.roomTypeName}</li>
            
        
    //        ))} 

    //       </ul> 
    //     </div>
    // )
 }
 export default SearchData