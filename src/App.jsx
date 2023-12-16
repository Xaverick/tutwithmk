import { useState,useEffect} from 'react'
import './App.scss'
import {Navbar, Footer} from './components'
import {BrowserRouter, Routes , Route, useLocation} from 'react-router-dom'
import {Home, About, Contact, Services, PopUp, Emerge,Transcend,LaunchPad,Apply,Legacy, OwnThatStage,Blog, CoffeWithMk,Blogs, SearchBlog,StressBuster} from './container'

import {Welcome, ThankYou} from './pages'

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
  // const popupShownBefore = localStorage.getItem('popupShownBefore');
  const cleanseBefore = localStorage.getItem('cleanseBefore');
  // const timer = new Promise ((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve(true)
  //   },10000)
  // }) 
  
  // // if (!popupShownBefore) {
  //   timer
  //     .then((resolve)=>{
  //       setIsopen(resolve);
    
  //     })
  // // }

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
                   
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/emerge" element={< Emerge link={link}/>} />
                    <Route path="/services/transcend" element={<Transcend link={link}/>} />
                    <Route path="/services/ownthatstage" element={<OwnThatStage link={link}/>} />
                    <Route path="/services/legacy" element={<Legacy link={link}/>} />
                    <Route path="/services/launchpad" element={<LaunchPad link={link}/>} />
                    <Route path="/about" element={<About link={link}/>} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/coffewithmk" element={<CoffeWithMk link={link}/>} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:id" element={<Blog />} />
                    <Route path="/blogs/search/:title" element={<SearchBlog />} />
                    <Route path="/apply" element={<Apply />} />
                </Routes>

              <Footer newsteller={true}/>
          </div> 
        </div>
    </BrowserRouter>
  );

}

export default App
