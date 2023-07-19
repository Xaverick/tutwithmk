import React , {useState,useEffect} from 'react'
import './CoffeWithMK.scss'
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../assets/coach-talking.jpg'
import Testimonials from '../../components/Testimonial/Testimonials'
import Banner from '../../components/Banner/Banner'
import Coursefaq from '../../components/Coursefaq/Coursefaq'
import {emergeTimeline, emergeProgramdetail} from '../../Data'


const CoffeWithMk = () => {

  return (
    <div className='app__container'>
      <Banner name='C o f f e e  with  M K' subtitle= "Stress Buster" />

      <div className='mid-apply-section'>

        <div className='mid-apply-section__form'>
          <div className='start-testimonial'>
            <h2>Start Your Testimonial</h2>
            <div>
              <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatem.</p>
            </div>

            <div className='testimonial-detail'>
              <img src="" alt="" />
              <div className='client-detail'>
                <p>Mike</p>
                <span>CEO at lorem</span>

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
              <h1 style={{ letterSpacing:"normal"}}>C o f f e e with  MK</h1>           
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
        <h1 className='heading'>
            "Let's Talk!"
        </h1>
        <div className='four-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

        <div className='details'>
          <div className='header'>
            <h1>Therapeutic Communication! </h1>   
          </div>

          <div className='separator'></div>

          <div className='detail-content'>
            {emergeProgramdetail.map((item, index) => (
              <div key = {index} className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <AiOutlineHome />
                  </div>
              
                  <h1>{item.heading}</h1>
                </div>
                <p className='card-content'>{item.content}</p>

              </div>

            ))}
            

          </div>

        </div>

      </div>
      
      {/* <Testimonials name="E m e r g e" /> */}
      <Coursefaq name="E m e r g e"/>
    
  
    
 
        
    </div>  
 
  )
}

export default CoffeWithMk