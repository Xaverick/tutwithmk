import { useState,useEffect} from 'react'
import './App.scss'
import {Navbar, Footer} from './components'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {Home, About, Contact, Services, PopUp, Emerge,Transcend,LaunchPad,Legacy, OwnThatStage,Blog, CoffeWithMk,Blogs, SearchBlog} from './container'


function App() {
  const [isopen, setIsopen] = useState(false)
  const timer = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },25000)
  })

 
  const popupShownBefore = localStorage.getItem('popupShownBefore');
  if (!popupShownBefore) {
    timer
      .then((resolve)=>{
        setIsopen(resolve)
        localStorage.setItem('popupShownBefore', 'true');
      })
  }

  return (
    <BrowserRouter>
      
        <div className={isopen?"app noscroll":"app"}>  
        <PopUp isopen={isopen} setIsopen={setIsopen} />  
        
          <Navbar />
          {!isopen && (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/emerge" element={< Emerge />} />
                <Route path="/services/transcend" element={<Transcend />} />
                <Route path="/services/ownthatstage" element={<OwnThatStage />} />
                <Route path="/services/legacy" element={<Legacy/>} />
                <Route path="/services/launchpad" element={<LaunchPad />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/coffewithmk" element={<CoffeWithMk />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<Blog />} />
                <Route path="/blogs/search/:title" element={<SearchBlog />} />
            </Routes>
          )}
          
          <Footer />
        </div>
    </BrowserRouter>
  );

}

export default App
