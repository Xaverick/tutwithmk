import React from 'react'
import './Home.scss'
import warrior from '../../assets/warrior1.gif'
import dp from '../../assets/dp.gif'
import ReactPlayer from "react-player";
import Testimonials from '../../components/Testimonial/Testimonials'
import Typewriter from "typewriter-effect";
import dots from '../../assets/dots.png'
import quoate2dp from '../../assets/quoate2dp.png'
import welcomegif from '../../assets/welcomegif.gif'
import welcomepng from '../../assets/welcomepng.png'
import dotart from '../../assets/dotart.png'

const Home = () => {
  return (
    <>  

      <div className="warrior-header">
        <img src={warrior} alt="" />
      </div> 

      <div id = 'quoate' className='home-course-feature'>
        <span className='home-heading'>
          <p>
          <span> I'm Different</span> <span className='secondline'><br />Ever thought that? <br /> <br /> </span>Surrounded by people & knowing that - Is An Awakening!</p>
        </span>

        
        <div className="video">
          <iframe src="https://komododecks.com/embed/recordings/GrfXUuNOctEPQN5YppEA?onlyRecording=1&autoplay=1" 
                className='bg-video' 
                allowfullscreen 
                allow="autoplay"
          />

          {/* <iframe 
            className="bg-video"
            // src="https://www.youtube.com/embed/nWp5vwsuF4E?autoplay=1&rel=0&mute=1"
            src="https://komododecks.com/embed/recordings/CSGGjCOKEASWhNy2v9YN?autoplay=1&mute=1"
            allowFullScreen
            allow="autoplay"
          /> */}

        </div>

        <p className='desc'><span>This World </span> <br />A Revolution A War. <br /> <br />
          {/* <span className='last-line'>Welcome to Your Clan!</span> */}
          <img src={welcomepng} alt="" />
        </p>

      </div>


{/* 
      <div className='quoate-2-background'>
    <div className='image-overlay'>   */}
      <div className="quoate-2">
        <h1 className='heading'>F R E Q U E N C Y - 11:11</h1>
        <div className='quoate-2-left'>
          <h1 className='home-heading'>Here you'll get the most sophisticated & powerful weapons (Skills & Abilities) to Establish Your True Self & that's the best humanitarian deed you can ever perform on this Planet.</h1>
          <h1 className='home-heading'>It's tough but not a suffering that you haven't already endured.</h1>

        </div>

        {/* <div className='quoate-2-right'>
          <img src={quoate2dp} alt="" />
        </div> */}
      </div>
      {/* </div>
      </div> */}

      <div className='quoate-3'>
        <span className='heading'>
            <p><span>T R A N S F O R M A T I O N</span> <br /> IS THE GAME</p>
            <p style={{margin:"1rem 0"}}>I welcome you to your Version X</p>
        </span>

        {/* <div className='four-dots'>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div> */}
        <img src={dotart} alt="" />

        <span className='heading'>
            <p>Version X: A Brand New, Superior, Revolutionary, Totally Revamped Version Of Old You. </p>
            {/* <img src={dots} alt="" /> */}
            <p> <br /> From the past 22yrs that's exactly what I've been delivering in India & Abroad. Now, Betterment & Improvement is not what I deliver... it's good, but once again, I don't deliver anything that is "Good".</p>
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


      <div className="quoate-4">

        <h1 className='home-heading'>Important: <br />  <br /> "Transformation" doesn't happen with your like or interest. Transformation is The Game of Winners! It requires "I Want It" & If you have that Fuel in you then:</h1>
        <h1 className='home-heading'> <br /> What To Train? How To Train? How Hard To Train? <br /> You leave that to me. It Is My DNA! It's Your Turn Now. <br /> <br /> "Balance" is Nature's Law – I'm Ready & If You Are too then click:</h1>
      
      </div>

      <div className='button'>
        <a href="/services/coffewithmk" className='launch-button'>Launch YourSelf </a>
      </div>    



      <Testimonials name="MK" />

      <div className="testimonial-video">
        <div className='videos'>
          <iframe 
            className="bg-video"
            src="https://komododecks.com/embed/recordings/Kaw1FELtQ3EIlWAT2PKC?onlyRecording=1"
            allowFullScreen
            allow="autoplay"
          />

          <h3>Daniel Stangar - Slovakia</h3>

        </div>

        <div className='videos'>
          <iframe 
            className="bg-video"
            src="https://komododecks.com/embed/recordings/RjM3HMJjOrOrGJFthA5a?onlyRecording=1"
            allowFullScreen
            allow="autoplay"
          />

          <h3> U.S - Celebrity Trainer</h3>
        </div>

        <div className='videos'>
          <iframe 
            className="bg-video"
            src="https://komododecks.com/embed/recordings/dGKpcGTQnIaTPVECFxYb?onlyRecording=1"
            allowFullScreen
            allow="autoplay"
          />

          <h3>Alberto Fabbri - Italy</h3>
        </div>

      </div>


      <div className='timeline-section'>
        <div className='owntimeline-section__right'> 
            <img  style={{transition:"none", animation:"none"}} src={dp} alt="" />
        </div> 

        <div className='owntimeline-section__left'>
            <h1 className='own'>Hail Storm... <br /> Hurricane... <br /> Volcanic Lava! </h1>

            <p>If You're Ready <br /> I'll turn the world upside down - <br /> Including you.</p>

            <a href="/about" className='button'>
              Know More
            </a>
        </div>
      </div>

      
      <div className='background'>
        <div className="newsletter">
          <div className="newsletter-left">
            <h1>Join Your Clan</h1>
            <p>To Play The Big Game Warriors Join Warriors! Period.</p>
          </div>

      
          <div className="newsletter-right">
            <div className="signup">
              <input type="text" placeholder='Enter your Email'/>
              <a href="" className='button'>I'm In</a>
            </div>

            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit*</p> */}


          </div>
          
        </div>

      </div>



    </>
  );
}

export default Home