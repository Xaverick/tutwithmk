import React from 'react'
import './Testimonials.scss'
import map from '../../assets/world_map.png'
import uk from '../../assets/homeTestimonial/uk.jpeg'
import dubai from '../../assets/homeTestimonial/dubai.jpeg'
import usa from '../../assets/homeTestimonial/usa.jpeg'
import italy from '../../assets/homeTestimonial/italy.jpeg'
import slovakia from '../../assets/homeTestimonial/slovakia.jpeg'
import mumbai from '../../assets/homeTestimonial/mumbai.jpeg'
import { Tooltip } from 'react-tooltip'


const testimonial = {
  dubai: "You can see the results instantly not only in your business but in your personal life too. <br /> <p> A.K. - Dubai </p>",
  usa: "I thank you Manish for coaching me. <br /> <p> H.S. - United States </p>",
  uk: "Anyone who comes to get his help has come to the right place.  <br /> <p> J.M. - United Kingdom </p>",
  slovakia: "His helpfulness is simply AMAZING! <br /> <p> D.S. - SLOVAKIA </p>",
  italy: "He is the first one who applies his own knowledge on himself. <br/> <p> A.F - ITALY </p>",
  mumbai: "Manish is an awesome coach.<br /> <p> U.S. - Celebrity Trainer </p>"
}

const Testimonials = ({name}) => {
  return (
    <div className='app__testimonials'>
    <h6>GLOBALY PEOPLE ATTAIN AND SO WILL YOU</h6>
    <div className='subheading'>
      <p>Attain With</p>
      <p> {name}</p>
    </div>



    <div className='app__testimonials__container'>
        
        <div className='map-pin-mark'>
            <img src={map} />
            <div className='dots'>
              <div className='dot'>                
                <img 
                  data-tooltip-html={testimonial.uk}
                  // data-tooltip-content={testimonial.uk} 
                  data-tooltip-id="uk" 
                  src={uk} 
                  alt="" 
                />
                <Tooltip id="uk" effect='solid' place='top' className='tooltip' />
                                  
              
              </div>



              <div className='dot'>
                <img 
                    src={usa} 
                    alt="" 
                    data-tooltip-html={testimonial.usa} 
                    data-tooltip-id="usa"
                />
                <Tooltip id="usa" effect='solid' place='top' className='tooltip'/>
              
              
              
              </div>

              <div className='dot'>
                <img 
                  src={dubai} 
                  alt="" 
                  data-tooltip-html={testimonial.dubai} 
                  data-tooltip-id="dubai"
                />
                <Tooltip id="dubai" effect='solid' place='top' className='tooltip'/>
              </div>

              <div className='dot'>
                <img 
                    src={italy} 
                    alt="" 
                    data-tooltip-html={testimonial.italy} 
                    data-tooltip-id="italy"
                />
                <Tooltip id="italy" effect='solid' place='top' className='tooltip'/>
              
              </div>
              
              <div className='dot'>
                <img 
                    src={slovakia} 
                    alt="" 
                    data-tooltip-html={testimonial.slovakia} 
                    data-tooltip-id="slovakia"
                />
                <Tooltip id="slovakia" effect='solid' place='top' className='tooltip'/>
              </div>

              <div className='dot'>
                <img 
                    src={mumbai} 
                    alt="" 
                    data-tooltip-html={testimonial.mumbai} 
                    data-tooltip-id="mumbai"
                />
                <Tooltip id="mumbai" effect='solid' place='top' className='tooltip'/>
              </div>

            </div>

        </div>       

    </div>


  </div>

  )
}

export default Testimonials