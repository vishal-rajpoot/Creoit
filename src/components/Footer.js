import React from 'react'
import logo from '../images/zoozle.svg'
import google from '../images/google_play.svg'
import apple from '../images/appstorebutton.svg'


import '../components/Footer.css'

const Footer = () => {
  return (
    <div className='copyright'>
   
    <div className='footer'>
        <div className='logo footer-links '>
            <img src={logo} alt='' />
            <p>ZOOZLE TECH PRIVATE LIMITED<br/>
            #30/1, Leemans Complex, 4th Floor Cunningham Road,<br/> Bangalore 560052, Karnataka</p>
            <a>letstalk@zoozle.in</a>
            <p>+91 8045684305</p>
        </div>
        <div className='mid footer-links'>
            <h2>FOR YOU</h2>
            <div className='links-footer'>
                <h2>FAQ</h2>
                <h2>Terms & Conditions</h2>
                <h2>Privacy Policy</h2>
                <h2>Product</h2>
                <h2>Discover</h2>
                <h2>Broadcasting Deals</h2>
            </div>
        </div>
        <div className='social-links footer-links'>
            <h3>SOCIAL LINKS</h3>
            <div className='imgs'>
                <img src={google} alt='' />
                <img src={apple} alt='' />

            </div>
        </div>
    </div>
    <p >© ZOOZLE TECH PRIVATE LIMITED 2022. All rights reserved</p>
    </div>
  )
}

export default Footer