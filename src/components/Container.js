import React from 'react'
import '../components/Container.css'
import banner from '../images/banner.png'
import google from '../images/google_play.svg'
import apple from '../images/appstorebutton.svg'


const Container = () => {
  return (
    <div className='Container'>
        <div>
            <div className='container-text'>
                <h1>Ecommerce to take<br/>
                <span>The Best of India to the Rest of India</span></h1>
            </div>
            <div className='store'>
                <img src={google} alt=''className='store' />
                <img src={apple} alt='' className='store'/>
            </div>
        </div>
        
        <div className='conatiner-img'>
            <img src={banner} alt ='' className='banner-img'/>
        </div>
    </div>
  )
}

export default Container