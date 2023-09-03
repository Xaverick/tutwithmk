import React from 'react'
import "./Apply.scss"

const Apply = () => {
  return (

    <div className='applylayer1'>
      {/* <button className='close' onClick={() => setIsopen(false)}>X</button> */}
      <a href="/services/coffewithmk">
      <div className='applylayer2'>                    
          <iframe          
            src="https://kapil-arora-7239.formaloo.me/AreYou-a-ONE"  
            className='questions' />

      </div>
      </a>
  </div>
  )
}

export default Apply