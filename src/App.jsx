import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/Hero/HeroSection'
import ContactSection from './Components/Contact/ContactSection'
import AboutMe from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection/>
    
    <AboutMe/>
    <ContactSection/>
    
    </>
  )
}

export default App
