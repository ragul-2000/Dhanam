import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="n-center">
        <h1>DHANAM AGENCIES</h1>
        <h2>"Swift Delivery, Gentle Service - That's Our Promise..."</h2>
        </div>
        <div className="n-right">
            <Link className= 'link' to ='/home'>Home</Link>
            <Link className= 'link' to ='/products'>Products</Link>
            <Link className= 'link' to ='/contact'>Contact-Us</Link>
            <Link className= 'link' to ='aboutus'>About-Us</Link>
        </div>
    </div>

  )
}

export default Navbar