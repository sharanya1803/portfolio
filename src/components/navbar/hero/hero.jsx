import React from 'react'
import './hero.css'
import profile_img from "../../../assets/profile_img.jpeg";
import resume from "../../../assets/myresume.pdf";


const hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" className="profile-img" />
            <h1><span>I'am Sharanya Kumari</span></h1>
            <p>I am a motivated student who loves learning new technologies and building responsive, user-friendly applications</p>
            <div className="hero-action">
                <div className='hero-connect'>
                    Connect with me
                </div>
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div className="hero-resume"> My Resume</div></a>
            </div>
        </div>

    )
}

export default hero
