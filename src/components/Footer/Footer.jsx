import React from 'react'
import './Footer.scss'
import {AiOutlineMail} from 'react-icons/ai'
import {FaInstagram, FaYoutube,FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineLinkedin,AiFillLinkedin} from 'react-icons/ai'
import logo from '../../assets/logo.png'
import styled from 'styled-components'
const Footer = () => {
  return (
    <div className='app__footer'>
      
      <div className="upper-footer">

        <div style={{flex:"1.5"}} className="section">
          <img src={logo} alt="" />
          <p className='quoate'>We  Move - The Stars Align.</p>
        </div>

        <div style={{display: "flex", gap:"1rem"}}>
          <div className="section">
            <h3>Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">X-Factor</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
            
          </div>

          <div className="section">
            <h3>Get Trained</h3>
            <ul>
              <li><a href="/services/launchpad">LaunchPad</a></li>
              <li><a href="/services/emerge">Emerge</a></li>
              <li><a href="/services/transcend">Transcend</a></li>
              <li><a href="/services/ownthatstage">Own That Stage</a></li> 
              <li><a href="/services/legacy">Legacy</a></li> 
            </ul>
          </div>
        </div>


        <div className="section"> 
          <h3>Contact</h3>
          <ul className='space'>
            <li className='list'>
              <div className='icon'>
                <AiOutlineMail />
              </div>
              <div className='content'>
                <h3>Email:</h3>
                <p style={{fontSize:"0.9rem"}}>team_mk@transformwithmk.com</p>
              </div>
            </li>

            <li >
              <div style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
                <li className='list'><a href="https://youtube.com/@transformwithMK" target="_blank" rel="noreferrer"><div className='icon'><FaYoutube /></div></a></li>
                <li className='list'><a href="https://www.linkedin.com/in/coachmk" target="_blank" rel="noreferrer"><div className='icon'><FaLinkedinIn /></div></a></li>
                <li className='list'><a href="https://instagram.com/transformwithmk" target="_blank" rel="noreferrer"><div className='icon'><FaInstagram /></div></a></li>
                <li className='list'><a href="https://www.facebook.com/transformwithMK?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><div className='icon'><FaFacebookF /></div></a></li>
              </div>
             
            </li>

          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <p>Copyright © 2023 MK, All rights reserved.</p>
     
      </div>

    </div>
  )
}

export default Footer