
const ReplyBox = ()=>{

    return(
        // <div className="reply-container">
        //     <h3 className="reply-head" >Leave a Reply</h3>
        //     <div className="reply-div">
        //         <label className="box- head ">Your Email Address Will not be Published. Required Fields are Marked*</label> <br />
        //         <input className="reply-box" placeholder="comment" required /> <br />
        //         <label className="name-head" >Name</label><br />
        //         <input className="name-field" required /><br />
        //         <label className="email-head">Email</label><br />
        //         <input className="email-field" required /><br />
        //         <button>Post Comment</button>

        //     </div>

        // </div>
        <div className="contactform-div">
                <form>
                    <h2 className="contact-head">Feel Free to Share Your Thought</h2>
                    <input className="contact-name" type="text" placeholder="Your Name" required />
                    <input className="contact-email" type="text" placeholder="Your Email" required />
                    <input className="contact-text" type="text" placeholder="Comment" required /><br />
                    <button className="contact-btn">Post Comment</button>
                </form>


            </div>


    )
    }
    export default ReplyBox