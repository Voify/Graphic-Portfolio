import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import LogoTrack from './components/LogoTrack';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import ServicePlans from './components/ServicePlans';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <LogoTrack />
      <Portfolio />
      <Skills />
      <ServicePlans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;