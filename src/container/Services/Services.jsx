import React , {useState,useEffect} from 'react'
import {legacyRoute} from '../../Data'
import './Services.scss'
import aboutBannerMobile from "../../assets/aboutbannerMobile.png"
import fenching from "../../assets/fenching.gif"
import aboutBannergif from "../../assets/aboutBannergif.gif"
import aboutbanner from "../../assets/aboutBanner.png"


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
        <img src={aboutBannergif} alt="" />
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