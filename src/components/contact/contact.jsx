import React from 'react'
import './contact.css'

const contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className='title'>
                <h1>Get In Touch</h1>
            </div>
            <div className='section'>
                <div className='left'>
                    <h1>Let's talk</h1>
                    <p>Feel free to contact me for any suitable opportunities or further information.</p>
                    <div class="contact-info">
                        <p>✉ sharanyak43@gmail.com</p>
                        <p>📍 India</p>
                        <p>📞 +91 89866 93722</p>
                    </div>
                </div>
                <form className='right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Your email</label>
                    <input type='email' placeholder='Enter your Email' name='email' />
                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rouws='8' placeholder='Enter your message'></textarea>
                    <button type="submitt" className='suubmit'>Submit Now!</button>
                </form>
            </div >

        </div >
    )
}

export default contact
