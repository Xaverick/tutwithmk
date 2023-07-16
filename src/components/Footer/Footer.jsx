import React from 'react'
import './Footer.scss'
import {AiOutlineMail} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import logo from '../../assets/logo.png'
import styled from 'styled-components'
const Footer = () => {
  return (
    <div className='app__footer'>
      <div className="upper-footer">

        <div className="section">
          <img src={logo} alt="" />
          <p>Template kit for a business coach. Design with dark style. Easy to edit without any code. Just drag and drop.</p>
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
          <ul>
            <li className='list'>
              <div className='icon'>
                <AiOutlineMail />
              </div>
              <div className='content'>
                <h3>Email Us</h3>
                <p>ksdnaks@gmail.com</p>
              </div>
            </li>

            <li className='list'>
              <div className='icon'>
                <FaInstagram />
              </div>
              <div className='content'>
                <h3>Instagram</h3>
           
              </div>
            </li>

            <li className='list'>
              <div className='icon'>
                <AiOutlineLinkedin />
              </div>
              <div className='content'>
                <h3>LinkendIn</h3>
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