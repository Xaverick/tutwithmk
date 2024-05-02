import React from 'react'
import Exit from '../assets/homepage/Exit.webp'
import Cleanse from '../assets/homepage/Cleanse.webp'
import { Link, useNavigate } from 'react-router-dom'
import "./welcome.scss"


const Welcome = ({exit, cleanse, clicked}) => {
  const navigate = useNavigate()

  const handleExit = ()=>{
    setTimeout(()=>{
      clicked(true)
      exit(true)
    },1000)
  }

  const handleCleanse = ()=>{
    setTimeout(()=>
    {
      localStorage.setItem('cleanseBefore', 'true');
      localStorage.setItem('timestamp', new Date().getTime().toString());
      window.scrollTo(0,0)
      cleanse(true)
      clicked(true)
      navigate('/home')
    },1000)
  }

  return (
    <>
        <div className="landingscreen">
            <img className="exitbutton" src={Exit} alt="" onClick={handleExit}/>
        </div>

        <div className="landingscreen2">
            <div className='landingContent'>
              <h1>HYPOCRISY <br />FAKERY <br /> COLD BLOODEDNESS <br /> SUICIDE <br /> <br /> <span> Remnants are still found in me </span></h1>
              <img src={Cleanse} alt="" className='cleansebutton' onClick={handleCleanse}/>
            </div>
        </div>

    </>
  )
}

export default Welcome