import React from 'react'
import './about.scss'
import aboutBg from '../../../assets/about/about-bg2.jpg'
import logoabout from '../../../assets/about/safety.svg'

const About = () => {
    return (
        <div className='about-background' style={
            {
                background: `url(${aboutBg}) center center no-repeat fixed`,
                backgroundSize: 'cover'
            }
        }>
            <div className='about-logo'>
                <img alt='about' src={logoabout}/>
            </div>
            <div className='about-content'>
                <p className='about-text'>JESTEŚ ZAINTERESOWANY NASZĄ OFERTĄ<span>?</span></p>
                <p className='about-text'>CHCIAŁBYŚ DOWIEDZIEĆ SIĘ WIĘCEJ O NASZEJ FIRMIE<span>?</span></p>
                <p className='about-text'>SPRAWDZIĆ NASZE KWALIFIKACJE ORAZ CO NAS WYRÓŻNIA<span>?</span></p>
                <div className='about-link'>Sprawdź</div>
            </div>
    </div>
    )
}

export default About;