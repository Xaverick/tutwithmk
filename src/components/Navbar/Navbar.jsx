import React, {useState} from 'react'
import './Navbar.scss'
import logo2 from '../../assets/logo2.webp'
import { AiOutlineMenu} from 'react-icons/ai'
import { HiX } from 'react-icons/hi'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'
import  {motion,AnimatePresence} from "framer-motion"
import { Link } from 'react-router-dom'


const Navbar = ({setIsopen2}) => {
  const [toggle, setToggle] = useState(false)
  const [serviceToggle, setServiceToggle] = useState(false)

  return (
    <nav className='app__flex start'>
      <div className='app__navbar app__flex'>
        <div className='app__navbarLogo'>
          <Link to="/"><img src={logo2} alt="" /> </Link>
        </div>
        
        <ul className='app__navbar-links'>
          
          <li><Link to="/about">MK</Link></li>
          <li><Link to="/services" className='relative-position'>X-Factor</Link></li>
          <li>
              <a className='relative-position nohover'>Get Trained <BiChevronDown /></a>
              <ul className='hover-dropdown'>
                <li><Link to="/services/coffewithmk">Koffee With MK</Link></li>
                <li><Link to="/services/launchpad">Launchpad</Link></li>
                <li><Link to="/services/emerge">Emerge</Link></li>
                <li><Link to="/services/transcend">Transcend</Link></li>
                <li><Link to="/services/ownthatstage">Own That Stage</Link></li>
                <li><Link to="/services/legacy">Legacy</Link></li>
               
              </ul>


          </li>
          <li><Link to="/contact">Connect</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>

        <div className='app__navbar-button' onClick={() => setIsopen2(true)}>
          <a>Stress Buster</a>
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
                
                <li><Link to='/' onClick={() => setToggle(false)}> Home </Link></li>
                <li><Link to='/about' onClick={() => setToggle(false)}> MK </Link></li> 
                <li><Link to='/services' onClick={() => setToggle(false)}> X-Factor </Link></li> 
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

                          <li><Link to="/services/coffewithmk" onClick={() => setToggle(false)}>Koffee With Mk</Link></li>
                          <li><Link to="/services/launchpad" onClick={() => setToggle(false)}>Launchpad</Link></li>
                          <li><Link to="/services/emerge" onClick={() => setToggle(false)}>Emerge</Link></li>
                          <li><Link to="/services/transcend" onClick={() => setToggle(false)}>Transcend</Link></li>
                          <li><Link to="/services/ownthatstage" onClick={() => setToggle(false)}>Own That Stage</Link></li>
                          <li><Link to="/services/legacy" onClick={() => setToggle(false)}>Legacy</Link></li>
                      </motion.div>
                        
                    )}
                  </AnimatePresence> 
                  </span>         
                      
                  

                
                </li>
                <li><Link to='/contact' onClick={() => setToggle(false)}>Connect</Link></li>
                <li><Link to='/blogs' onClick={() => setToggle(false)}> Blogs </Link></li>
 
            </ul>
            </motion.div>
          )}
        </div>

      </div>

      
    </nav>
  )
}

export default Navbar