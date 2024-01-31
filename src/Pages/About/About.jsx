import React from 'react'
import "./About.css"
import about from "../../assets/about.jpg"

const About = () => {
  return (
    <>
    <h1>About Us</h1>
    <div className='about'>
      <div className="a-left">
      <h3>We are a leading soft drinks supplier with a legacy of 25 years, proudly associated with Kalimark products. Our commitment is to deliver a wide range of refreshing beverages to stores with a special focus on quality and taste.<br/>
      <br />
      <br />
Experience the convenience of our services – we provide free delivery for bulk orders along with exclusive discounts. Whether you're a store owner or looking to stock up for an event, we've got you covered.</h3>
      </div>
      <div className="a-right">
      <img src={about} alt="" />
      </div>
      
    </div>
    </>

  )
}

export default About