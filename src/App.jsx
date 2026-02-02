import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Achievements from "./Achievements.jsx";
import Contact from "./Contact.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  
  return (
    <>
      <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      <Footer />
    </>
  )
}

export default App
