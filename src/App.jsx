import { useState } from 'react'
import './App.scss'
import {Navbar, Footer} from './components'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {Home, About, Contact, Services,Emerge,Transcend,LaunchPad,Legacy, OwnThatStage, CoffeWithMk} from './container'


function App() {
  return (
    <BrowserRouter>
    <div className='app'>    
      <Navbar />
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
        </Routes>
      
      <Footer />
    </div>
    </BrowserRouter>
  );

}

export default App
