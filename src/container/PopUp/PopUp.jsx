import React , {useState,useEffect} from 'react'
import './PopUp.scss'
import coffee from '../../assets/coffee-popup.gif'
import StressBuster from '../../assets/stressBusterRed.png';
import {Link} from 'react-router-dom'
import coffeeAnimation from "../../assets/coffeeWithMk.mp4"


const PopUp = ({isopen, setIsopen}) => {
  
  return (
    <>
        {isopen && (
            <div className='layer1'>
                <button className='close' onClick={() => setIsopen(false)}>X</button>
                <Link to="/services/coffewithmk">
                <div className='layer2'>                    
                    <div className="media">
                    <video autoPlay loop muted playsInline>
                        <source src={coffeeAnimation} type="video/mp4" />
                    </video>
                    </div>
                    <div className='content'>
                        <Link to="/services/coffewithmk"><img src={StressBuster} alt="" onClick={() => setIsopen(false)}/></Link>
                    </div>


                </div>
                </Link>
            </div>

        )}

    </>

  )
}

export default PopUp