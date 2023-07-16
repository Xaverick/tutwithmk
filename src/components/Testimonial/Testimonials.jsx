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
        <img src={map} />
        <div className='map-pin-mark'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>

        </div>
    </div>


  </div>

  )
}

export default Testimonials