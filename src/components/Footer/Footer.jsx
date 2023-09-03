import React, {useState} from 'react'
import './Footer.scss'
import {AiOutlineMail} from 'react-icons/ai'
import {FaInstagram, FaYoutube,FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import footerLogo from '../../assets/footerLogo.png'
import emailjs from '@emailjs/browser';


const Footer = () => {
  const [formData, setFormData] = useState({email: ''})
  const [isFrormSubmitted, setIsFrormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {email} = formData;

  const handleChangeInput = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})

  }
  
  const handleSubmit = (e) => {    
      if(!email) return alert('Please fill all the fields')
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return alert('Please enter a valid email')
      
      console.log(formData);

      e.preventDefault();
      setLoading(true);
      const templateParams = {to_name: 'MK' ,email: formData.email}
      emailjs.send('service_c8k4b74', 'template_0nid9js', templateParams, "rm4pX9TVY2e3BT41g")
      .then(function(response) {
          setIsFrormSubmitted(true);
          setLoading(false);
          setFormData({email: ''})
          console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
          console.log('FAILED...', error);
      });

  }



  return (

      <>
      <div className='background'>
        <div className="newsletter">
          <div className="newsletter-left">
            <h1>Join Your Clan</h1>
            <p>To Play The Big Game - Warriors Join Warriors!</p>
          </div>

      
          <div className="newsletter-right">

            <div className="signup">
              {isFrormSubmitted ? <h1 className='header'>Welcome To your clan!</h1> : (
              <form  className='newsletter__form'>
                <input type="text" placeholder='Enter your Email' name="email" value={email} onChange={handleChangeInput} />
                <a className='button' onClick={handleSubmit}>{loading ? 'Joining...': "I'm In" }</a>
              </form>)}
            </div>

          </div>
          
        </div>

      </div>
    
    <div className='app__footer'>



      <div className="upper-footer">

        <div style={{flex:"1.5"}} className="section ">
          <img src={footerLogo} alt="" />

        </div>

        <div style={{display: "flex", gap:"1rem"}}>
          <div className="section">
            <h3>Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">MK</a></li>
              <li><a href="/services">X-Factor</a></li>
              <li><a href="/contact">Connect</a></li>
              <li><a href="/contact">FAQ</a></li>
              <li><a href="/blogs">Blogs</a></li>
            </ul>
            
          </div>

          <div className="section">
            <h3>Programs</h3>
            <ul>
              <li><a href="/services/coffewithmk">Koffee with MK </a></li>
              <li><a href="/services/launchpad">LaunchPad</a></li>
              <li><a href="/services/emerge">Emerge</a></li>
              <li><a href="/services/transcend">Transcend</a></li>
              <li><a href="/services/ownthatstage">Own That Stage</a></li> 
              <li><a href="/services/legacy">Legacy</a></li> 
            </ul>
          </div>
        </div>


        <div className="section"> 
          
          <ul className='space'>
            <li className='list'>
              <div className='icon'>
                <AiOutlineMail />
              </div>
              <div className='content'>
                <h3>Email:</h3>
                <p style={{fontSize:"0.9rem"}}>team_mk@transformwithmk.com</p>
              </div>
            </li>

            <li >
              <div style={{display:"flex", flexDirection:"row", gap:"1rem", alignItems:"end"}}>
                <li className='list' ><a href="https://youtube.com/@transformwithMK" target="_blank" rel="noreferrer"><div className='icon'><FaYoutube /></div></a></li>
                <li className='list'><a href="https://www.linkedin.com/in/coachmk" target="_blank" rel="noreferrer"><div className='icon'><FaLinkedinIn /></div></a></li>
                <li className='list'><a href="https://instagram.com/transformwithmk" target="_blank" rel="noreferrer"><div className='icon'><FaInstagram /></div></a></li>
                <li className='list'><a href="https://www.facebook.com/transformwithMK?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><div className='icon'><FaFacebookF /></div></a></li>
              </div>
             
            </li>

          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <p>Copyright © 2023 MK, All rights reserved.</p>
     
      </div>

    </div>
    </>
  )
}

export default Footer