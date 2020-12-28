import React from 'react';
import './navigationlarge.scss'
import logo from '../../assets/logo-bg.png'

const NavigationLarge = ({ router }) => {
    return(
        <nav className='navbar'>
            <div className='logo'
            onClick={() => router('home')} 
            style={
                {
                    background: `url(${logo}) center center no-repeat`,
                    backgroundSize: '100px'
                }
            }>
            </div>
            <div className='directory'>
                <div className='nav-route' onClick={() => router('about')}>O firmie<div></div></div>
                <div className='nav-route' onClick={() => router('projects')}>Realizacje<div></div></div>
                <div className='nav-route' onClick={() => router('services')}>Usługi<div></div></div>
                <div className='nav-route' onClick={() => router('contact')}>Kontakt<div></div></div>
            </div>
            <div className='social'><i className="fab fa-facebook"></i></div>
        </nav>
    )
}

export default NavigationLarge;