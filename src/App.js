import React from 'react';
import './index.css';
import Divider from "./components/Divider";
import NavBar from "./containers/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import TechSkills from "./components/TechSkills";
const App = () =>{
    return (

        <div className="App leading-normal tracking-normal text-white gradient">

            <NavBar/>
            <Hero/>
            <AboutMe/>
            <Divider/>
            <Projects/>
            <TechSkills/>
            <Footer/>
        </div>


    );
};

export default App;