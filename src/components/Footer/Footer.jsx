import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { Facebook, Instagram, LocationOn, Twitter, WhatsApp } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="f-container">
            <div className="f-about">
                <h1>About Us</h1>
                <p>Learn more about Dhanam Soft Drinks and our commitment to quality and customer satisfaction.</p>
            </div>
            <div className="f-links">
                <h1>Quick Links</h1>
            <Link className= 'f-link' to ='/home'>Home</Link>
            <Link className= 'f-link ' to ='/products'>Products</Link>
            <Link className= 'f-link ' to ='/contactus'>Contact-Us</Link>
            <Link className= 'f-link ' to ='aboutus'>About-Us</Link>
            </div>
            <div className="f-contact">
            <h1>Contact Information</h1>
           <p> Address: No: 3/72, Arubathu Moovar Pettai Road,<br/>
            koranad, Mayiladuthurai - 609001.<br/>
            Phone: 9659698481, 8072675412.<br/>
            Email: dhanamagencies8481@gmail.com</p>
            </div>
        </div>
        <div className="footer-icons">
                <hr className="hr"/>
                <div className="social">
               <a href="">
                 <Instagram className="social-icon" style={{ fontSize: 35 }}/></a>
               <a href="">
               <Facebook className="social-icon" style={{ fontSize: 35 }}/></a>
               <a href="https://wa.me/9659698481">
                <WhatsApp className="social-icon" style={{ fontSize: 35 }} /></a>
              <Twitter className="social-icon" style={{ fontSize: 35 }}/>
              <a href="https://www.google.com/maps/@11.0912874,79.6403633,3a,90y,189.26h,105.32t/data=!3m6!1e1!3m4!1sYYIGC6EAtvdXeshG8uu-3w!2e0!7i13312!8i6656?entry=ttu">
              <LocationOn className="social-icon" style={{ fontSize: 35 }}/>
              </a>
              </div>
            </div>

        <p className='f-end'>© 2023 Dhanam Soft Drinks. All rights reserved.</p>
    </div>
  )
}

export default Footer