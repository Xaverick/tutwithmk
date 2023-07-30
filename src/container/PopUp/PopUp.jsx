import React , {useState,useEffect} from 'react'
import './PopUp.scss'
import coffee from '../../assets/coffee-popup.gif'

const PopUp = ({isopen, setIsopen}) => {
  
  return (
    <>
        {isopen && (
            <div className='layer1'>
                <button className='close' onClick={() => setIsopen(false)}>X</button>
                <div className='layer2'>                    
                    <div className="media">
                        <img src={coffee} alt="" />
                    </div>
                    <div className="content">
                        <div className='heading'>
                            <p className='sub-heading'>Stress Buster</p>
                            <h1>K o f f e e  with  M K</h1>
                        </div>
                    
                        <p><br />In this specially designed Stress Buster session, You can talk about Anything but I encourage you to talk about Everything. Only You & Me. No pen or paper.</p>
                        <p><br /> Therapeutic Communication! <br /> <br /> <br /> </p>
                        <a href="/services/coffewithmk" onClick={() => setIsopen(false)}>Let's Get Started</a>
                    </div>
                </div>
            </div>

        )}

    </>

  )
}

export default PopUp