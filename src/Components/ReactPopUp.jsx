import React from 'react';

const ReactPopUp = ({ toggleMenu }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            toggleMenu();
        }
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <ul className="nav-links popup-nav">
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="https://drive.google.com/drive/folders/1MCToyoD34Mv0FJAFDK2ukpdDGMqraFa3?usp=sharing" onClick={toggleMenu}>Photos</a></li>
                <li><a href="https://drive.google.com/drive/folders/1DKvx5PYXDBSyn40_ISrc9B8uLSHfxC25?usp=sharing" onClick={toggleMenu}>Videos</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </div>
    );
};

export default ReactPopUp;
