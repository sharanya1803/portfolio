import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpg'

const navbar = () => {
    
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className="navme">
                <li><p>Home</p></li>
                <li ><p>About me</p></li>
                <li ><p>projects</p></li>
                <li><p>Contact</p></li>
            </ul>
            <div className='navconnect'>
                connect with me
            </div>
        </div>
    )
}

export default navbar
