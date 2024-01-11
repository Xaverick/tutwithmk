import { useState,useEffect} from 'react'
import './App.scss'
import {Navbar, Footer} from './components'
import {BrowserRouter, Routes , Route, useLocation, Navigate} from 'react-router-dom'
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

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [pathname]);
}

function App() {
  const [isopen, setIsopen] = useState(false)
  const [isopen2, setIsopen2] = useState(false)
  const [exit, setExit] = useState(false)
  const [cleanse, setCleanse] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [shouldRender, setShouldRender] = useState(true);
  let link = '';
  process.env.NODE_ENV === 'production' ?   link = "http://transformwithmk.com" : link = 'http://localhost:5173'
  const cleanseBefore = localStorage.getItem('cleanseBefore');


  useEffect(() => {
    const storedTimestamp = localStorage.getItem('timestamp');
    if (cleanseBefore && storedTimestamp) {
      const oneDayInMillis = 24*60*60*1000; // 1 day in milliseconds
      const currentTime = new Date().getTime();
      const storedTime = parseInt(storedTimestamp, 10);

      if (currentTime - storedTime >= oneDayInMillis) {
        // Clear data from local storage
        localStorage.removeItem('cleanseBefore');
        localStorage.removeItem('timestamp');
        setShouldRender(!shouldRender);
      }
    }
  }, [shouldRender]);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setIsopen(true);
    }, 150000); // 2.5 minutes in milliseconds

    return () => {
      clearTimeout(popupTimer);
    };
  }, [isopen]);
  

  return (
    <BrowserRouter>
        <ScrollToTop />

        {!cleanseBefore && (
          <div className={ clicked ? "hide" : "welcome"} >
            <Welcome exit={setExit} cleanse={setCleanse} clicked={setClicked} />
          </div>
          
        )}

        {!cleanseBefore && (
          <div className={ exit ? "exitPage" : "hide"}>
            <ThankYou />
          </div>
        )}

        <div className={ cleanseBefore ? "" : "hide"}>        
          <div className={(isopen2 )?"app noscroll":"app"}>  
            <PopUp isopen={isopen} setIsopen={setIsopen} />  
            <StressBuster isopen2={isopen2} setIsopen2={setIsopen2}/>
              <Navbar setIsopen2={setIsopen2}/>
                
                <Routes>
                    <Route exact path="/" element={ cleanseBefore && (<Navigate to='/home' replace/>)} />  
                    <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
                    <Route path="/services" element={<Suspense fallback={<div>Loading...</div>}><Services link={link}/></Suspense>} />
                    <Route path="/services/emerge" element={<Suspense fallback={<div>Loading...</div>}>< Emerge link={link}/></Suspense>} />
                    <Route path="/services/transcend" element={<Suspense fallback={<div>Loading...</div>}><Transcend link={link}/></Suspense>}/>
                    <Route path="/services/ownthatstage" element={<Suspense fallback={<div>Loading...</div>}><OwnThatStage link={link} /></Suspense>} />
                    <Route path="/services/legacy" element={<Suspense fallback={<div>Loading...</div>}><Legacy link={link} /></Suspense>}/>
                    <Route path="/services/launchpad" element={<Suspense fallback={<div>Loading...</div>}><LaunchPad link={link}/></Suspense>} />
                    <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About link={link}/></Suspense>} />
                    <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense> }/>
                    <Route path="/services/coffewithmk" element={<Suspense fallback={<div>Loading...</div>}><CoffeWithMk link={link}/></Suspense> }/>
                    <Route path="/blogs" element={<Suspense fallback={<div>Loading...</div>}><Blogs /></Suspense> }/>
                    <Route path="/blogs/:id" element={<Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>} />
                    <Route path="/blogs/search/:title" element={<Suspense fallback={<div>Loading...</div>}><SearchBlog /></Suspense>} />
                    <Route path="/apply" element={<Suspense fallback={<div>Loading...</div>}><Apply /> </Suspense>} />
                </Routes>

              <Footer newsteller={true}/>
          </div> 
        </div>
    </BrowserRouter>
  );

}

export default App
