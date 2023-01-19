import Header from "../layouts/header"
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsFillBagCheckFill} from "react-icons/bs"
import JobForm from "./jobform"
import Footer from "../layouts/footer"

const ShowJobDetails = ()=>{

    return(
        <>
        <Header/>

            <div className="showdetail-container">
                <h1>Room Service Manager and Control Unit</h1>
                <p className="com-name">Ontrac Technologies Limited</p>
                <div className="showdetail-div">
                    <span>< AiOutlineClockCircle/> 5 hours ago</span>
                    <span className="bag-icon"><BsFillBagCheckFill/> Full Time</span>
                    <p> Responsibilities: </p>
                    • Handling errands and day-to-day tasks as requested.<p />
                    • Screen and direct phone calls and distribute correspondence.< p />
                    • Handle requests and queries appropriately<p />
                    • Manage diary and schedule meetings and appointments<p />
                    • Make travel, accommodation and logistical arrangements<p />
                    • Executing confidential tasks as given by the CEO<p />
                    • Proper & detailed research on tasks as outlined.<p />
                    • Produce reports, presentations and briefs Management of the CEO’s social media.<p />
                    • Responding to messages as required on behalf of the CEO<p />

                    <p>Qualification and Skills:</p>
                    • High School degree or Bsc. in an administrative course<p />
                    • Proven work experience as a Personal Assistant<p />
                    • MS Office and English proficiency<p />
                    • Outstanding organizational and time management skills<p />
                    • Ability to research and retrieve information quickly.<p /> 
                    • Ability to multitask and prioritize daily workload<p />
                    • Excellent verbal and written communications skills<p />
                    • Management of all travel arrangements<p />
                    • Routing/escalating/resolving queries as required<p />
                    • Management and drafting of personal correspondence<p />
                    • Perform other ad-hoc tasks that may be deemed necessary<p />
                    • Flag and debate issues constructively<p />

                    <p>Competencies Required:</p>
                    • Proactiveness and Resilience<p />
                    • Ability to take initiative when required<p />
                    • Great attention to details<p />
                    • Excellent interpersonal communication and problem-solving skills<p />
                    • Drive for results and ensuring excellence in all activities<p />
                    • Time and self-management
                   <p>SEND YOUR CV AND COVER LETTER TO chuksontrac99@gmail.com on or before 20th February 2023</p> 

                </div>
               <p className="apply-here"> Apply Here </p>
               <JobForm/>
            </div>

            <Footer/>
        </>
    )
    
}
export default ShowJobDetails