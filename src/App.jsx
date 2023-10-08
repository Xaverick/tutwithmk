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

  let link = '';
  process.env.NODE_ENV === 'production' ?   link = "http://transformwithmk.com" : link = 'http://localhost:5173'
  const popupShownBefore = localStorage.getItem('popupShownBefore');

  const timer = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },90000)
  }) 
  

  if (!popupShownBefore) {
    timer
      .then((resolve)=>{
        setIsopen(resolve);
        localStorage.setItem('popupShownBefore', 'true');
    
      })
  }
  
  return (
    <BrowserRouter>
        <ScrollToTop />
        <div className={ clicked ? "hide" : "welcome"} >
          <Welcome exit={setExit} cleanse={setCleanse} clicked={setClicked} />
        </div>
        

        <div className={ exit ? "exitPage" : "hide"}>
          <ThankYou />
        </div>

        <div className={ cleanse ? "" : "hide"}>        
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
