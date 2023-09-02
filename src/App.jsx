import { useState,useEffect} from 'react'
import './App.scss'
import {Navbar, Footer} from './components'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {Home, About, Contact, Services, PopUp, Emerge,Transcend,LaunchPad,Apply,Legacy, OwnThatStage,Blog, CoffeWithMk,Blogs, SearchBlog,StressBuster} from './container'




function App() {
  const [isopen, setIsopen] = useState(false)
  const [isopen2, setIsopen2] = useState(false)
  const link = 'http://localhost:5173'

  // function apprear1(){
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       resolve(true)
  //     }, 5000);
  //   })
    
  // }

  const popupShownBefore = localStorage.getItem('popupShownBefore');

  const timer = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },5000)
  }) 
  

  if (!popupShownBefore) {
    timer
      .then((resolve)=>{
        setIsopen(resolve);
        setTimeout(()=>{
          localStorage.setItem('popupShownBefore', 'true');
          setIsopen(false)
        },2500)       
        
      })
  }
  
  return (
    <BrowserRouter>
        
      
        <div className={(isopen2 )?"app noscroll":"app"}>  
          <PopUp isopen={isopen} setIsopen={setIsopen} />  
          <StressBuster isopen2={isopen2} setIsopen2={setIsopen2}/>
            <Navbar setIsopen2={setIsopen2}/>
            {/* {(!isopen && !isopen2) && ( */}
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
            {/* )} */}
            
            <Footer newsteller={true}/>
        </div>
    </BrowserRouter>
  );

}

export default App
