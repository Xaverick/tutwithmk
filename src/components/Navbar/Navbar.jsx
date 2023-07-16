import React, {useState} from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'
import { AiOutlineMenu ,AiOutlineDown} from 'react-icons/ai'
import { HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__flex start'>
      <div className='app__navbar app__flex'>
        <div className='app__navbarLogo'>
          <img src={logo} alt="" />
        </div>
        
        <ul className='app__navbar-links'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">X-Factor</a></li>
          <li>
              <a href="/services" className='realtive-position'>Get Trained </a>
              <ul className='hover-dropdown'>
                <li><a href="/services/launchpad">Launchpad</a></li>
                <li><a href="/services/emerge">Emerge</a></li>
                <li><a href="/services/transcend">Transcend</a></li>
                <li><a href="/services/ownthatstage">Own That Stage</a></li>
                <li><a href="/services/legacy">Legacy</a></li>
               
              </ul>


          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className='app__navbar-button'>
          <a href="/">Get in Started</a>
        </div>

        <div className='app__navbar-menu'>
          <AiOutlineMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div 
              whileInView={{ x : [200,0]}} 
              transition={{duration: 0.65, ease: "easeOut"}}

            >
            <ul>
              <HiX onClick={() => setToggle(false)} />
                <li><a href='/' onClick={() => setToggle(false)}> Home </a></li>
                <li><a href='/about' onClick={() => setToggle(false)}> X-factor </a></li>
                <li>
                  <a href='/services' onClick={() => setToggle(false)}> Get Trained </a>
                  <ul className='hover-dropdown'>
                    <li><a href="/services/launchpad">Launchpad</a></li>
                    <li><a href="/services/emerge">Emerge</a></li>
                    <li><a href="/services/transcend">Transcend</a></li>
                    <li><a href="/services/ownthatstage">Own That Stage</a></li>
                    <li><a href="/services/legacy">Legacy</a></li>
                  
                  </ul>
                
                </li>
                <li><a href='/contact' onClick={() => setToggle(false)}> Contact </a></li>
                <li><a href='/faq' onClick={() => setToggle(false)}> FAQs </a></li>
 
            </ul>
            </motion.div>
          )}
        </div>

      </div>

      
    </nav>
  )
}

export default Navbar