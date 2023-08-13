import React , {useState,useEffect} from 'react'
import './CoffeWithMK.scss'
import {AiOutlineHome} from 'react-icons/ai'
import {BsCurrencyDollar} from 'react-icons/bs'
import {SlPeople} from 'react-icons/sl'
import {SiGnuprivacyguard} from 'react-icons/si'
import coach from '../../assets/coach-talking.jpg'
import Testimonials from '../../components/Testimonial/Testimonials'
import Banner from '../../components/Banner/Banner'
import Coursefaq from '../../components/Coursefaq/Coursefaq'
import {emergeTimeline, coffeeProgramdetail} from '../../Data'
import coffee from '../../assets/coffee-popup.gif'

const CoffeWithMk = () => {

  return (
    <div className='app__container'>
      {/* <Banner name='Koffee  with  MK' subtitle= "Stress Buster" /> */}
      <div className="koffee-banner">
        <img src={coffee} alt="" />

      </div>

      <div className='mid-apply-section'>

        <div className='mid-apply-section__form'>
          <div className='start-testimonial'>
            <h2>It gave me an insight</h2>
            <div>
              <p className='para'>"It gave me an insight into myself...Now I am a better person."</p>
            </div>

            <div className='testimonial-detail'>
              <div className='client-detail'>
                <p>R.C. - <span>HR Consultant</span></p>
                

              </div>
              
            </div>

            <a href="#quoate">
                Know More.
            </a>
          </div>
        </div>
        

        <div className='mid-apply-section_image'>          
            <div className='heading'>
              <p>Stress Buster</p>
              <h1 style={{ letterSpacing:"normal"}}>K o f f e e with  MK</h1>           
            </div>

            <div  className='image'>
                <img src={coach} alt="" />
            </div>
        </div>

 

      </div>

      <div className='ownquoate'>
        <h1 className='heading'>In this specially designed Stress Buster session, You can talk about Anything but I encourage you to talk about Everything. Only You & Me. No pen or paper.</h1>

      </div> 




      <div id='detail' className='program-details'>
        <h1 style={{width:"100%"}} className='heading'>
            Therapeutic Communication!
        </h1>
        <h1 className='heading'>
            Let's Talk!
        </h1>
        <div className='four-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

        <div className='details'>
          <div className='header'>
            <h1>Details: </h1>   
          </div>

          <div className='separator'></div>

          <div className='detail-content'>
          
              <div  className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <SlPeople /> 
                  </div>
              
                  <h1>Session</h1>
                </div>
                <p className='card-content'>1-on-1</p>

              </div>

              <div  className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <BsCurrencyDollar />
                  </div>
              
                  <h1>Pricing</h1>
                </div>
                <p className='card-content'>$ 300</p>

              </div>

              <div className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <SiGnuprivacyguard /> 
                  </div>
              
                  <h1>Confidentiality</h1>
                </div>
                <p className='card-content'>These are Confidential Sessions</p>

              </div>                       
                      
          </div>

        </div>

      </div>
      
      {/* <Testimonials name="E m e r g e" /> */}
      <Coursefaq name="E m e r g e"/>
    
  
    
 
        
    </div>  
 
  )
}

export default CoffeWithMk