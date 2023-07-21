import React from 'react'
import './Banner.scss'
import patttern_1 from '../../assets/pattern_1.png'
import {AiOutlineHome} from 'react-icons/ai'

const Banner = ({name,subtitle}) => {
  return (
    <div className='content-header app__flex'>
      <img src={patttern_1} alt="" />
      <div className='content'>
        
        <div className='content-header-left'>
          <h1>{name}</h1>  
          <p> {subtitle}</p>                 
        </div>

        <div className='content-header-right'>
            <AiOutlineHome />
            <p>Home  &gt; <span>{name}</span></p>
        </div>
      </div>
       
    </div>

  )
}

export default Banner