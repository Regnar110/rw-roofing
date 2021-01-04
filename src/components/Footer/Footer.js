import React from 'react';
import footer_logo from '../../assets/logo-bg.png'
import './footer.scss'
import { Link } from 'react-router-dom'
import tel from '../../assets/contact/tel.svg'
import mail from '../../assets/contact/mail.svg'
import gotoblack from '../../assets/footer/goto-black.svg'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <div className='footer-top'>
                <div className='footer-logo'>
                    <img alt='footer-rw' src={footer_logo}/>
                </div>
                <div className='footer-desc'>
                    <p>Dekarstwo RW to lokalna firma dekarska działająca w branży od 2017 roku i operująca na obszarze Starogardu Gdańskiego oraz w okolicach. Doświadczeni dekarze poradzą sobie z każdym wyzwaniem i sprostają Państwa oczekiwaniom.</p>
                </div>
                <div className='footer-contact'>
                    <div className='contact-content'>
                        <h2>Dekarstwo<img alt='footer-rw' src={footer_logo}/></h2>
                        <div className='tel'>
                            <img alt='tel' src={tel}/>
                            <p>123-456-789</p>
                        </div>
                        <div className='mail'>
                            <img alt='mail' src={mail}/>
                            <p>dekarstwoRW@gmail.com</p>
                        </div>
                        <div className='fb'>
                            <i className="fab fa-facebook fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div className='shortcuts-small'>
                    <h2>Na skróty</h2>
                    <Link className='footer-link' to='/'><img alt='route' src={gotoblack} />Start</Link>
                    <Link className='footer-link' to='/about'><img alt='route'src={gotoblack} />O firmie</Link>
                    <Link className='footer-link' to='/services'><img alt='route' src={gotoblack} />Usługi</Link>
                    <Link className='footer-link' to='/projects'><img alt='route' src={gotoblack} />Realizacje</Link>
                    <Link className='footer-link' to='/contact'><img alt='route' src={gotoblack} />Kontakt</Link>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>© Dekarstwo RW 2021 Rafał Wrycza <img alt='footer-rw' src={footer_logo}/></p>
            </div>
        </footer>
    )
}

export default Footer;