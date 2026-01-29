import React, { useRef } from "react";
import './navbar.css'
import logo from '../../assets/logo.jpg'
import toggle from '../../assets/toggle.png'
import closemenu from '../../assets/closemenu.png'
const navbar = () => {
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }


    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <img src={toggle} onClick={openMenu} alt="" className='nav-open' />

            <ul ref={menuRef} className="navme">
                <img src={closemenu} onClick={closeMenu} alt="" className='nav-close' />
                <li><p>Home</p></li>
                <li ><p>About me</p></li>
                <li ><p>projects</p></li>
                <li><p>Contact</p></li>
            </ul>
            <div className='navconnect'>
                <a href="#contact">Connect with Me</a>
            </div>
        </div>
       
    )
}

export default navbar
