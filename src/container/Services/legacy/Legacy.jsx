import React from 'react'
import Banner from '../../../components/Banner/Banner'
import './Legacy.scss'
import '../emerge/emerge.scss'
import {legacyRoute} from '../../../Data'
import greendotart from '../../../assets/greendotart.webp'
import legacyPhoto from '../../../assets/legacyphoto.webp'
import {Link} from 'react-router-dom'
import legacyBanner from '../../../assets/legacyBanner.webp'
import legacyMobileBanner from '../../../assets/legacyMobileBanner.webp'

const Legacy= () => {

  return (
    <div className='app__container'>
        <div className='aboutbanner'>
            <img className='desktop transcend' src={legacyBanner} alt="" />
            <img className="mobile" src={legacyMobileBanner} alt="" />
        </div>
        {/* <Banner name='L e g a c y' subtitle="Legends-create-Legacy" /> */}

        <div className='legacy-mid-apply-section'>
            <div className='mid-apply-section_image'>          
                <div className='heading'>
                    <h1 className='ownthatstage-heading legacyHeading'>L e g a c y <br /> <span>(Legends—Create—Legacy)</span></h1>
                    <p style={{color:"var(--header-green)"}}>It is our Most Advanced Program yet. The content of this Program is Confidential.</p>
                                
                </div>

                <div  className='image'>
                    <img src={legacyPhoto} alt="" />
                </div>

            </div>
        </div>

        <div id = 'quoate' className='legacy_course-feature'>
            <span className='hello-heading'>
                <p>
                “It is only available to those who have completed <br />LAUNCHPAD, EMERGE and TRANSCEND."
                </p>
            </span>

            <img src={greendotart} alt="" />

        </div>        


        <div id='detail' style={{margin: "2rem auto"}} className='all-course-details'>        
            <div className='header'>
                <div className='header-left'>
                    <h1>THE ROUTE TO LEGACY</h1>
                </div>
        
            </div>

            <div className='separator'></div>

            <div style={{marginBottom:"6rem"}} className='detail-content'>
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


        
    </div>  
 
  )
}

export default Legacy