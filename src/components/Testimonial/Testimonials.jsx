import React from 'react'
import './Testimonials.scss'
import map from '../../assets/world_map.png'
const Testimonials = ({name}) => {
  return (
    <div className='app__testimonials'>
    <h6>PEOPLE ATTAIN AND SO WILL YOU</h6>
    <div className='subheading'>
      <p>Attain through</p>
      <p> {name}:</p>
    </div>


    <div className='app__testimonials__container'>
        
        <div className='map-pin-mark'>
            <img src={map} />
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>

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