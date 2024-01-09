import React , {useState,useEffect} from 'react'
import {legacyRoute} from '../../Data'
import './Services.scss'
import aboutBannerMobile from "../../assets/aboutbannerMobile.webp"
import fenching from "../../assets/fenching.gif"
import aboutBannergif from "../../assets/aboutBannergif.mp4"
import aboutbanner from "../../assets/aboutBanner.webp"
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='app__container'>
      <div className='aboutbanner'>
        <img className='desktop' src={aboutbanner} alt="" />
        <img className="mobile" src={aboutBannerMobile} alt="" />
      </div>


      <div style={{padding:"0 1rem", margin:"2rem 0"}} className="quoate-2">
        <h1 className='heading' style={{backgroundColor:"transparent", color:"var(--text-hover)"}}>F R E Q U E N C Y - 11:11</h1>
        <div className='quoate-2-left'>
          <h1 className='home-heading' style={{marginTop:"1rem"}}>In This Technically Remerging Planet Facets Of Human Mind Needed Unlocking To Reach Future Goals. </h1>
          <h1 className='home-heading'>Formulas Were Sought After.</h1>
          <h1 className='home-heading'>An Equation - Balancing Science+Philosophy+Religion - Needed For  The Freedom Of You And Everyone Else. </h1>
          <h1 className='home-heading'>I Got Trained By The Best In That Equation.</h1>

        </div>
      </div>



      <div className='first-media'>
        <img src={fenching} alt="" />
      </div>

      <div className='ownquoate' style={{margin:"0", padding:"4rem 0", }}>
        <h1 className='heading serviceTestimonial'>"Sometimes someone's presence changes you a lot - that is in reality, very magical! <br />
            Whenever I meet MK, I feel a different kind of energy!! <br />
            As I was stuck... everyone is stuck somewhere in his life! So, you need someone to help you get out of it. <br />
            I will recommend everyone to just meet MK once & you will feel it by yourself. It's an overwhelming feeling what I'm feeling Right Now!" <br /> <br /> A.N. - Microsoft</h1>
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
                    
                    <Link to={item.url}>Know More</Link>
                </div>
                
                </div>

            ))}          

            </div>       

        </div>

      <div className="second-media">
        <video autoPlay loop muted playsInline>
            <source src={aboutBannergif} type="video/mp4" />
        </video>
      </div>

      <div className='multiple-media'>
        <div className='quoates'>
          <h1 className='heading'>"You Are Alive Because you dare!"</h1>
          <p>MK.</p>
        </div>  
      </div> 
    </div>  
 
  )
}

export default Services