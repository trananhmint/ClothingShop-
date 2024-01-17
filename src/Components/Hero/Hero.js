import React from 'react'
import './Hero.css'
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import hero_image from '../Assets/hero_img.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <span><WavingHandOutlinedIcon /></span>
                </div>
                <p>collection</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <ArrowForwardOutlinedIcon />
            </div>
            </div>
            
            <div className="hero-right">
                <img src={hero_image} alt=""/>
            </div>
        </div>
    )
}

export default Hero