import React , {useState,useEffect} from 'react'
import './LaunchPad.scss';
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../../assets/coach-talking.jpg'
import Testimonials from '../../../components/Testimonial/Testimonials'
import Banner from '../../../components/Banner/Banner'
import Coursefaq from '../../../components/Coursefaq/Coursefaq'
import {LaunchPadtimeline, emergeProgramdetail} from '../../../Data'


const LaunchPad = () => {

    return (
    <div className='app__container'>
      <Banner name='LaunchPad' subtitle="Derive Yourself" />

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
              <p>Derive Yourself</p>
              <h1>LaunchPad</h1>           
            </div>

            <div  className='image'>
                <img src={coach} alt="" />
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
        <div className='four-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

      </div>

      <div className='timeline-section'>
        <div className='timeline-section__left'>
          <h1>Your <br />Launchpad <br />checklist</h1>

          <p>Specifically Designed – </p>

          <p>Highly Powerful </p>

          <a href="#detail" className='button'>
            Discover More -&gt;
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
                      <AiOutlineHome />
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
        <div className='four-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

        <div className='details'>
          <div className='header'>
            <h1>Program Details:</h1>
            <a >LaunchPad</a>            
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

      <div className='quoate'>
        <h1 className='heading'>To be on the Top you must clearly know where you actually stand.</h1>
        <p>MK.</p>

      </div>  
      
      <Testimonials name="LaunchPad" />
      <Coursefaq name="LaunchPad"/>
    
  
    
 
        
    </div>  
 
  )
}

export default LaunchPad