import React from 'react'
import { useState } from 'react';
import './contact.css'

const contact = () => {



    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "8ab8fa00-8cd0-4c11-977c-3ae451947d8c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };


    <form onSubmit={onSubmit}>
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <button type="submit">Submit</button>
        <p>{result}</p>
    </form>


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
            <form onSubmit={onSubmit} className='right'>
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
);}


export default contact
