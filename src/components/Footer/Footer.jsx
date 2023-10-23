import React, {useState} from 'react'
import './Footer.scss'
import {AiOutlineMail} from 'react-icons/ai'
import footerLogo from '../../assets/footerLogo.webp'
import emailjs from '@emailjs/browser';
import{Link} from 'react-router-dom'

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
            <p>To Play The Big Game -  <br /> Warriors Join Warriors!</p>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">MK</Link></li>
              <li><Link to="/services">X-Factor</Link></li>
              <li><Link to="/contact">Connect</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
            
          </div>

          <div className="section">
            <h3>Programs</h3>
            <ul>
              <li><Link to="/services/coffewithmk">Koffee with MK </Link></li>
              <li><Link to="/services/launchpad">LaunchPad</Link></li>
              <li><Link to="/services/emerge">Emerge</Link></li>
              <li><Link to="/services/transcend">Transcend</Link></li>
              <li><Link to="/services/ownthatstage">Own That Stage</Link></li> 
              <li><Link to="/services/legacy">Legacy</Link></li> 
            </ul>
          </div>
        </div>


        <div className="section"> 
          
          <ul className='space'>
            <li className='list'>
              <Link to="/contact" className='icon'>
                <AiOutlineMail />
              </Link>
              <div className='content'>
                <h3>Email:</h3>
                <p style={{fontSize:"0.9rem"}}>team_mk@transformwithmk.com</p>
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