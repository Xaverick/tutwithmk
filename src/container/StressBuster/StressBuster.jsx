import React , {useState,useEffect} from 'react'
import './StressBuster.scss'
import coffee from '../../assets/coffee-popup.gif'

const StressBuster = ({isopen2, setIsopen2}) => {
  
  return (
    <>
        {isopen2 && (
            <div className='stress-layer1'>
                <button className='close' onClick={() => setIsopen2(false)}>X</button>
                <div className='stress-layer2'>                    
                    {/* <div className="media">
                        <img src={coffee} alt="" />
                    </div> */}
                    <div className="content">
                        <div className='heading'>
                            <p className='sub-heading'>Your Confidant Alliance</p>
                            <h1>Stress Buster</h1>
                        </div>
                    
                        <p><br />In these specially designed Stress Buster sessions, You can talk about Anything but I encourage you to talk about Everything. Only You & Me, no pen, paper etc.</p>
                        <p><br /> Therapeutic Communication. Let's Talk. <br /> <br /> <br /> </p>

                        <span>*These are Confidential sessions.</span>
                        {/* <a href="/services/coffewithmk" onClick={() => setIsopen2(false)}>Let's Get Started</a> */}
                    </div>
                </div>
            </div>

        )}

    </>

  )
}

export default StressBuster