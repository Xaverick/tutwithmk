import React , {useState,useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../../assets/coach-talking.jpg'
import Testimonials from '../../../components/Testimonial/Testimonials'
import Banner from '../../../components/Banner/Banner'
import Coursefaq from '../../../components/Coursefaq/Coursefaq'
import {transcendTimeline, emergeProgramdetail} from '../../../Data'
import './Transcend.scss'
import transcend from '../../../assets/transcend.png'
import transcendPhoto from '../../../assets/transcendPhoto.png'
import greendotart from '../../../assets/greendotart.png'


const Transcend = () => {

  return (
    <div className='app__container'>
      <Banner img={transcend} name='Transcend' subtitle="To Your Orbit"/>

      <div className='mid-apply-section'>

        <div className='mid-apply-section__form'>
          <div className='start-testimonial'>
            <h2>Even after 13 years I still benefit</h2>
            <div>
              <p className='para'>"Even after 13 years I still benefit from the training I received during this program. It becomes a part of our system in such a way that it starts coming naturally in our communication and becomes a part of our speech. <br /> I still admire the way you got me through this program."</p>
            </div>

            <div className='testimonial-detail'>
              <div className='client-detail'>
                <p>N.A. - <span>HC Advocate</span></p>
                

              </div>
              
            </div>

            <a href="#quoate">
                Know More
            </a>



          </div>



        </div>


        <div className='mid-apply-section_image'>          
            <div className='heading'>
              <h1>Transcend</h1>           
            </div>

            <div  className='image'>
                <img src={transcendPhoto} alt="" />
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
        <img src={greendotart} alt="" />

      </div>

      <div className='timeline-section'>
        <div className='timeline-section__left'>
          <h1>Includes:</h1>

          <p className='paragraph'>Rare to find Materials, Never-Ever Heard & Done Training Sessions, Video Recordings, On the Ground application with Groups, Fine tuning Sessions with 100% Results – I Guarantee!</p>

          <a href="#detail" className='button'>
            Discover More
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

        <div className='applyHere'>
            <a>Apply Here</a>
        </div>

      </div>

      <div className='transcend-quoate'>
        <h1 className='heading'>I'll rather have you Transcend than being good at things– <br />'coz only Mediocres are –good. <br /> <br /> Winners Perform "Excellence" – again & Again & AGAIN! <br /> <br />They are in their Orbit – It's time you command Yours!</h1>
        <p>MK.</p>

      </div>  
      
      {/* <Testimonials name="T r a n s c e n d"/> */}
      {/* <Coursefaq name="Transcend"/>
     */}
  
    
 
        
    </div>  
 
  )
}

export default Transcend