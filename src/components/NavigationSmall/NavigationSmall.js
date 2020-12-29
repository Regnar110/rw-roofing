import { elastic as Menu } from 'react-burger-menu'
import logo from '../../assets/logo-bg.png'
import './burgerLibStyles.scss'
import './navigationsmall.scss'

const NavigationSmall = ({ router }) => {
    return(

        <Menu outerContainerId={ "home" } right width={'280px'}>
            <div className='small-logo'>
                <img src={logo} alt='inner-menu-company-logo'/>
            </div>
                <div className='items-wrapper'>
                    <div id="home" className="menu-item" onClick={() => router('home')}>Start</div>
                    <div id="about" className="menu-item" onClick={() => router('about')}>O firmie</div>
                    <div id="projects" className="menu-item" onClick={() => router('projects')}>Realizacje</div>
                    <div id="services" className="menu-item" onClick={() => router('services')}>Usługi</div>
                    <div id="contact" className="menu-item" onClick={() => router('contact')}>Kontakt</div>
                    <div className='social'><i className="fab fa-facebook fa-lg"></i></div>
                </div>
      </Menu>

    )
}

export default NavigationSmall;