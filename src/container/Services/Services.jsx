import React , {useState,useEffect} from 'react'
import Testimonials from '../../components/Testimonial/Testimonials'
import Banner from '../../components/Banner/Banner'
import Coursefaq from '../../components/Coursefaq/Coursefaq'
import {legacyRoute} from '../../Data'
import './Services.scss'
import secondMedia from '../../assets/youTheYou.gif'
import endofyou from "../../assets/endOfYou.gif"
import pressButton from "../../assets/pressButton.gif"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fenching from "../../assets/fenching.gif"

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};


const Services = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='app__container'>
      <Banner name='X-Factor' />

      <div style={{padding:"3rem 0"}} className="quoate-2">
        <h1 className='heading' style={{backgroundColor:"transparent", color:"var(--text-hover)"}}>F R E Q U E N C Y - 11:11</h1>
        <div className='quoate-2-left'>
          <h1 className='home-heading' style={{marginTop:"1rem"}}>In This Technically Remerging Planet Facets Of Human Mind Needed Unlocking To Reach Future Goals. </h1>
          <h1 className='home-heading'>Formulas Were Sought After.</h1>
          <h1 className='home-heading'>An Equation - Balancing Science+Philosophy+Religion - Needed For  The Freedom Of You And Everyone Else. </h1>
          <h1 className='home-heading'>I Got Trained By The Best In That Equation.</h1>




         

        </div>

        {/* <div className='quoate-2-right'>
          <img src={quoate2dp} alt="" />
        </div> */}
      </div>

      {/* <div id = 'quoate' className='course-feature'>
        <span className='heading'>
          <p>
          “Data has always been there. <br /> Capability to hold & deliver, is rare!”
          </p>
        </span>
        <p className='desc'>– MK, YOUR PERSONAL TRANSFORMATION COACH</p>
        <div className='four-dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

      </div> */}

      <div className='first-media'>
        <img src={fenching} alt="" />

      </div>



      <div id='detail' className='all-course-details'>        
            <div className='header'>
                <div className='header-left'>
                    <h1>THE ROUTE TO LEGACY</h1>
                </div>
        
            </div>

            <div className='separator'></div>

            <div className='detail-content'>
            {legacyRoute.map((item, index) => (
                <div key = {index} id={item.title} className='card'>

                <div className='card-header'>
                    <div className='icon'>
                    <img src={item.icon} alt="" />
                    </div>
                
                    <h1>{item.title}</h1>
                </div>
                <div className='card-content'>
                    {item.content.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                    
                    <a href={item.url}>Know More</a>
                </div>
                
                </div>

            ))}          

            </div>       

        </div>

      
      <div className="second-media">
        <img src={secondMedia} alt="" />

      </div>

      <div className='multiple-media'>
        {/* <img className="sub-media-1" src={endofyou} alt="" />
        <img className="sub-media-1 dimension" src={pressButton} alt="" />     */}
        <div className='quoates'>
          <h1 className='heading'>You Are Alive Because you dare!</h1>
          <p>MK.</p>
        </div>  

      </div>
{/* 

      <div
        // ref={ref}
        // animate={controls}
        // initial="hidden"
        // variants={squareVariants}
        className="last-media"
      >

      </div> */}



      {/* <Testimonials name="Our Programs"/> */}
      {/* <Coursefaq name="Our Programs"/> */}
    
  
    
 
        
    </div>  
 
  )
}

export default Services