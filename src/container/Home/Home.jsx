import React from 'react'
import './Home.scss'
import warrior from '../../assets/warrior.jpg'
import dp from '../../assets/dp.gif'
import ReactPlayer from "react-player";
import Testimonials from '../../components/Testimonial/Testimonials'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>  
      <div className="warrior-header">
        <img src={warrior} alt="" />
      </div>

      <div id = 'quoate' className='home-course-feature'>
        <span className='home-heading'>
          <p>
          I'm Different.Ever thought that? <br /> <br />Surrounded by people & knowing that -- Is An Awakening. 
          It surrounds a person with Search about his/her Uniqueness & then Getting It Manifested! 
          </p>
        </span>
        <p className='desc'>In this World: It's a Revolution – It's a War.
          Welcome to Your Clan!
        </p>

      </div>

      <div className="video">
        <iframe 
          class="bg-video"
          src="https://www.youtube.com/embed/nWp5vwsuF4E?autoplay=1&rel=0&mute=1"
          allowFullScreen
          allow="autoplay"
        />

      </div>


      <div className="home-quoate">
        <h1 className='home-heading'>Here you'll get the most sophisticated & powerful weapons (Skills & Abilities) to Establish Your True Self & that's the best humanitarian deed you can ever perform on this Planet.</h1>
        <h1 className='home-heading'>It's tough but not a suffering which you've already endured since your Awakening.</h1>
      </div>


      <div id = 'quoate' className='course-feature'>
        <span className='heading'>
            <p>T R A N S F O R M A T I O N Is the Game</p>
            <p style={{margin:"1rem 0"}}>I Welcome You To The Unique Version of – YOU!</p>
        </span>
        <div className='four-dots'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>

        <span className='heading'>
            <p>Your Version 2.0 A Brand New, Superior, Revolutionary, Totally Revamped version of old 1.0. </p>
            <p style={{margin:"1rem 0"}}> <br />From the past 19yrs that's exactly what I've been delivering in India & Abroad.Now, Betterment & Improvement is not what I deliver. It's good, but once again, I don't deliver anything that is "good". </p>
        </span>
      </div>





      <div className='dynamic-writing'>
        <div className="heading">
          <div className='subheading'>
            <Typewriter    
              onInit={(typewriter) => {
                typewriter
                    .typeString('I Deliver what I Promise.')
                    .start();
              }}
            />
          </div>


          <Typewriter  
            className="subheading"   
            options={{
              strings: ["My Promise – Your \"Transformation.\" That's it! End of Story."],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />


        </div>

      </div>


      <div className="home-quoate">

        <h1 className='home-heading'>Important: "Transformation" doesn't happen with your like or interest. Transformation is The Game of Winners! It requires "I Want It" & If you have that Fuel in you then:</h1>
        <h1 className='home-heading'> <br /> What To Train? How To Train? How Hard To Train? <br /> You leave that to me. It Is My DNA! It's Your Turn Now. <br /> <br /> "Balance" is Nature's Law – I'm Ready & If You Are too then click:</h1>
      
      </div>

      <div className='button'>
        <a href="/services/launchpad" className='launch-button'>Launch YourSelf </a>
      </div>    


      <div className='timeline-section'>

      <div className='owntimeline-section__right'> 
          <img  style={{transition:"none", animation:"none"}} src={dp} alt="" />
      </div> 

      <div className='owntimeline-section__left'>
          <h1 className='own'>Hail Storm - Hurricane - Volcanic Lava</h1>

          <p>If You're Ready <br /> I'll turn the world upside down 100%- <br /> Including you.</p>

          <a href="/about" className='button'>
            Know More.
          </a>
      </div>


      </div>
      <Testimonials name="MK" />


    </>
  );
}

export default Home