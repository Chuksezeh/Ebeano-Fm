
import {useState} from "react"
const JobForm =()=>{
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [position, setPosition] = useState('');
 const [additional, setAdditional] = useState('');
 const [resume, setResume] = useState('');
 const [coverLetter, setCoverLetter] = useState('');

    // const onSubmit = (data) => {
    //    console.log(data.value)
    // }
   const initialValues = {firstName:"", lastName:"", email:"", phone:"", position:"", additional:"",resume:"",coverLetter:""}
   const [formValues, setFormValues] = useState(initialValues) 
    const handleSubmit =(e)=>{
       
        const application ={firstName,lastName,email,phone,position,additional,resume,coverLetter};
        const{name,value} =e.target;
        // setFormValues({...formValues,name:value})
        // console.log(application)
    }
    return(
        <>
            <form className="applyform-container" onSubmit={handleSubmit}>
                <label className="name-label">Name *</label> <br />
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="firstname-put" required />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)}  placeholder="Last Name" className="lastname-put" required /><br /><br />
                <label>Email *</label> <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="email-put" required /><br /><br />
                <label>Phone *</label> <br />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="phone-put" required /><br /><br />
                <label>Position *</label><br />
                <input value={position} onChange={(e) => setPosition(e.target.value)} placeholder="position" className="position-put" required /><br /><br />
                <label>Additional (Optional)</label><br />
                <textarea value={additional} onChange={(e) => setAdditional(e.target.value)}  className="additional-put" /><br />
                <div className="resume-div">
                    <div>
                        <label>Resume *</label><br />
                        <label>Upload your resume</label><br />
                         <input value={resume} onChange={(e) => setResume(e.target.value)} type="file"  name="resume"/>
                        
                    </div>
                    <div>
                        <label>Cover Letter *</label><br />
                        <label>Upload Cover Letter</label><br />
                        <input value={coverLetter}onChange={(e) => setCoverLetter(e.target.value)}  type="file"  name="cover"/>
                        
                    </div>
                </div>
                <button className="submitform-btn">Submit Application</button>
                {/* <p>{firstName}</p>
                <p>{cover}</p>
                <p>{email}</p>
                <p>{lastName}</p> */}



        

        
        </form>


        </>
    )
}
export default JobForm