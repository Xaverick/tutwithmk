import React from "react";
import "./Home.scss";
import Testimonials from "../../components/Testimonial/Testimonials";
import welcomepng from "../../assets/welcomepng.webp";
import greendotart from "../../assets/greendotart.webp";
import bookcover1 from "../../assets/bookcover1.webp";
import TypeIt from "typeit-react";
import warrior from "../../assets/warriorVideo.mp4";
import {Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="warrior-header">                  
          <video autoPlay loop muted playsInline className="background">
            <source src={warrior} type="video/mp4" />
          </video>      
      </div>

      <div id="quoate" className="home-course-feature">
        <span className="home-heading">
          <p>
            <span> I'm Different!</span>{" "}
            <span className="secondline">
              <br />
              Ever thought that? <br /> <br />{" "}
            </span>
            Surrounded by people & knowing that - Is An Awakening!
          </p>
        </span>

        <div className="video">
          <iframe
            src="https://fast.wistia.net/embed/iframe/36z4cf0inl"
            allowFullScreen
            className="bg-video"
          ></iframe>
        </div>

        <p
          className="desc"
          style={{ backgroundColor: "black", padding: "4rem 0" }}
        >
          <span>
            This World <br />A Revolution - A War. <br />{" "}
          </span>{" "}
          <br />
          <img src={welcomepng} alt="" />
        </p>
      </div>


      <div className="quoate-2">
        <h1 className="heading">F R E Q U E N C Y - 11:11</h1>
        <div className="quoate-2-left">
          <h1 className="home-heading">
            Here you'll get the most sophisticated & powerful weapons (Skills &
            Abilities) to Establish Your True Self & that's the best
            humanitarian deed you can ever perform on this Planet.
          </h1>
          <h1 className="home-heading">
            It's tough but not a suffering that you haven't already endured.
          </h1>
        </div>
      </div>


      <div className="quoate-3">
        <span className="heading">
          <p>
            <span>T R A N S F O R M A T I O N</span> <br /> IS THE GAME
          </p>
          <p style={{ margin: "1rem 0" }}>I Welcome You To Your Version X</p>
        </span>

        <img src={greendotart} alt="" />

        <span className="heading">
          <p>
            Version X: A Brand New, Superior, Revolutionary, Totally Revamped
            Version Of Old You.{" "}
          </p>
      
          <p>
            {" "}
            <br /> From the past 22yrs that's exactly what I've been delivering
            in India & Abroad. Now, Betterment & Improvement is not what I
            deliver... it's good, but once again, I don't deliver anything that
            is "Good".
          </p>
        </span>
      </div>

      <div className="dynamic-writing">
        <div className="heading">
          <div className="subheading">
            <TypeIt
              options={{
                strings: ["I Deliver what I Promise."],
                speed: 100,
                deleteSpeed: 30,
                waitUntilVisible: true,
                loop: true,
              }}
              getBeforeInit={(instance) => {
                instance.pause(10000).delete();
                return instance;
              }}
            />
          </div>

          <TypeIt
            options={{
              strings: [` My Promise – "Transformation." `],
              speed: 100,
              deleteSpeed: 20,
              startDelay: 4000,
              waitUntilVisible: true,
              loop: true,
            }}
            getBeforeInit={(instance) => {
              instance.pause(6000).delete().pause(2000);
              return instance;
            }}
          />

          <div className="lastline">
            <TypeIt
              options={{
                strings: ["That's it! End of Story. "],
                speed: 100,
                deleteSpeed: 20,
                waitUntilVisible: true,
                startDelay: 8000,
                loop: true,
              }}
              getBeforeInit={(instance) => {
                instance.pause(2000).delete().pause(6000);

                // Remember to return it!
                return instance;
              }}
            />
          </div>
        </div>
      </div>

      <div className="quoate-4">
        <h1 className="home-heading">
          <span>Important: </span> <br /> <br /> "Transformation" doesn't happen
          with your like or interest. <br /> Transformation is The Game of
          Winners! <br /> It requires "I Want It" & If you have that Fuel in you
          then:
        </h1>
        <h1 className="home-heading">
          {" "}
          <br /> What To Train? How To Train? How Hard To Train? <br /> You
          leave that to me. It Is My DNA! It's Your Turn Now. <br /> <br />{" "}
          "Balance" is Nature's Law – I'm Ready & If You Are too then click:
        </h1>
      </div>

      <div className="button">
        <Link to="/services/coffewithmk" className="launch-button">
          Launch YourSelf{" "}
        </Link>
      </div>

      <Testimonials name="MK" />

      <div className="testimonial-video">
        <div className="videos">
          <iframe
            className="bg-video"
            src="https://fast.wistia.net/embed/iframe/ryp6wlqwxp"
            allowFullScreen
            allow="autoplay"
          />

          <h3>Daniel Stangar - Slovakia</h3>
        </div>

        <div className="videos">
          <iframe
            className="bg-video"
            src="https://fast.wistia.net/embed/iframe/gzeqnjdigq"
            allowFullScreen
            allow="autoplay"
          />

          <h3> U.S. - Celebrity Trainer</h3>
        </div>

        <div className="videos">
          <iframe
            className="bg-video"
            src="https://fast.wistia.net/embed/iframe/5dxlwk605h"
            allowFullScreen
            allow="autoplay"
          />

          <h3>Alberto Fabbri - Italy</h3>
        </div>
      </div>

      <div style={{ gap: "0rem" }} className="timeline-section">
        <div
          className="owntimeline-section__right"
          style={{ marginBottom: "0" }}
        >
          <img
            style={{ transition: "none", animation: "none" }}
            src={bookcover1}
            alt=""
          />
        </div>

        <div className="owntimeline-section__left">
          <h1
            style={{ textAlign: "center", color: "var(--primary-color)" }}
            className="own"
          >
            <span className="small">TRANFORMATION </span> <br />{" "}
            <span>"You to The YOU" </span>{" "}
          </h1>
          <p
            style={{
              textAlign: "center",
              width: "100%",
              color: "var(--header-green)",
            }}
          >
            MK
          </p>
          <p className="bottom" style={{ textAlign: "center", width: "100%" }}>
            Book Launching Soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
