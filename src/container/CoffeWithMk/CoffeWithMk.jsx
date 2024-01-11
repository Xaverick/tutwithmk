import React , {useState,useEffect} from 'react'
import './CoffeWithMK.scss'
import "../Services/emerge/emerge.scss"
import MobileBanner from "../../assets/mobileCoffeeBanner.png"
import coffeeAnimation from "../../assets/coffeeWithMk.mp4"
import dollar from '../../assets/icons/dollar.png'
import session from '../../assets/icons/session.png'
import confidential from '../../assets/icons/confidentiality.png';
// import coffeewithmkPhoto from '../../assets/coffeewithmkPhoto.webp'
import coffeewithmkPhoto from '../../assets/coffee_with_mk_video.mp4'
import greendotart from '../../assets/greendotart.webp'
import{Link} from 'react-router-dom'

const CoffeWithMk = () => {

  return (
    <div className='app__container'>
      <div className="coffee-header coffeehide" style={{backgroundColor: "#010001"}}>
        <video autoPlay loop muted playsInline className="coffeeimage" >
            <source src={coffeewithmkPhoto} type="video/mp4" />
        </video>
      </div>

      <div className='aboutbanner coffeeMobileBanner'>
          <img className="mobile" src={MobileBanner} alt="" />
      </div>

      <div className='mid-apply-section'>

        <div className='mid-apply-section__form'>
          <div className='start-testimonial'>
            <h2> ...was really Life-transforming.</h2>
            <div>
              <p className='para'>"It was my privilege to be able to have a Coffee with MK. The kind of Self-Revelation I had over this Coffee was really Life-transforming. Just this 1 Session helped me uncover some deep hidden harmful mindsets that was causing me to self-sabotage myself sub-consciously & it helped me break-free from a vicious loop I was in. <br /> <br />MK is not just a Legend himself. He is someone who creates Legends." </p>
            </div>

            <div className='testimonial-detail'>
              <div className='client-detail'>
                <p> K.A. <span>Entrepreneur</span></p>
                

              </div>
              
            </div>

            <a href="#quoate">
                Know More
            </a>
          </div>
        </div>
        

        <div  className='mid-apply-section_image'>          
            <div className='heading'>
              <p>Stress Buster</p>
              <h1 style={{ letterSpacing:"normal"}} className='gold'>K o f f e e <span>with</span> MK</h1>           
            </div>
            

            <div  className='image2'>
              <video autoPlay loop muted playsInline>
                <source src={coffeeAnimation} type="video/mp4" />
              </video>
                {/* <img src={coffee} alt="" /> */}
            </div>
        </div>

 

      </div>

      <div className='coffeeQuoate' id="quoate">
        <h1 className='heading'>In this specially designed Stress Buster session, <br /> You can talk about Anything <br /> But I Encourage You To Talk About Everything. <br /> <br /> Only You & Me. <br /> No pen or paper.</h1>

      </div> 




      <div id='detail' className='program-details'>
        <h1 style={{width:"100%"}} className='heading'>
            Therapeutic Communication!
        </h1>
        <h1 className='heading'>
            Let's Talk!
        </h1>
        <img className="image" src={greendotart} alt="" />

        <div className='details'>
          <div className='header'>
            <h1>Details: </h1>   
          </div>

          <div className='separator'></div>

          <div className='detail-content'>
          
              <div  className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <img src={session} alt="" />
                  </div>
              
                  <h1>Session</h1>
                </div>
                <p className='card-content'>1-on-1</p>

              </div>

              <div  className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <img src={dollar} alt="" />
                  </div>
              
                  <h1>Pricing</h1>
                </div>
                <p className='card-content'>$ 300</p>

              </div>

              <div className='card'>

                <div className='card-header'>
                  <div className='icon'>
                    <img src={confidential} alt="" />
                  </div>
              
                  <h1>Confidentiality</h1>
                </div>
                <p className='card-content'>These are Confidential Sessions</p>

              </div>                       
                      
          </div>



        </div>
        <div style={{marginBottom:"4rem"}} className='applyHere'>
          <Link to ='/apply'>Apply Here</Link>
        </div>

      </div>

      <div className="coffeeTestimonial">
        <h2>It gave me an insight...</h2>
        <h1 className='para'>"It gave me an insight into myself...Now I am a better person."</h1>
        <p className='description'> <br />R.C. - <span>HR Consultant</span></p>
      </div>
      
      {/* <Testimonials name="E m e r g e" /> */}
      {/* <Coursefaq name="E m e r g e"/> */}
    
  
    
 
        
    </div>  
 
  )
}

export default CoffeWithMk