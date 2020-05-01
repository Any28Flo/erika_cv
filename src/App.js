import React from 'react';
import './index.css';
import Divider from "./components/Divider";
import NavBar from "./containers/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
export default App;

function App() {
    return (

        <div className="App leading-normal tracking-normal text-white gradient">

            <NavBar/>
            <Hero/>
            <AboutMe/>
            <Divider/>
            <Skills/>
            <Footer/>

        </div>


);
}
