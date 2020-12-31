import React from 'react'
import './about.scss'
import aboutBg from '../../assets/about/about-bg2.jpeg'
import logoabout from '../../assets/logo-bg.png'

const About = () => {
    return (
        <div className='about-background' style={
            {
                background: `url(${aboutBg}) center center no-repeat`,
                backgroundSize: 'cover'
            }
        }>
        <div className='about-container'>
            <div className='about-logo'>
                <img src={logoabout}/>
            </div>
            <div className='about-content'></div>
        </div>

        </div>
    )
}

export default About;