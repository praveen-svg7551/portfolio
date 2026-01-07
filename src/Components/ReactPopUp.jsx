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
                <li><a href="#about" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#photos" onClick={toggleMenu}>Photos</a></li>
                <li><a href="#videos" onClick={toggleMenu}>Videos</a></li>
            
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </div>
    );
};

export default ReactPopUp;
