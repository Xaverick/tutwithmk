import React , {useState,useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import coach from '../../../assets/coach-talking.jpg'
import Testimonials from '../../../components/Testimonial/Testimonials'
import Banner from '../../../components/Banner/Banner'
import Coursefaq from '../../../components/Coursefaq/Coursefaq'
import {emergeProgramdetail} from '../../../Data'
import './OwnThatStage.scss'
import stategy from '../../../assets/strategy.jpg'
import header from '../../../assets/header_1.png'
import patttern_1 from '../../../assets/pattern_1.png'

const OwnThatStage = () => {

  return (
      <div className='app__container'>
        <div className='own-content-header app__flex'>
        <img src={patttern_1} alt="" />
        <div className='content'>
          
          <div className='own-content-header-left'>
            <h1>Own That Stage</h1>   
            <p>Mastering the Arena of Public Speaking</p>
        
          </div>

          <div className='own-content-header-right'>
              <AiOutlineHome />
              <p>Home  &gt; <span>own That Stage</span></p>
          </div>
        </div>
        
      </div>

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
              <h1 className='ownthatstage-heading'>Own That Stage</h1>
              <p> Mastering the Arena of Public Speaking</p>
                          
          </div>

          <div  className='image'>
              <img src={coach} alt="" />
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
    <div className='four-dots'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
    </div>

    </div>

    <div className='timeline-section'>
      <div className='owntimeline-section__left'>
          <h1 className='own'>You've been Unique & So Is Your Message.</h1>

          <p>Get That Message Across To People! End of Story.</p>

          <a href="#detail" className='button'>
          Discover More -&gt;
          </a>
      </div>

      <div className='owntimeline-section__right'>
          
          <img src={stategy} alt="" />
      
      

      </div>  

    </div>


    <div className='ownquoate'>
    <h1 className='heading'>Intense Training Sessions to Bring into Existence & Stabilize – <br /> The Orator in You! <br /> <br /> Not overcome but Rip Apart your long complexes & <br /> doubts due to your Appearance, Voice, Language, <br /> your Past or whatever lie it is – <br /> <br /> It all Ends Now – Right Now!! </h1>
    <p>MK.</p>

    </div> 


    <div className='homebanner'>
        <div className="content">
            <div className='homebanner__left'>
                <p>I'LL TRAIN YOU HOW TO –</p>
                <h1>"Create A Dent,Make <br /> Your Mark, <br /> Leave a Legacy!"</h1>
                <span>Interested? don’t Bother.</span>
                <a href="">Ready for Whatever it takes!</a>
            </div>
            <div className='homebanner-right'>
                <img src={header} alt="" />
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
        <a>Own That Stage</a>            
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

 
      
      <Testimonials name="Own That Stage"/>
      <Coursefaq name="Own That Stage"/>
    
  
    
 
        
    </div>  
 
  )
}

export default OwnThatStage