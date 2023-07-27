import React from 'react'
import './PopUp.scss'
import coffee from '../../assets/coffee-popup.gif'

const PopUp = () => {
  return (
    <>
        <div className='layer1'>
            <div className='layer2'>
                <div className="media">
                    <img src={coffee} alt="" />
                </div>
                <div className="content">
                    <div style={{marginBottom:"4rem"}}>
                        <p style={{fontSize:"1.8rem"}}>Stress Buster</p>
                        <h1>K o f f e e  with  M K</h1>
                    </div>
              
                    <p><br />In this specially designed Stress Buster session, You can talk about Anything but I encourage you to talk about Everything. Only You & Me. No pen or paper.</p>
                    <p><br /> Therapeutic Communication! <br /> <br /> <br /> </p>
                    <a href="">Let's Get Started</a>
                </div>
            </div>
        </div>
    </>

  )
}

export default PopUp