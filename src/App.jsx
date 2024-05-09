import { useState,useEffect} from 'react'
import './App.scss'
import {Navbar, Footer} from './components'
import {Routes , Route, useLocation, Navigate} from 'react-router-dom'
// import {About, Contact,PopUp,Transcend,LaunchPad,Apply,Legacy, OwnThatStage,Blog, CoffeWithMk,Blogs, SearchBlog,StressBuster} from './container'
import React, { lazy, Suspense } from 'react';
import {Welcome, ThankYou} from './pages'
const Home = lazy(() => import('./container/Home/Home'));

const Services = lazy(() => import('./container/Services/Services'));
const Emerge = lazy(() => import('./container/Services/emerge/emerge'));
const About = lazy(() => import('./container/About/About'));
const Contact = lazy(() => import('./container/Contact/Contact'));
const PopUp = lazy(() => import('./container/PopUp/PopUp'));
const Transcend = lazy(() => import('./container/Services/transcend/Transcend'));
const LaunchPad = lazy(() => import('./container/Services/LaunchPad/LaunchPad'));
const Apply = lazy(() => import('./container/Apply/Apply'));
const Legacy = lazy(() => import('./container/Services/legacy/Legacy'));
const OwnThatStage = lazy(() => import('./container/Services/OwnThatStage/OwnThatStage'));
const Blog = lazy(() => import('./container/Blogs/Blog/Blog'));
const CoffeWithMk = lazy(() => import('./container/CoffeWithMk/CoffeWithMk'));
const Blogs = lazy(() => import('./container/Blogs/Blogs'));
const SearchBlog = lazy(() => import('./container/Blogs/SearchBlog/SearchBlog'));
const StressBuster = lazy(() => import('./container/StressBuster/StressBuster'));

import SkeletonLoadingScreen from './LoadingScreen/SpinnerLoadingScreen.jsx';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [pathname]);
}



function ScrollToTop2() {
  const { pathname, hash } = useLocation();

  
  return null;
}

function App() {
  const [isopen, setIsopen] = useState(false)
  const [isopen2, setIsopen2] = useState(false)
  const [exit, setExit] = useState(false)
  const [cleanse, setCleanse] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [shouldRender, setShouldRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  let link = '';
  process.env.NODE_ENV === 'production' ?   link = "http://transformwithmk.com" : link = 'http://localhost:5173'
  const cleanseBefore = localStorage.getItem('cleanseBefore');


  // useEffect(() => {
  //   const storedTimestamp = localStorage.getItem('timestamp');
  //   if (cleanseBefore && storedTimestamp) {
  //     const oneDayInMillis = 24*60*60*1000; // 1 day in milliseconds
  //     const currentTime = new Date().getTime();
  //     const storedTime = parseInt(storedTimestamp, 10);

  //     if (currentTime - storedTime >= oneDayInMillis) {
  //       // Clear data from local storage
  //       localStorage.removeItem('cleanseBefore');
  //       localStorage.removeItem('timestamp');
  //       setShouldRender(!shouldRender);
  //     }
  //   }
  // }, [shouldRender]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname]);


  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setIsopen(true);
    }, 150000); // 2.5 minutes in milliseconds

    return () => {
      clearTimeout(popupTimer);
    };
  }, [isopen]);
  

  return (
    <>
        <ScrollToTop />
{/* 
        {!cleanseBefore && (
          <div className={ clicked ? "hide" : "welcome"} >
            <Welcome exit={setExit} cleanse={setCleanse} clicked={setClicked} />
          </div>
          
        )}

        {!cleanseBefore && (
          <div className={ exit ? "exitPage" : "hide"}>
            <ThankYou />
          </div>
        )} */}

        {/* <div className={ cleanseBefore ? "" : "hide"}>        */}
          <div className={(isopen2 )?"app noscroll":"app"}>  
            <PopUp isopen={isopen} setIsopen={setIsopen} />  
            <StressBuster isopen2={isopen2} setIsopen2={setIsopen2}/>             

              <Suspense fallback={loading ? <SkeletonLoadingScreen /> : null}>

                {loading ? <SkeletonLoadingScreen /> : null}
                {!loading && (<Navbar setIsopen2={setIsopen2}/>)}
                {!loading && (
                  
                  <Routes>
                        {/* <Route exact path="/home" element={ cleanseBefore && (<Navigate to='/' replace/>)} />   */}
                        <Route exact path="/home" element={
                          <Welcome exit={setExit} cleanse={setCleanse} clicked={setClicked} />
                         } />  
                        <Route path="/" element={<Home />}/>
                        <Route path="/services" element={<Services link={link}/>} />
                        <Route path="/services/emerge" element={<Emerge link={link}/>} />
                        <Route path="/services/transcend" element={<Transcend link={link}/>}/>
                        <Route path="/services/ownthatstage" element={<OwnThatStage link={link} />} />
                        <Route path="/services/legacy" element={<Legacy link={link} />}/>
                        <Route path="/services/launchpad" element={<LaunchPad link={link}/>} />
                        <Route path="/about" element={<About link={link}/>} />
                        <Route path="/contact" element={<Contact /> }/>
                        <Route path="/services/coffewithmk" element={<CoffeWithMk link={link}/>}/>
                        <Route path="/blogs" element={<Blogs /> }/>
                        <Route path="/blogs/:id" element={<Blog />} />
                        <Route path="/blogs/search/:title" element={<SearchBlog />} />
                        <Route path="/apply" element={<Apply />} />
                  </Routes>

                )}
                {!loading && (<Footer newsteller={true}/>)}
              </Suspense>
          </div> 
        {/* </div> */}
    </>
  );

}

export default App
