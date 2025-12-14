import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TheCloudCrewAdvantage from './components/TheCloudCrewAdvantage';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TheCloudCrewAdvantage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
