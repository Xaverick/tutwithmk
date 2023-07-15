import React from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='app__flex start'>
      <div className='app__navbar app__flex'>
        <div className='app__navbarLogo'>
          <img src={logo} alt="" />
        </div>
        
        <ul className='app__navbar-links'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">X-Factor</a></li>
          <li><a href="/services">Get Trained</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className='app__navbar-button'>
          <a href="/">Get in Started</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar