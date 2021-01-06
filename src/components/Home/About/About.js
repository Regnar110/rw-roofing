import React from 'react'
import './about.scss'
import aboutBg from '../../../assets/slider-photos/s3.jpg'
import logoabout from '../../../assets/logo-bg.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <div className='header'>
                <h1></h1>
            </div>
            <div className='about-content' style={{
                background: `url(${aboutBg}) center center no-repeat`,
                backgroundSize: 'cover'
            }}>
                <div className='about-logo'>
                    <img alt='about' src={logoabout}/>
                </div>
                <div className='text'>
                    Firma dekarska RW została założona w 2017 roku.
                    Codziennym celem naszej firmy jest zapewnienie 100% satysfakcji klienta z naszych usług.
                    Od pierwszego kontaktu z nami, aż do zakończenia pracy, skupiamy się na Tobie, naszym kliencie, i upewniamy się, że wybierając naszą firmę dokonałeś najlepszego możliwego wyboru!
                    Doświadczenie naszych pracowników czyni naszą firmę konkurencyjną w środowisku branży pokryć dachowych. Nasza praca to zawsze dobra praca!
                    <div className='more-about'>
                        <Link to='/about'><div className='aboutBtn'>Więcej o nas</div></Link>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default About;