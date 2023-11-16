import React , {useState,useEffect} from 'react'
import './PopUp.scss'
import coffee from '../../assets/coffee-popup.gif'
import StressBuster from '../../assets/stressBusterRed.png';
import {Link} from 'react-router-dom'

const PopUp = ({isopen, setIsopen}) => {
  
  return (
    <>
        {isopen && (
            <div className='layer1'>
                <button className='close' onClick={() => setIsopen(false)}>X</button>
                <a href="/services/coffewithmk">
                <div className='layer2'>                    
                    <div className="media">
                        <img src={coffee} alt="" />
                    </div>
                    <div className='content'>
                        <Link to="/services/coffewithmk"><img src={StressBuster} alt="" onClick={() => setIsopen(false)}/></Link>
                    </div>


                </div>
                </a>
            </div>

        )}

    </>

  )
}

export default PopUp