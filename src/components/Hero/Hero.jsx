import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import AroInon from '../Assets/arrow.png'
import hero_icom from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className="hero-left">
                <h2>NEEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={AroInon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_icom} alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero