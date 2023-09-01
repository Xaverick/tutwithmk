import React from 'react'
import Testimonials from '../../components/Testimonial/Testimonials'
import Banner from '../../components/Banner/Banner'
import Coursefaq from '../../components/Coursefaq/Coursefaq'
import './About.scss'
import aboutbanner from "../../assets/aboutBanner.png"
import legacyPhoto from '../../assets/legacyphoto.png'
import dp from "../../assets/dp.gif"
import aboutBannergif from "../../assets/aboutBannergif.gif"

const About = () => {

  return (
    <div className='app__container'>


      <div className="about-header">
        <img className='aboutimage' src={aboutBannergif} alt="" />
      </div> 

      <div className='description-container'>


        <div className='description'>

          <div className='description__right'>
            <span>About MK.</span>
            <div className='content'>
              <p> <b> Since 2002 I have been working with: </b> Actors, Actress, Celebrity Coaches, Singers, 
              Business Owners & Their Families,<br />
              Ministers & Their Families, IAS & IPS officers, Fashion Brand Owners (Indian & UK)
              Authors, MDs, CEOs, etc. <br /> <br />
              <b>Under Persend Social Responsibility: </b> Various NGOs, Govt. Agencies, Students & Teachers, Old age Homes

              & many
              Indian Ambassadors & many International Clients from U.S., UK, Taiwan, Iran, Germany, Italy, etc.
              </p>
                          <p> <b>Around the Globe people have known me through Word-of-Mouth. </b> 

                <br /> <br />Now I'm making myself known online so that people who are looking for this frequency are not Left Out!
              </p>
            </div>

          </div>

        </div>
          
        </div>  





        <div className='description-container' style={{padding:"0", paddingBottom:"4rem"}}>


        <div className='description' >
          <div className='description__right'>
            <span><p>Accolades:</p> 
            <span className="subline">Humble Moments</span>
            </span>
            
            <div style={{display:"flex"}} className='content'>
                <ul>
                  <li><p> Professional Member: WISE® | IHELPTM | Applied Scholastics® U.K.</p></li>
                  <li><p>Chairperson Hubbard College of Administration, New Delhi. </p></li>
                  <li><p>Awarded Guest of Honour by Delhi Police. </p></li>
                  <li><p>Judging Panel: Speak IndiaTM (YMCA). </p></li>
                  <li><p>Associated with: TWTH®, AIACA® & Various NGOs. </p></li>
                  <li><p>In Discourse: CM Delhi, Cabinet Minister, Senior Government & Police Officials </p></li>
                </ul>
            </div>

          </div>

        </div>
          
        </div>  



      <div className='ownquoate' style={{margin:"0", padding:"4rem 0"}}>
        <h1 className='heading'>"There is no bigger suffering than not being able <br /> to Do, Perform, Express - the way you want to." </h1>
        <p>MK.</p>

      </div>      
      
      <div className='legacygraphic'>

            <img src={legacyPhoto} alt="" />
  
      </div>



      <div id = 'quoate' className='about-course-feature'>
        <span className='heading'>
          <p>
          "The biggest insult I had in my life was when someone introduced me to someone and said, “MK is good.”"
          </p>
        </span>
        <p className='desc'>MK.</p>

      </div>


      
      <div className='timeline-section'>
        <div className='owntimeline-section__left'>
            <h1 className='own'>Hail Storm... <br /> Hurricane... <br /> Volcanic Lava!</h1>

            <p>If You're Ready <br /> I'll turn the world upside down <br /> Including you.</p>

            <a href="#detail" className='button'>
            Discover More
            </a>
        </div>

        <div className='owntimeline-section__right'>
            
          <img  style={{transition:"none", animation:"none"}} src={dp} alt="" />
        
        

        </div>  

      </div>




  </div>



 
  )
}

export default About