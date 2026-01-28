import React from 'react'
import './about.css'

import profile_img from "../../assets/profile_img.jpeg";
const about = () => {
    return (
        <div id='about' className='about'>
            <div className='title'>
                <h1>About Me</h1>

            </div>
            <div className='about-section'>
                <div className='about-left'>
                    <img src={profile_img} alt="" className="profile-img" />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p> I am a passionate and motivated learner with a strong interest in web development. I enjoy building clean, responsive, and user-friendly websites using modern technologies. I am always eager to learn new skills and improve my problem-solving abilities.</p>
                        <p>Motivated and detail-oriented individual with a strong interest in web development and modern technologies. Skilled in building responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React. Always eager to learn, improve skills, and contribute effectively to a growing organization.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className='about-skill'><p>React js</p> <hr style={{ width: "40%" }} /></div>
                        <div className='about-skill'><p>Javascript</p><hr style={{ width: "50%" }} /></div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default about
