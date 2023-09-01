import React , {useState,useEffect} from 'react'
import './LaunchPad.scss';
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../../assets/coach-talking.jpg'
import Testimonials from '../../../components/Testimonial/Testimonials'
import Banner from '../../../components/Banner/Banner'
import Coursefaq from '../../../components/Coursefaq/Coursefaq'
import {LaunchPadtimeline, emergeProgramdetail} from '../../../Data'
import launchpadLogo from '../../../assets/launchpadLogo.png'
import launchpadPhoto from '../../../assets/launchpadPhoto.png'
import greendotart from '../../../assets/greendotart.png'
const LaunchPad = ({link}) => {

    return (
    <div className='app__container'>
      <Banner img={launchpadLogo} name='LaunchPad' subtitle="Derive Yourself" />

      <div className='mid-apply-section'>

        <div className='mid-apply-section__form'>
          <div className='start-testimonial'>
            <h2>The only thing needed</h2>
            <div>
              <p className='para'>"I think that was the best thing and the only thing needed at that point of time for me."</p>
            </div>

            <div className='testimonial-detail'>
              <div className='client-detail'>
                <p>R.R. - <span>Director of Promotion & Marketing.</span></p>
                

              </div>
              
            </div>

            <a href="#quoate">
                Know More
            </a>
          </div>
        </div>


        <div className='mid-apply-section_image'>          
            <div className='heading'>
              <h1>LaunchPad</h1>           
            </div>

            <div  className='image'>
                <img src={launchpadPhoto} alt="" />
            </div>
        </div>

 

      </div>

      <div id = 'quoate' className='course-feature'>
        <span className='heading'>
          <p>
          “Your Take off - Needs your own Launchpad! <br /> That's it!!”
          </p>
        </span>
        <p className='desc'>– MK, YOUR PERSONAL TRANSFORMATION COACH</p>
        <img src={greendotart} alt="" />
        

      </div>

      <div className='timeline-section'>
        <div className='timeline-section__left'>
          <h1>Your <br />Launchpad <br />checklist</h1>

          <p>Specifically Designed – </p>

          <p>Highly Powerful </p>

          <a href="#detail" className='button'>
            Discover More 
          </a>
        </div>

        <div className='timeline-section__right'>
          <div className='timeline'>
            {LaunchPadtimeline.map((item, index) => (
              <div key= {index} className='timeline-item'>
                <div key = {index} className='timeline-content'>
                  <div className='timeline-arrow'>
                      
                  </div>
                  <div className='timeline-innercontent'>
                    <div className='icon'>
                      <img src={item.icon} alt="" />
                    </div>
                    <p>
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>

            ))}

          </div>     
          
      
        </div>

      </div>



      <div id='detail' className='program-details'>
        <h1 className='heading'>
          “You're Ready!”
        </h1>
        <img className="image" src={greendotart} alt="" />


        <div className='details'>
          <div className='header'>
            <h1>Program Details:</h1>
         
          </div>

          <div className='separator'></div>

          <div className='detail-content'>
            {emergeProgramdetail.map((item, index) => (
              <div key = {index} className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <img src={item.icon} alt="" />
       
                  </div>
              
                  <h1>{item.heading}</h1>
                </div>
                <p className='card-content'>{item.content}</p>

              </div>

            ))}
            
          </div>
        </div>

        <div  className='applyHere'>
            <a href={`${link}/apply`} >Apply Here</a>
        </div>

      </div>

      <div className='home-quoate'>
        <h1 className='home-heading'>To be on the Top you must clearly know where you actually stand.</h1>
        <p>MK.</p>

      </div> 
      
      {/* <Testimonials name="LaunchPad" /> */}
      {/* <Coursefaq name="LaunchPad"/> */}
    
  
    
 
        
    </div>  
 
  )
}

export default LaunchPad