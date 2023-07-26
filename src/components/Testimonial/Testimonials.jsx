import React from 'react'
import './Testimonials.scss'
import map from '../../assets/world_map.png'
import uk from '../../assets/homeTestimonial/uk.jpeg'
import dubai from '../../assets/homeTestimonial/dubai.jpeg'
import usa from '../../assets/homeTestimonial/usa.jpeg'
import italy from '../../assets/homeTestimonial/italy.jpeg'
import slovakia from '../../assets/homeTestimonial/slovakia.jpeg'
import { Tooltip } from 'react-tooltip'


const testimonial = {
  dubai: "Manish is a great coach. His training is very applicable and you can see the results instantly not only in your business but in your personal life too. I highly recommend him",
  uk: "Manish is one of the most patient person I have come across. He is really well suited to his role of a coach. He truly understands the person sitting in front of him and coaches him/her based on his ability. He will work with the person to help him improve himself/herself and will persist till the goal has been achieved. And he will do this with a smile on his face. Anyone who comes to get his help has come to the right place.",
  usa: "I found Manish fully involved, always and happily willing to help, having a good grip on the subject. I thank you Manish for coaching me",
  italy: "I knew Manish Kumar in New Delhi during the years 2013-2015. I was very struck by his cultural and technical preparation in his job, as a coach and for communication programs, but most of all for his ability to always communicate in a interested, pleasant and positive way. He is the kind of person everybody would love to talk with. I think that all this, summed up with his undoubted technical level can make of Manish an excellent Coach and teacher of Communication Courses (he is the first one who applies his own knowledge on himself) but also, in my opinion, an excellent director for sales, a trustworthy executive for every area you would put him in.",
  slovakia: "So, I got personal coaching from Manish & it was very nice experience! First thing was that I was in time pressure and I needed it immediately and he made himself immediately available. And second thing was the coaching itself was very nice, it was working with a nice good friend who has full understanding for my problems. And He worked hard and in such a way so that every detail is just perfect. His helpfulness is simply AMAZING!"

}

const Testimonials = ({name}) => {
  return (
    <div className='app__testimonials'>
    <h6>PEOPLE ATTAIN AND SO WILL YOU</h6>
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
                  data-tooltip-content={testimonial.uk} 
                  data-tooltip-id="uk" 
                  src={uk} 
                  alt="" 
                />
                <Tooltip id="uk" effect='solid' place='top' className='tooltip'/>                    
              
              </div>



              <div className='dot'>
                <img 
                    src={usa} 
                    alt="" 
                    data-tooltip-content={testimonial.usa} 
                    data-tooltip-id="usa"
                />
                <Tooltip id="usa" effect='solid' place='top' className='tooltip'/>
              
              
              
              </div>

              <div className='dot'>
                <img 
                  src={dubai} 
                  alt="" 
                  data-tooltip-content={testimonial.dubai} 
                  data-tooltip-id="dubai"
                />
                <Tooltip id="dubai" effect='solid' place='top' className='tooltip'/>
              </div>

              <div className='dot'>
                <img 
                    src={italy} 
                    alt="" 
                    data-tooltip-content={testimonial.italy} 
                    data-tooltip-id="italy"
                />
                <Tooltip id="italy" effect='solid' place='top' className='tooltip'/>
              
              </div>
              
              <div className='dot'>
                <img 
                    src={slovakia} 
                    alt="" 
                    data-tooltip-content={testimonial.slovakia} 
                    data-tooltip-id="slovakia"
                />
                <Tooltip id="slovakia" effect='solid' place='top' className='tooltip'/>
              </div>

            </div>


        </div>
        
        <div className='right-side'>
            <div className='card'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste aliquam voluptatibus sed fugiat quia velit asperiores laboriosam eveniet id, maxime reprehenderit omnis.</p>
              <div>
                <div className='inner-card'></div>
                <div style={{display:"flex", flexDirection:"column", gap:"0",}}>
                  <h6>John Doe</h6>
                  <p>CEO at xyz</p>
                </div>
     
              </div>
            </div>
            <div className='card'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste aliquam voluptatibus sed fugiat quia velit asperiores laboriosam eveniet id, maxime reprehenderit omnis.</p>
              <div>
                <div className='inner-card'></div>
                <div style={{display:"flex", flexDirection:"column", gap:"0",}}>
                  <h6>John Doe</h6>
                  <p>CEO at xyz</p>
                </div>
     
              </div>
            </div>
        </div>

    </div>


  </div>

  )
}

export default Testimonials