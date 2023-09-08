import React from 'react'
import './emerge.scss'
import Banner from '../../../components/Banner/Banner'
import {emergeTimeline, emergeProgramdetail} from '../../../Data'
import emergeLogo from '../../../assets/emerge.png'
import emergePhoto from '../../../assets/emergePhoto.png'
import greendotart from '../../../assets/greendotart.png'


const Emerge = ({link}) => {

  return (
    <div className='app__container'>
      <Banner img={emergeLogo} name='E m e r g e' subtitle="Re-structure Yourself" />

      <div className='mid-apply-section'>

        <div className='mid-apply-section__form'>
          <div className='start-testimonial'>
            <h2>It has helped me immensely!</h2>
            <div>
              <p className='para'>"Realization after realization has led me to believe that a gentle handling is the solution of all the problems of my social life. It has helped me immensely."</p>
            </div>

            <div className='testimonial-detail'>
              {/* <img src="" alt="" /> */}
              <div className='client-detail'>
                <p>Sh. M.V. - <span>JUDGE</span></p>               
                
              </div>
              
            </div>

            <a href="#quoate">
                Know More
            </a>
          </div>
        </div>
        

        <div className='mid-apply-section_image'>          
            <div className='heading'>
    
              <h1>Emerge</h1>           
            </div>

            <div  className='image'>
                <img src={emergePhoto} alt="" />
            </div>
        </div>

 

      </div>

      <div id = 'quoate' className='course-feature'>
        <span className='heading'>
          <p>
          “Hidden Truths <br /> only few Families <br />Know on Planet Earth!”
          </p>
        </span>
        <p className='desc'>– MK, YOUR PERSONAL TRANSFORMATION COACH</p>
        <img src={greendotart} alt="" />
      </div>

      <div className='timeline-section'>
        <div className='timeline-section__left'>
          <h1>Your <br />E m e r g e <br />checklist</h1>

          <p>Specifically Designed – </p>

          <p>Highly Powerful </p>

          <a href="#detail" className='button'>
            Discover More 
          </a>
        </div>

        <div className='timeline-section__right'>
          <div className='timeline'>
            {emergeTimeline.map((item, index) => (
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
            <a href={`${link}/apply`}>Apply Here</a>
        </div>

      </div>

      <div className='home-quoate'>
        <h1 className='home-heading'>"You have been hiding. It's time You <br />E M E R G E!"</h1>
        <p>MK.</p>

      </div>  
      
      {/* <Testimonials name="E m e r g e" /> */}
      {/* <Coursefaq name="E m e r g e"/> */}
    
  
    
 
        
    </div>  
 
  )
}

export default Emerge