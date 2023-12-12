import React from 'react'
import './About.scss'
import legacyPhoto from '../../assets/legacyphoto.webp'
import dp from "../../assets/dp.gif"
import { Link } from 'react-router-dom'

import aboutBannergif from "../../assets/aboutBannergif.mp4"






const About = ({link}) => {

  return (
    <div className='app__container'>

      <div className="about-header">
        <video autoPlay loop muted playsInline className="aboutimage">
            <source src={aboutBannergif} type="video/mp4" />
        </video>
      </div>

  

      <div className='description-container'>


        <div className='description'>

          <div className='description__right'>
            <span>About MK.</span>
            <div className='content'>
              <p className='para_description'> <b> Since 2002 I have been working with: </b> Actors, Actress, Celebrity Coaches, Singers, 
              Business Owners & Their Families, Ministers & Their Families, IAS & IPS officers, Fashion Brand Owners (Indian & UK)
              Authors, MDs, CEOs, etc. <br /> <br />
              <b>Under Persend Social Responsibility: </b> Various NGOs, Govt. Agencies, Students & Teachers, Old age Homes

              & many
              Indian Ambassadors, etc.
              </p>
                          <p className='para_description'> <b>Around the Globe people have known me through Word-of-Mouth. </b> 

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
                  <li><p>Over the last 22 years, coached several International & Indian Clients from U.S., UK, Australia, Taiwan, Iran, Germany, Italy, India, Slovakia, etc. </p></li>
                  <li><p>Awarded Guest of Honour by Delhi Police. </p></li>
                  <li><p>Judging Panel: Speak IndiaTM (YMCA). </p></li>
                  <li><p>Associated with: AIACA® & Various NGOs. </p></li>
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

            <Link to={`/services`} className='button'>
            Discover More
            </Link>
        </div>

        <div className='owntimeline-section__right'>
            
          <img  style={{transition:"none", animation:"none"}} src={dp} alt="" />
        
        

        </div>  

      </div>




  </div>



 
  )
}

export default About