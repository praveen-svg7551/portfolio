import React from 'react'
import '../Styles/profile.css'

const Profile = () => {
    return (
        <div>
            <div class="image-div">
                <div class="image">

                    <img id="profile-img" src="/assets/Myimage.jpg" alt="Profile image" />

                </div>
                <section id="home">
                    <p id="typing-text">Hi, I'm <span class="web-dev">THIRUVEEDI PRAVEEN</span></p>


                    <p class="scroll-eff">
                        I am a,
                        <span>
                            <span>WEB DEVELOPER</span>
                            <span>GRAPHIC DESIGINER</span>
                            <span>PROGRAMMER</span>
                            <span>SOFTWARE DEVELOPER</span>
                    
                           
                            
                        </span>
                    </p>
                </section>
               
            </div>


            <div className="download">
                    <a href="../public/assets/resume2.pdf" download class="download-btn">Download Resume / CV</a>
                    <a href="https://wa.me/9440825680" class="download-btn">Contact</a>
                </div>

        </div>
    )
}

export default Profile