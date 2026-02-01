import React, { useState } from 'react';
import '../Styles/navbar.css';
import ReactPopUp from './ReactPopUp';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">Portfolio</div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? '✕' : '☰'}
                    </button>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#about">Skills</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1MCToyoD34Mv0FJAFDK2ukpdDGMqraFa3?usp=sharing">Photos</a></li>
                        <li><a href="https://drive.google.com/drive/folders/1DKvx5PYXDBSyn40_ISrc9B8uLSHfxC25?usp=sharing">Videos</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
            </header>
            {isOpen && <ReactPopUp toggleMenu={toggleMenu} />}
        </div>
    );
};

export default Navbar;