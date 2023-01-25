import React from 'react';
import Particle from './components/Particle/Particle';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
        <Particle />
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        </>
    )
}

export default App;