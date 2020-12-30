import React from 'react';
import './navigationlarge.scss'
import logo from '../../assets/logo-bg.png'
import {Link} from 'react-router-dom';

const NavigationLarge = () => {
    return(
        <nav className='navbar'>
            <div className='logo'
            style={
                {
                    background: `url(${logo}) center center no-repeat`,
                    backgroundSize: '100px'
                }
            }>
            </div>
            <div className='directory'>
                <Link to='/' className='nav-route'>Start<div></div></Link>
                <Link to='/about' className='nav-route'>O firmie<div></div></Link>
                <Link to='/services' className='nav-route'>Usługi<div></div></Link>
                <Link to='/projects' className='nav-route'>Realizacje<div></div></Link>
                <Link to='/contact' className='nav-route'>Kontakt<div></div></Link>

            </div>
            <div className='social'><i className="fab fa-facebook"></i></div>
        </nav>
    )
}

export default NavigationLarge;