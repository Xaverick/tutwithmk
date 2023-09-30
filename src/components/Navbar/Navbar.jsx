import React, {useState} from 'react'
import './Navbar.scss'
import logo2 from '../../assets/logo2.webp'
import { AiOutlineMenu} from 'react-icons/ai'
import { HiX } from 'react-icons/hi'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'
import  {motion,AnimatePresence} from "framer-motion"


const Navbar = ({setIsopen2}) => {
  const [toggle, setToggle] = useState(false)
  const [serviceToggle, setServiceToggle] = useState(false)

  return (
    <nav className='app__flex start'>
      <div className='app__navbar app__flex'>
        <div className='app__navbarLogo'>
          <a href="/"><img src={logo2} alt="" /> </a>
        </div>
        
        <ul className='app__navbar-links'>
          
          <li><a href="/about">MK</a></li>
          <li><a href="/services" className='relative-position'>X-Factor</a></li>
          <li>
              <a className='relative-position nohover'>Get Trained <BiChevronDown /></a>
              <ul className='hover-dropdown'>
                <li><a href="/services/coffewithmk">Koffee With MK</a></li>
                <li><a href="/services/launchpad">Launchpad</a></li>
                <li><a href="/services/emerge">Emerge</a></li>
                <li><a href="/services/transcend">Transcend</a></li>
                <li><a href="/services/ownthatstage">Own That Stage</a></li>
                <li><a href="/services/legacy">Legacy</a></li>
               
              </ul>


          </li>
          <li><a href="/contact">Connect</a></li>
          <li><a href="/blogs">Blogs</a></li>
        </ul>

        <div className='app__navbar-button' onClick={() => setIsopen2(true)}>
          <a >Stress Buster</a>
        </div>

        <div className='app__navbar-menu'>
          <AiOutlineMenu onClick={() => setToggle(true)} className='navbar-icon' />
          {toggle && (
            <motion.div 
              className='sidebar'
              whileInView={{ x : [200,0]}} 
              transition={{duration: 0.65, ease: "easeOut"}}

            >
            <ul>
                <HiX className='navbar-icon' onClick={() => setToggle(false)} />
                
                <li><a href='/' onClick={() => setToggle(false)}> Home </a></li>
                <li><a href='/about' onClick={() => setToggle(false)}> MK </a></li> 
                <li><a href='/services' onClick={() => setToggle(false)}> X-Factor </a></li> 
                <li>
                  <span>
                    <a>Get Trained</a>
                    {serviceToggle ? <BiChevronUp onClick={() => setServiceToggle(false)} /> : <BiChevronDown onClick={() => setServiceToggle(true)} />}
                    <AnimatePresence>
                    {serviceToggle && (
                    
                      <motion.div
                        className="answer"
                        key="content"
                        initial="collapsed"
                        animate="open"                           
                        exit={{ opacity: 0, height: 0 ,padding:0}}
                        transition={{duration: 0.3, ease: "linear"}} 
                        variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 ,padding:0},
                        
                        }}
                      >

                          <li><a href="/services/coffewithmk">Koffee With Mk</a></li>
                          <li><a href="/services/launchpad">Launchpad</a></li>
                          <li><a href="/services/emerge">Emerge</a></li>
                          <li><a href="/services/transcend">Transcend</a></li>
                          <li><a href="/services/ownthatstage">Own That Stage</a></li>
                          <li><a href="/services/legacy">Legacy</a></li>
                      </motion.div>
                        
                    )}
                  </AnimatePresence> 
                  </span>         
                      
                  

                
                </li>
                <li><a href='/contact' onClick={() => setToggle(false)}>Connect</a></li>
                <li><a href='/blogs' onClick={() => setToggle(false)}> Blogs </a></li>
 
            </ul>
            </motion.div>
          )}
        </div>

      </div>

      
    </nav>
  )
}

export default Navbar