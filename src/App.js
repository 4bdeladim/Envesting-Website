import React from 'react'
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import GlobalStyle from './GlobalStyles'
import Security from './assets/Security.svg'
import Privacy from './assets/Privacy.svg'
import Hero from './assets/Hero.svg'
import Virtual from './assets/Virtual.svg'
import { data } from './data/hero'
import { services1Data } from './data/services'
import About from './components/AboutUs';
import Footer from './components/Footer';


const App = () => {

  const [click, setClick] = useState(false);

  const navbarHandler = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  }
    
  return (
    <>
      <GlobalStyle />
      <Navbar close={closeMobileMenu} open={click} click={click} navbarHandler={navbarHandler} /> 
      <Sidebar close={closeMobileMenu} open={click} />
      <HeroSection
        id='pricing'
        smallTitle={data.smallTitle}
        title={data.title}
        descreption={data.descreption}
        icon1={Security}
        icon2={Privacy}
        icon1Title={data.icon1Title}
        icon2Title={data.icon2title}
        Heroimg={Hero}
        input={true}
      /> 
      <About />   
      <HeroSection
        id='tisimonsials'
        smallTitle={services1Data.smallTitle}
        title={services1Data.title}
        descreption={services1Data.descreption}
        icon1={Security}
        icon2={Privacy}
        icon1Title={services1Data.icon1Title}
        icon2Title={services1Data.icon2title}
        Heroimg={Virtual}
        input={services1Data.subscribeInput}
        row = {services1Data.rowReverse}
      />  
      <Footer />
          
    </>
  )
}

export default App

