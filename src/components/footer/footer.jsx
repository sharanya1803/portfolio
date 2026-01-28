import React from 'react'
import './footer.css'
import logo from '../../assets/logo.jpg'
const footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='top-left'>
                    <img src={logo} alt="" className='img' />
                    <p> A creative developer with a strong foundation in HTML, CSS, and JavaScript</p>
                </div>
                <div className='top-right'>
                    <div className='email-input'>
                        <input type="email" placeholder='enter your email here' />


                    </div>
                    <div className='subscribe'>
                        Subscribe

                    </div>
                </div>
            </div>
            <hr />
            <div className='bottom'>
                <p className='bottom-left'>© 2026 Sharanya. All rights reserved.</p>
                <div className='bottom-right'>
                    <p>Terms and Services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>

            </div>

        </div>
    )
}

export default footer
