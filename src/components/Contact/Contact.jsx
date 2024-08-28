import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
 
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "215af535-eb4c-4dd5-92a8-e7e0cf1057f9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    

  return (
    <div id='contact' className='contact'>
    <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern}/>
    </div>
    <div className='contact-section'>
        <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>Highly motivated and diligent B.TECH graduate seeking entry -level opportunities in IT sector to utilize technical  skills 
            and contribute effectively to organization while gaining valuable experience and professional growth </p>
            <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mail_icon}/><p>ydsuraj@gmail.com</p>
                </div>
                <div className='contact-detail'>
                    <img src={call_icon}/><p>+91-9650927491</p>
                </div>
                <div className='contact-detail'>
                    <img src={location_icon}/><p>Faridabad,Haryana</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter Your Name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter Your email' name='email'/>
            <label htmlFor=''>Write your message here</label>
            <textarea name='message' rows="8" placeholder='Enter your message'/>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
    </div>
      
    </div>
  )
}

export default Contact
