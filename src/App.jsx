import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { Experience } from './Components/Experience';
import { Skill } from './Components/Skill';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import Certificate from './Components/Certificate';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <NavBar />
            <div className="page-wrapper">
                <Home />
                <Experience />
                <Certificate />
                <Skill />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
