import React from 'react';
import { Link } from 'react-scroll';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg  nav_container">
            <div className="container-fluid nav-justify">
                <a className="navbar-brand logo" href="#">Sawaira</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-secondary"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="menu">
                        <Link to="home" className="nav_items active" smooth={true} duration={1000}>Home</Link>
                        <Link to="experience" className="nav_items" smooth={true} duration={1000}>Experiences</Link>
                        <Link to="certificates" className="nav_items" smooth={true} duration={1000}>Certificates</Link>
                        <Link to="projects" className="nav_items" smooth={true} duration={1000}>Projects</Link>
                        <Link to="skills" className="nav_items" smooth={true} duration={1000}>Skills</Link>
                        <Link to="contact" className="nav_items" smooth={true} duration={1000}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
