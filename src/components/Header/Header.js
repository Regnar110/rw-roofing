import React from 'react';
import './header.scss'

const Header = ({ header }) => {
    return (
        <h1 className='out-header'>{header}</h1>
    )
}

export default Header;