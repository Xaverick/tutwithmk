import React , {useState,useEffect} from 'react'
import './StressBuster.scss'
import coffee from '../../assets/coffee-popup.gif'
import popupgif from '../../assets/popupgif.gif' 


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
                    
                        <p>In these specially designed Stress Buster sessions, You can talk about Anything but I encourage you to talk about Everything. Only You & Me, no pen, paper etc.</p>
                        <p>Therapeutic Communication. Let's Talk. </p>

                        <a href="/apply" ><img src={popupgif} alt="" /></a>
                        <span>*These are Confidential sessions.</span>
                        
                    </div>
                </div>
            </div>

        )}

    </>

  )
}

export default StressBuster