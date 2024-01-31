import React, { useRef, useState } from 'react'
import "./Contact.css"
import { Phone, Mail, Business} from '@mui/icons-material'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const [formData, setFormData] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = formRef.current; 
    emailjs.sendForm('service_0pa5h5k', 'template_rqlnr9p', formElement, 'DqToTsCK3Y-mfJEyU')
      .then((result) => {
          setDone(true)
          console.log(result.text);
          formElement.reset();
          setFormData({
            user_name: "",
            user_subject: "",
            user_email: "",
            message: "",
          });
          console.log("Form data cleared");
      })
      .catch((error) => {
          console.log(error.text);
      });


  }

  const handleChange = (e) => {
    // Update the form data as the user types
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    
    <div className='contact'>
           <div className="c-leftline"></div>
           <div className="c-container">
      <div className="c-left">
        <div className="c-title">
          <h1>If you have any questions or inquiries,<br/>please feel free to contact us:</h1>
        </div>
        <div className="c">
        <div className="c-phone"><Phone/> 9659689481, 8072675412</div>
        <div className="c-mail"><Mail/>dhanamagencies8481@gmail.com</div>
        <div className="c-address"><Business/>No - 3/72, Arubathu Moovar Pettai Road,
koranad, Mayiladuthurai - 609001.</div>
       
      </div>
      </div>
      <div className="c-right">
      <h2>Connect With Us</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' name="user_name" onChange={handleChange}/>
          <input type="text" placeholder='Subject' name="user_subject" onChange={handleChange}/>
          <input type="text" placeholder='Email' name="user_email" onChange={handleChange}/>
          <textarea rows= "5" placeholder='Enter Your Queries...' name='message'onChange={handleChange}/>
          <button>Submit</button>
          <div className="submitted">{done && "Your Response Was Submitted..."}</div>
        </form>

      </div>
      </div>
    
    </div>
  )
}

export default Contact