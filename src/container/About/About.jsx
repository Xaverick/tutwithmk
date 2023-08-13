import React from 'react'
import Testimonials from '../../components/Testimonial/Testimonials'
import Banner from '../../components/Banner/Banner'
import Coursefaq from '../../components/Coursefaq/Coursefaq'
import './About.scss'
import MK1 from "../../assets/MK1.jpg"
import MK2 from "../../assets/MK2.jpg"
import MK3 from "../../assets/MK3.jpg"
import wallpaper from "../../assets/xfactor.jpeg"
import dp from "../../assets/dp.gif"

const About = () => {

  return (
    <div className='app__container'>

      <Banner name='About MK' subtitle="R I S E" gold={true} />



      <div className='timeline-section'>
        <div className='owntimeline-section__left'>
            <h1 className='own'>Hail Storm... <br /> Hurricane... <br /> Volcanic Lava!</h1>

            <p>If You're Ready <br /> I'll turn the world upside down <br /> Including you.</p>

            <a href="#detail" className='button'>
            Discover More -&gt;
            </a>
        </div>

        <div className='owntimeline-section__right'>
            
          <img  style={{transition:"none", animation:"none"}} src={dp} alt="" />
        
        

        </div>  

      </div>


      <div className='ownquoate'>
        <h1 className='heading'>There is no bigger suffering than not being able <br /> to Do / Perform/ Express - the way you want to </h1>
        <p>MK.</p>

      </div> 
      

      {/* <div className="about-first-media">
        <img src={wallpaper} alt="" />
        <a href="" className="download">Download Wallpaper</a>
      </div> */}
      
      <div id = 'quoate' className='about-course-feature'>
        <span className='heading'>
          <p>
          “Knowledge has always been there - the conduit through which it is transferred was lost.” 
          </p>
        </span>
        <p className='desc'>MK.</p>
        {/* <div className='four-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div> */}

      </div>

      <div className='description-container'>


        <div className='description'>
          {/* <div className='description__left'> */}
            {/* <img src={MK1} alt="" /> */}
          {/* </div> */}

          <div className='description__right'>
            <span>About MK.</span>
            <div className='content'>
              <p> <b>I've already worked with: </b> Actors, Actress, Celebrity Coaches, Singers, 
              Business Owners & Their Families,<br />
              MINISTERS & THEIR FAMILIES, IAS & IPS officers, Fashion Brand Owners (Indian & UK)
              Authors, MDs, CEOs <br /> <br />
              <b>Under Persend Social Responsibility: </b> Various NGOs, Govt. Agencies, Students & Teachers, Old age Homes

              & many
              Indian Ambassadors & many International Clients from U.S., UK, TAIWAN, IRAN, GERMANY, ITALY etc.
              </p>
                          <p> <b>You've NOT HEARD ABOUT ME BECAUSE: </b> 

              Almost all of my Clients National or International are through word of Mouth. <br /> <br /> I'm here so that people who are looking for this frequency are not left out.
              </p>
            </div>

          </div>

        </div>
          
      </div>  

      <div className='description-container' style={{padding:"0"}}>


        <div className='description' >
          {/* <div className='description__left'> */}
            {/* <img src={MK1} alt="" /> */}
          {/* </div> */}

          <div className='description__right'>
            <span>Accolades</span>
            <div style={{display:"flex"}} className='content'>
              <p> 
              ➔ Professional Member: WISE® | IHELPTM | Applied Scholastics® U.K. <br />
              ➔ Chairperson Hubbard College of Administration, New Delhi. <br />
              ➔ Awarded Guest of Honour by Delhi Police. <br />
              ➔ Judging Panel: Speak IndiaTM (YMCA). <br />
              ➔ Associated with: TWTH®, AIACA® & Various NGOs. <br />
              ➔ In Discourse: CM Delhi, Cabinet Minister, Senior Government & Police Officials <br />
              </p>
            </div>

          </div>

        </div>
          
      </div>  




  </div>



 
  )
}

export default About