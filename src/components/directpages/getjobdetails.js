import Header from "../layouts/header";
import jobsearch1 from "../images/3dsearch.jpg";
import jobsearch2 from "../images/officeimg.jpg";
import jobsearch3 from "../images/job1.jpg"
import { NavLink } from "react-router-dom";
import {datas} from "../directpages/data.js"
import Footer from "../layouts/footer";
import {jobData} from "../directpages/jobdata"
import { useState } from "react";



const GetJobs =()=>{

    const [jobName, setjobName] = useState('')
    const [position, setPosition] = useState('')
    
      console.log(jobData.map((job)=>(
        job.jobName
      )))

    return(

        <div>

            <Header />
            <div className="getjob-container" >
                <div className="jobsearch-text">
                    <h1 className="search-h1">GET YOUR DREAM JOB</h1>
                    <p className="search-p">Looking for job? Check our Listings and Apply Accordingly</p>

                </div>

                <img src={jobsearch2} className="jobsearch-image" />

            </div>


            <input className="jobsearch-input" placeholder="Job Listing" onChange={(e)=>setjobName(e.target.value)} /><button className="jobsearch-btn">Search Jobs...</button>
            <div>

            </div>
            <h1 className="job-category">Job Category:</h1>
            <div className="joblisting-all">
                <div className="showjob2">
                {jobData.filter(data=>data.jobName.toLowerCase().includes(jobName)||
                data.position.toLowerCase().includes(jobName)
                ).map((name) =>(
                <div className="joblisting-container" >
                    <img className="joblisting-image" src={jobsearch1} />
                    <div className="joblisting-text">
                        <span className="jobcompany-name">Company Name:</span><span>{name.jobName}</span> <br /><br />
                        <span className="job-position">Position:</span><span>{name.position}</span> <br /><br />
                        <span className="job-qualify">Qualification:</span><span>HND/B.sc</span><br/><br />
                        <NavLink to="/showjobdetails" className="view-btn">View Details/Apply</NavLink>
                    </div>
            

                </div>

               ))}

                </div>
                

                {/* <div className="joblisting-container">
                    
                    <img className="joblisting-image" src={jobsearch3} />
                    <div className="joblisting-text">
                        <span className="jobcompany-name">Company Name:</span><span>First Company</span> <br /><br />
                        <span className="job-position">Position:</span><span>Marketer</span> <br /><br />
                        <span className="job-qualify">Qualification:</span><span>HND/B.sc</span><br/><br />
                        <NavLink to="/showjobdetails" className="view-btn">View Details/Apply</NavLink>
                    </div>
            

                </div>
                

                <div className="joblisting-container">
                    
                    <img className="joblisting-image" src={jobsearch1} />
                    <div className="joblisting-text">
                        <span className="jobcompany-name">Company Name:</span><span>First Company</span> <br /><br />
                        <span className="job-position">Position:</span><span>Marketer</span> <br /><br />
                        <span className="job-qualify">Qualification:</span><span>HND/B.sc</span><br/><br />
                        <NavLink to="/showjobdetails" className="view-btn">View Details/Apply</NavLink>
                    </div>
            

                </div>
                

                <div className="joblisting-container">
                    
                    <img className="joblisting-image" src={jobsearch1} />
                    <div className="joblisting-text">
                        <span className="jobcompany-name">Company Name:</span><span>First Company</span> <br /><br />
                        <span className="job-position">Position:</span><span>Marketer</span> <br /><br />
                        <span className="job-qualify">Qualification:</span><span>HND/B.sc</span><br/><br />
                        <NavLink to="/showjobdetails" className="view-btn">View Details/Apply</NavLink>
                    </div>
            

                </div>
                 */}
                
                
                

            </div>


      <Footer/>
        </div>


    )
}
export default GetJobs