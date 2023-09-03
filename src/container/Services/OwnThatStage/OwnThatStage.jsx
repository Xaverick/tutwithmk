import React , {useState,useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../../assets/coach-talking.jpg'
import Testimonials from '../../../components/Testimonial/Testimonials'
import Banner from '../../../components/Banner/Banner'
import Coursefaq from '../../../components/Coursefaq/Coursefaq'
import {ownthatstageProgramDetail} from '../../../Data'
import './OwnThatStage.scss'
import stategy from '../../../assets/strategy.jpg'
import header from '../../../assets/header_1.png'
import patttern_1 from '../../../assets/pattern_1.png'
import ownthatstagePhoto from '../../../assets/ownthatstagePhoto.png'
import greendotart from '../../../assets/greendotart.png'


const OwnThatStage = ({link}) => {

  return (
      <div className='app__container'>

        <Banner name={"Own That Stage"} subtitle={"Mastering the Arena of Public Speaking"} custom={true}/> 

        <div className='mid-apply-section'>

          <div className='mid-apply-section__form'>
            <div className='start-testimonial'>
              <h2>The Knowledge that I got is Unshakeable! </h2>
              <div>
                <p className='para'>"The courses not only helped me in improving my relationship with my parents, children and wife but it also helped me in improving my income in my business. Though I did these courses some 7 years back the knowledge that I got is unshakeable and is an integral part of me which I keep on using to handle situations and win in life!"</p>
              </div>

              <div className='testimonial-detail'>
                
                <div className='client-detail'>
                  <p>R.S. - <span>International Speaker</span></p>                  
                </div>

              </div>

              <a href="#quoate">
                  Know More
              </a>
            </div>
          </div>


          <div className='mid-apply-section_image'>          
            <div className='heading'>
                <h1 className='ownthatstage-heading'>Own That Stage</h1>

                            
            </div>

            <div  className='image'>
                <img src={ownthatstagePhoto} alt="" />
          </div>
        </div>



      </div>

      <div id = 'quoate' className='course-feature'>
      <span className='heading'>
          <p>
          “Everyone Can Talk – <br /> Few Can Communicate – <br /> <br /> I Make You The Orator!”
          </p>
      </span>
      <p className='desc'>– MK, YOUR PERSONAL TRANSFORMATION COACH</p>
      <img className="image" src={greendotart} alt="" />

      </div>

      <div className='timeline-section'>
        <div className='owntimeline-section__left'>
            <h1 className='own'>You've been Unique & So Is Your Message.</h1>

            <p>Get That Message Across To People! <br /> End of Story.</p>

            <a href="#detail" className='button'>
            Discover More 
            </a>
        </div>

        <div className='owntimeline-section__right'>
            
            <img className="ownimage" src={stategy} alt="" />
        
        

        </div>  

      </div>


      <div id='detail' className='ownquoate'>
      <h1 className='heading'>Intense Training Sessions to Bring into Existence & Stabilize – <br /> The Orator in You! <br /> <br /> Not overcome but Rip Apart your long complexes & <br /> doubts due to your Appearance, Voice, Language, <br /> your Past or whatever lie it is – <br /> <br /> It all Ends Now – Right Now!! </h1>
      <p>MK.</p>

      </div> 


      <div className='homebanner'>
          <div className="content">
              <div className='homebanner__left'>
                  <p>I'LL TRAIN YOU HOW TO –</p>
                  <h1>"Create A Dent, <br />Make Your Mark, <br /> Leave a Legacy!"</h1>
                  <span>Just Interested? Don’t Bother. <br /> Ready for Whatever it takes!</span>
                  <a href={`${link}/apply`}>Apply Here</a>
                  
              </div>
              <div className='homebanner-right'>
                  <img src={header} alt="" />
              </div>
          </div>
      </div>


      <div  className='program-details'>
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
          {ownthatstageProgramDetail.map((item, index) => (
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
        <div style={{marginBottom:"2rem"}} className='applyHere'>
            <a href={`${link}/apply`}>Apply Here</a>
        </div>

      </div>

    </div>  
 
  )
}

export default OwnThatStage