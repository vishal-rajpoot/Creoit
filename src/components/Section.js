import React from 'react'
import '../components/Section.css'
import image from '../images/man.jpg'
const Section = () => {
  return (
    <div className='section'>
        <div className='section-text'>
            <h1>Why Zoozle?</h1>
            <p>Business owners can list their products on zoozle for free and sell <br/>them to millions of business buyers across India. On zoozle you pay a<br/> small commission on sales</p>
            <p>To increase sales on zoozle, business owners can generate sales on <br/>demand by broadcasting their deals to specific buyers, in a specific<br/> city, region or nationwide.</p>
            <p>Zoozle coins are effective in helping businesses reach thousands of<br/> buyers. Thus zoozle creates a symbiotic Business community.</p>
        </div>
        <div className='section-img'>
            <img src={image} alt='' className='manImage'/>
        </div>
        <div className='boxes'>
            <div className='boxes-inside'>
                <img src='' alt=''/>
                <p>Buy products at lower price than available online</p>
            </div>
            <div className='boxes-inside'>
                <img src='' alt=''/>
                <p>Sell products at lowest commission</p>
            </div><div className='boxes-inside'>
                <img src='' alt=''/>
                <p>Generate sales on demand</p>
            </div>

        </div>

    </div>
  )
}

export default Section