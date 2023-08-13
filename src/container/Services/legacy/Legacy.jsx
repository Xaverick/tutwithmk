import React , {useState,useEffect} from 'react'
import coach from '../../../assets/coach-talking.jpg'
import Testimonials from '../../../components/Testimonial/Testimonials'
import Banner from '../../../components/Banner/Banner'
import Coursefaq from '../../../components/Coursefaq/Coursefaq'
import './Legacy.scss'
import {legacyRoute} from '../../../Data'

import legacyPhoto from '../../../assets/legacyphoto.png'

const Legacy= () => {

  return (
    <div className='app__container'>
        <Banner name='L e g a c y' subtitle="Legends-create-Legacy" />

        <div className='legacy-mid-apply-section'>
            <div className='mid-apply-section_image'>          
                <div className='heading'>
                    <h1 className='ownthatstage-heading'>L e g a c y</h1>
                    <p>Legends-create-Legacy</p>
                                
                </div>

                <div  className='image'>
                    <img src={legacyPhoto} alt="" />
                </div>

                <div className='heading'>
                    <h1 className='ownthatstage-heading'>L e g a c y</h1>
                    <p>L e g a c y  is our Most Advanced & most CONFIDENTIAL program yet.</p>                            
                </div>

            </div>
        </div>

        <div id = 'quoate' className='course-feature' style={{paddingTop:"2rem"}}>
            <span className='heading'>
                <p style={{color:"var(--text-hover)"}}>
                “It is only available to those who complete the <br />ROUTE to L E G A C Y”
                </p>
            </span>
            <div className='four-dots'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>

        </div>        


        <div id='detail' style={{margin: "2rem auto"}} className='program-details'>        
            <div className='header'>
            <div className='header-left'>
                <h1>Route To Legacy</h1>
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
                    <p>{item.content}</p>
                    <a href={item.url}>Know More.</a>
                </div>
                
                </div>

            ))}          

            </div>       

        </div>



 
      
      <Coursefaq />
    
  
    
 
        
    </div>  
 
  )
}

export default Legacy