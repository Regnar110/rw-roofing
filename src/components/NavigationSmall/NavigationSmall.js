import { elastic as Menu } from 'react-burger-menu'
import logo from '../../assets/logo-bg.png'
import './burgerLibStyles.scss'
import './navigationsmall.scss'
import { Link } from 'react-router-dom'

const NavigationSmall = () => {
    return(
        <Menu right width={'280px'}>
            <div className='small-logo'>
                <img src={logo} alt='inner-menu-company-logo'/>
            </div>
            <div className='items-wrapper'>
                <div className="menu-item"><Link className='link' to='/'>Start</Link></div>
                <div className="menu-item"><Link className='link' to='/about'>O firmie</Link></div>
                <div className="menu-item"><Link className='link' to='/projects'>Realizacje</Link></div>
                <div className="menu-item"><Link className='link' to='/services'>Usługi</Link></div>
                <div className="menu-item"><Link className='link' to='/contact'>Kontakt</Link></div>
                <div className="menu-item"><i className="fab fa-facebook fa-lg"/></div>
            </div>
      </Menu>

    )
}

export default NavigationSmall;