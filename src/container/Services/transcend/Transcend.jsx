import React , {useState,useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../../assets/coach-talking.jpg'
import Testimonials from '../../../components/Testimonial/Testimonials'
import Banner from '../../../components/Banner/Banner'
import Coursefaq from '../../../components/Coursefaq/Coursefaq'
import {transcendTimeline, emergeProgramdetail} from '../../../Data'
import './Transcend.scss'

const Transcend = () => {

  return (
    <div className='app__container'>
      <Banner name='Transcend' subtitle="To Your Orbit"/>

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
              <p> To Your Orbit</p>
              <h1>Transcend</h1>           
            </div>

            <div  className='image'>
                <img src={coach} alt="" />
            </div>
        </div>

 

      </div>

      <div id = 'quoate' className='course-feature'>
        <span className='heading'>
          <p>
          “Get ready to undergo <br />INTENSE TRANSFORMATION!! <br /> <br /> You'll Never Be The Same Again!”
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
          <h1>Includes:</h1>

          <p>Rare to find Materials, Never-Ever Heard & Done Training Sessions, Video Recordings, On the Ground application with Groups, Fine tuning Sessions with 100% Results – I Guarantee!</p>

          <a href="#detail" className='button'>
            Discover More -&gt;
          </a>
        </div>

        <div className='timeline-section__right'>
          <div className='timeline'>
            {transcendTimeline.map((item, index) => (
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
            <a>Transcend</a>            
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
        <h1 className='heading'>I'll rather have you Transcend than being good at thing– <br />'coz only Mediocres are –good. <br /> Winners Perform "Excellence" – again & Again & AGAIN! <br /> They are in their Orbit – It's time you command Yours!</h1>
        <p>MK.</p>

      </div>  
      
      <Testimonials name="T r a n s c e n d"/>
      <Coursefaq name="Transcend"/>
    
  
    
 
        
    </div>  
 
  )
}

export default Transcend