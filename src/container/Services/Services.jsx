import React , {useState,useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../assets/coach-talking.jpg'
import Testimonials from '../../components/Testimonial/Testimonials'
import Banner from '../../components/Banner/Banner'
import Coursefaq from '../../components/Coursefaq/Coursefaq'
import {ProgramDetail} from '../../Data'
import './Services.scss'

import endofyou from "../../assets/endOfYou.gif"
import pressButton from "../../assets/pressButton.gif"

const Services = () => {

  return (
    <div className='app__container'>
      <Banner name='Get Trained' subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo"/>

      <div id = 'quoate' className='course-feature'>
        <span className='heading'>
          <p>
          “Data has always been there. <br /> Capability to hold & deliver, is rare!”
          </p>
        </span>
        <p className='desc'>– MK, YOUR PERSONAL TRANSFORMATION COACH</p>
        <div className='four-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

      </div>

      <div className='first-media'>
        {/* <img src={fenching} alt="" /> */}

      </div>



      <div id='detail' className='program-details'>        
        <div className='header'>
          <div className='header-left'>
            <span>WHAT WE OFFER</span>
            <h1>Scope Our Programs:</h1>
          </div>
          <div className='header-right'>  
            <a>Transcend</a>  
          </div>          
        </div>

        <div className='separator'></div>

        <div className='detail-content'>
          {ProgramDetail.map((item, index) => (
            <div key = {index} className='card'>

              <div className='card-header'>
                <div className='icon'>
                  <img src={item.icon} alt="" />
                </div>
            
                <h1>{item.title}</h1>
              </div>
              <div className='card-content'>
                <p>{item.content}</p>
                <a href={item.url}>Know More.</a>
              </div>
              
            </div>

          ))}          

        </div>       

      </div>
      
      <div className="second-media">

      </div>

      <div className='multiple-media'>
        <div className='media'>
          <img className="sub-media-1" src={endofyou} alt="" />
          <img className="sub-media-1 dimension" src={pressButton} alt="" />
        </div>        

        <div className='quoates'>
          <h1 className='heading'>You ARE ALIVE BECAUSE YOU DARE!</h1>
        </div>  

      </div>

      <div className="last-media">

      </div>



      <Testimonials name="Our Programs"/>
      <Coursefaq name="Our Programs"/>
    
  
    
 
        
    </div>  
 
  )
}

export default Services