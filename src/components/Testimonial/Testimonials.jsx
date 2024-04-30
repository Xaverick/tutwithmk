import { useState } from 'react'
import './Testimonials.scss'
import map2 from '../../assets/map2.webp'
import uk from '../../assets/homeTestimonial/uk.webp'
import dubai from '../../assets/homeTestimonial/uae.webp'
import usa from '../../assets/homeTestimonial/usa.webp'
import italy from '../../assets/homeTestimonial/italy.webp'
import slovakia from '../../assets/homeTestimonial/slovakia.png'
import mumbai from '../../assets/homeTestimonial/mumbai.jpeg'
import india from '../../assets/homeTestimonial/india.webp'
import australia from '../../assets/homeTestimonial/australia.webp'
import { Tooltip } from 'react-tooltip'


const testimonial = {
  dubai: "\"You can see the results instantly not only in your Business but in your Personal Life too.\" <br /> <p> A.K. - Entrepreneur, DUBAI </p>",
  usa: "\"I thank you Manish for coaching me.\" <br /> <p> H.S. - Entrepreneur, United States </p>",
  uk: "\"Anyone who comes to get his help has come to the right place.\"  <br /> <p> J.M. - United Kingdom </p>",
  slovakia: "\"His helpfulness is simply AMAZING!\" <br /> <p> D.S. - International Author & Writer, SLOVAKIA </p>",
  italy: "\"He is the first one who applies his own knowledge on himself.\" <br/> <p> A.F. - ITALY </p>",
  mumbai: "\"Manish is an Awesome coach.\" <br /> <p> U.S. - Celebrity Trainer </p>",
  australia: "\"The first time I received training from Manish was in the spring of 2003. My first impression of him has been even to this day lived up by him after 20 years. I want to acknowledge Manish’s participation and contribution in my own learnings in life’s adventures and would recommend anyone to come and experience the bright, friendly and safe environment which Manish creates for his trainees and friends.\” <br /> <br /> S.H. - Sydney, Australia"
}

const Testimonials = ({name}) => {

  const [showDefault, setShowDefault] = useState(true);

  const handleMouseEnter = () => {
    console.log('mouse enter');
    setShowDefault(false);
  };

  const handleMouseLeave = () => {
    setShowDefault(true);
  };

  return (
    <div className='app__testimonials'>
    <h6>Globally People Are Attaining And So Will You! </h6>
    <div className='subheading'>
      <p>Attain With</p>
      <p> {name}</p>
    </div>



    <div className='app__testimonials__container'>
        
        <div className='map-pin-mark'>
            <img src={map2} />
            <div className='dots'>
              <div className='dot'>                
                <img 
                  data-tooltip-html={testimonial.uk}
                  data-tooltip-id="uk" 
                  src={uk} 
                  alt="" 
                />
                {/* <Tooltip id="uk"  place='top' noArrow  className='tooltip' /> */}

                {showDefault ? (
                    <Tooltip id='uk' place='top' className='tooltip' isOpen={true}/>
                  ) : (
                    <Tooltip
                      id='uk'
                      place='top'
                      className='tooltip'
                      isOpen={false}
                    />
                  )}
  
                                  
              
              </div>



              <div className='dot' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img 
                    src={usa} 
                    alt="" 
                    data-tooltip-html={testimonial.usa} 
                    data-tooltip-id="usa"
                />
                <Tooltip id="usa" effect='solid'  noArrow  place='top' className='tooltip' />
              
              
              
              </div>

              <div className='dot' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img 
                  src={dubai} 
                  alt="" 
                  data-tooltip-html={testimonial.dubai} 
                  data-tooltip-id="dubai"
                />
                <Tooltip id="dubai" effect='solid' noArrow  place='bottom' className='tooltip'/>
              </div>

              <div className='dot' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img 
                    src={italy} 
                    alt="" 
                    data-tooltip-html={testimonial.italy} 
                    data-tooltip-id="italy"
                />
                <Tooltip id="italy" effect='solid' noArrow  place='bottom' className='tooltip'/>
              
              </div>
              
              <div className='dot' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img 
                    src={slovakia} 
                    alt="" 
                    data-tooltip-html={testimonial.slovakia} 
                    data-tooltip-id="slovakia"
                />
                <Tooltip id="slovakia" effect='solid' noArrow  place='top' className='tooltip'/>
              </div>

              <div className='dot' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <img 
                    src={india} 
                    alt="" 
                    data-tooltip-html={testimonial.mumbai} 
                    data-tooltip-id="mumbai"
                />

                {/* {showDefault ? (
                    <Tooltip id='mumbai' effect='solid' noArrow  place='bottom' className='tooltip' isOpen={true}/>
                ):
                  <Tooltip id='mumbai' effect='solid' noArrow  place='bottom' className='tooltip' isOpen={false}/>
                } */}

                <Tooltip id="mumbai" effect='solid' noArrow  place='bottom' className='tooltip'/>
              </div>

              <div className='dot' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                <img 
                    src={australia} 
                    alt="" 
                    data-tooltip-html={testimonial.australia} 
                    data-tooltip-id="australia"
                />

                <Tooltip id="australia" effect='solid' noArrow  place='bottom' className='tooltip'/>
              </div>


            </div>

        </div>       

    </div>


  </div>

  )
}

export default Testimonials