import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Button from './Components/Button/Button'
import Home from './Components/Home/Home'
import Explore from './Components/Explore/Explore'
import About from './Components/About/About'
import Email from './Components/Email/Email'
import Whatsapp from './Components/Whatsapp/Whatsapp'
import Instagram from './Components/Instagram/Instagram'
import Analytics from './Components/Analytics/Analytics'
import { BrowserRouter , Routes, Route,} from 'react-router-dom'
import Home_y from './Pages/Home_y'
import About_y from './Pages/About_y'
import Explore_y from './Pages/Explore_y'
import Nopage from './Pages/Nopage'
import Email_y from './Pages/Email_y'
import Whatsapp_y from './Pages/Whatsapp_y'
import Instagram_y from './Pages/Instagram_y'
import Analytics_y from './Pages/Analytics_y'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home_y/>}/>
            <Route path='/home' element={<Home_y/>}/>
            <Route path='/about' element={<About_y/>}/>
            <Route path='/explore' element={<Explore_y/>}/>
            <Route path='/email' element={<Email_y/>}/>
            <Route path='/whatsapp' element={<Whatsapp_y/>}/>
            <Route path='/instagram' element={<Instagram_y/>}/>
            <Route path='/analytics' element={<Analytics_y/>}/>
            <Route path='*' element={<Nopage/>}/>
        </Routes>
      </BrowserRouter>
      
     
    </div>
 
  )
}

export default App


 {/* <Navbar/> */}
      
      {/* <Explore/>
      <About/> 
      <Email/>
      <Whatsapp/>
      <Instagram/>
     <Analytics/> */}
     {/* <Email/> */}
     {/* <Whatsapp/> */}
     {/* <Explore/> */}